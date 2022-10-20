import gsap from 'gsap';

export default class ImageParallelX {
  constructor(el) {
    this.el = el;
    gsap.to(this.el, {
      y: '-15%',
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });
  }
}
