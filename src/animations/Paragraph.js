import gsap from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';

export default class Paragraph {

  constructor(el) {
    this.paragraph = el;
    this.splitTextMain = new SplitText(el, {
      type: 'lines',
      linesClass: 'st-child',
    });
    this.splitText = new SplitText(el, {
      type: 'lines',
      linesClass: 'hidden',
    });

    gsap
      .from(el.querySelectorAll('.st-child'), {
        y: '100%',
        duration: 1,
        ease: 'expo.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          markers: true,
          scrub: true,
        },
      })
      .then(() => {
        this.splitText.revert();
        this.splitTextMain.revert();
      });
  }
}
