import gsap from 'gsap';
import { isTouchDevice } from './utils';

const scrollToEl = (scrollBarRef, className) => {
  if (isTouchDevice()) {
    gsap.to(window, { scrollTo: { y: `.${className}`, offsetY: 100 }, duration: 1 });
  } else {
    scrollBarRef?.scrollIntoView(document.querySelector(`.${className}`), {
      offsetTop: 100,
    });
  }
};

export default scrollToEl;
