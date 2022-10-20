import gsap from 'gsap';

export default class ImageZoomOut {
  constructor(el) {
    this.el = el;

    this.initAnimation();
  }

  initAnimation() {
    gsap.to(this.el, {
      scale: 1,
      scrollTrigger: {
        trigger: this.el,
        scrub: true,
      },
    });
  }
}
