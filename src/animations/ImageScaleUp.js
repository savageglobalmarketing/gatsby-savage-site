import gsap from 'gsap';

export default class ImageScaleUp {
  constructor(el) {
    const img = el.querySelector('img');

    if (img) {
      gsap.set(img, { visibility: 'visible' });

      gsap.from(el, {
        height: 0,
        delay: 1,
        duration: 4,
        ease: 'expo.out',
      });
      gsap.from(img, {
        scale: 1.3,
        delay: 0.2,
        duration: 5,
        ease: 'expo.out',
      });
    }
  }
}
