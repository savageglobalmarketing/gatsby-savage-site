import autoBindReact from 'auto-bind/react';
import EventEmitter from 'events'
import GSAP from 'gsap'
// import Prefix from 'prefix'
import Paragraph from 'animations/Paragraph'
// import AsyncLoad from '../utils/AsyncLoad'
import Detection from '../utils/Detection'
import each from 'lodash/each'
import { mapEach } from '../utils/dom'
import { clamp, lerp } from '../utils/math'

export default class extends EventEmitter {
  constructor ({ classes, element, elements, isScrollable = true }) {
    super()

    autoBindReact(this)

    this.classes = {
      ...classes
    }

    this.selectors = {
      element,
      elements: {
        // preloaders: '[data-src]',

        // animationsParagraphs: '[data-animation="paragraph"]',
        animationsParagraphs: '.paragraph',

        ...elements
      }
    }

    this.scroll = {
      ease: 0.07,
      position: 0,
      current: 0,
      target: 0,
      limit: 0
    }

    this.isScrollable = isScrollable

    // this.transformPrefix = Prefix('transform')

    this.create()
  }

  create () {
    this.animations = []

    this.element = document.querySelector(this.selectors.element)
    this.elements = {}

    each(this.selectors.elements, (selector, key) => {
      if (selector instanceof window.HTMLElement || selector instanceof window.NodeList) {
        this.elements[key] = selector
      } else if (Array.isArray(selector)) {
        this.elements[key] = selector
      } else {
        this.elements[key] = this.element.querySelectorAll(selector)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = this.element.querySelector(selector)
        }
      }
    })

    if (this.isScrollable) {
      this.scroll = {
        ease: 0.07,
        position: 0,
        current: 0,
        target: 0,
        limit: this.elements.wrapper.clientHeight - window.innerHeight
      }
    }

    this.createAnimations()
  }

  /**
   * Animations.
   */
  createAnimations () {
    /**
     * Paragraphs.
     */
    this.animationsParagraphs = mapEach(this.elements.animationsParagraphs, element => {
      return new Paragraph({ element })
    })

    this.animations.push(...this.animationsParagraphs)

  }

  reset () {
    this.scroll = {
      ease: 0.07,
      position: 0,
      current: 0,
      target: 0,
      limit: 0
    }
  }

  set (value) {
    this.scroll.current = this.scroll.target = this.scroll.last = value

    this.transform(this.elements.wrapper, this.scroll.current)
  }

  show (url) {
    this.reset()

    this.isVisible = true

    this.addEventListeners()

    GSAP.set(document.documentElement, {
      backgroundColor: this.element.getAttribute('data-background'),
      color: this.element.getAttribute('data-color')
    })

    return Promise.resolve()
  }

  hide (url) {
    this.isVisible = false

    this.removeEventListeners()

    return Promise.resolve()
  }

  transform (element, y) {
    element.style[this.transformPrefix] = `translate3d(0, ${-Math.round(y)}px, 0)`
  }

  /**
   * Events.
   */
  onResize () {
    if (!this.elements.wrapper) return

    window.requestAnimationFrame(_ => {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight

      each(this.animations, animation => {
        animation.onResize && animation.onResize()
      })
    })
  }

  onTouchDown (event) {
    if (!Detection.isPhone()) return

    this.isDown = true

    this.scroll.position = this.scroll.current
    this.start = event.touches ? event.touches[0].clientY : event.clientY
  }

  onTouchMove (event) {
    if (!Detection.isPhone() || !this.isDown) return

    const y = event.touches ? event.touches[0].clientY : event.clientY
    const distance = (this.start - y) * 3

    this.scroll.target = this.scroll.position + distance
  }

  onTouchUp (event) {
    if (!Detection.isPhone()) return

    this.isDown = false
  }

  onWheel (normalized) {
    const speed = normalized.pixelY

    this.scroll.target += speed

    return speed
  }

  /**
   * Listeners.
   */
  addEventListeners () {
  }

  removeEventListeners () {
  }

  /**
   * Frames.
   */
  update () {
    this.scroll.target = clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)
    this.scroll.current = Math.floor(this.scroll.current)

    if (this.scroll.current < 0.1) {
      this.scroll.current = 0
    }

    if (this.elements.wrapper) {
      this.transform(this.elements.wrapper, this.scroll.current)
    }

    each(this.animations, animation => {
      animation.update && animation.update(this.scroll)
    })

    this.scroll.last = this.scroll.current
  }
}
