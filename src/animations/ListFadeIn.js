import gsap from 'gsap';

export default class ListFadeIn {
  constructor(el) {
    const list = el.querySelectorAll('li');

    gsap.from(list, {
      y: 50,
      stagger: 0.1,
      opacity: 0,
      // delay: el?.dataset?.delay,
      scrollTrigger: {
        trigger: el,
      },
    });
  }
}
