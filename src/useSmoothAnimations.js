import { useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImageZoomOut from './animations/ImageZoomOut';
import Paragraph from './animations/Paragraph';
import ImageParallelX from './animations/ImageParallelX';
import ListFadeIn from './animations/ListFadeIn';
import ImageScaleUp from './animations/ImageScaleUp';
import { isTouchDevice } from './animations/utils';


const useSmoothAnimation = ({ loaded, el }) => {
  const [scrollBarRef, setScrollBarRef] = useState(null | Scrollbar);

  let bodyScrollBar;
  useEffect(() => {
    if (!loaded) return;
    initScrollBar();
    initScrollProxy();
    initImageZoomOut();
    initParagraph();
    initImageParallelX();
    initListFadeIn();
    initImgScale();

    return destroy;
  }, [loaded]);

  const handleOnScroll = (el) => {
    const navBar = document.querySelector('.navbar-main');

    if ((el?.offset?.y ?? window.scrollY) > 120) {
      if (navBar) {
        navBar.style.background = '#0c2340';
      }
    } else {
      if (navBar) {
        navBar.style.background = 'transparent';
      }
    }
  };

  const initScrollBar = () => {
    const scrollContent = document.querySelector(el ?? '.scroll-content');
    const isTouch = isTouchDevice();

    if (scrollContent) {
      if (isTouch) {
        scrollContent.style.height = 'max-content';
        document.body.style.overflow = 'auto';
      } else {
        bodyScrollBar = Scrollbar.init(scrollContent, {
          continuousScrolling: true,
          alwaysShowTracks: true,
        });
        setScrollBarRef(bodyScrollBar);
      }
    }
  };

  const initScrollProxy = () => {
    const scrollContent = document.querySelector(el ?? '.scroll-content');
    const isTouch = isTouchDevice();

    if (isTouch) {
      window.addEventListener('scroll', handleOnScroll);
    } else {
      if (scrollContent) {
        ScrollTrigger.scrollerProxy(scrollContent, {
          scrollTop(value) {
            if (arguments.length && value) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          },
        });

        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scrollContent });

        bodyScrollBar.addListener(handleOnScroll);
      }
    }
  };

  const initImageZoomOut = () => {
    const imagesList = document.querySelectorAll(el ?? '.image');
    const imagesGrid = document.querySelector('.img-zoom-out-grid');
    const imagesGridList = imagesGrid?.querySelectorAll('img');

    imagesList?.forEach((el) => {
      new ImageZoomOut(el);
    });
    imagesGridList?.forEach((el) => {
      new ImageZoomOut(el);
    });
  };

  const initParagraph = () => {
    const items = document.querySelectorAll('.paragraph');
    items.forEach((el) => {
      new Paragraph(el);
    });
  };

  const initImageParallelX = () => {
    const items = document.querySelectorAll('.img-parallelX');
    items.forEach((el) => {
      new ImageParallelX(el);
    });
  };

  const initListFadeIn = () => {
    const items = document.querySelectorAll('.list-fade-in');
    items.forEach((el) => {
      new ListFadeIn(el);
    });
  };

  const initImgScale = () => {
    const items = document.querySelectorAll('.img-scale-up');
    items.forEach((el) => {
      new ImageScaleUp(el);
    });
  };

  const destroy = () => {
    bodyScrollBar?.removeListener(handleOnScroll);
  };

  return {
    handleOnScroll,
    scrollBarRef,
  };
};

export default useSmoothAnimation;
