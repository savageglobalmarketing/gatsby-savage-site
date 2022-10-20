import React, {useEffect, useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
// import FontFaceObserver from 'fontfaceobserver';
// import { PageContentType } from 'models/types.interface';
// import loadImages from 'utils/loadImages';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
const PreLoader = ({ children, onFinish }) => {
  //const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    // let imgList = [];
    //
    // imgList.push(data?.callAction?.background?.sourceUrl);
    // imgList.push(data?.gridImagem?.featuredImage?.sourceUrl);
    // imgList.push(data?.gridImagem?.firstImage?.sourceUrl);
    // imgList.push(data?.gridImagem?.secondImage?.sourceUrl);
    // imgList.push(data?.gridImagem?.thirdImage?.sourceUrl);
    // imgList.push(data?.gridImagem?.fourthImage?.sourceUrl);
    // imgList.push(data?.header?.background?.sourceUrl);
    // imgList.push(data?.joinTeam?.background?.sourceUrl);
    // imgList.push(data?.header?.image?.sourceUrl);
    // imgList = imgList.filter((el) => !!el);

    const overlayPath = document.querySelector('.overlay__path');
    gsap.set(overlayPath, {
      attr: {d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z'},
    });

     setTimeout(onFinish, 1000);
     }, []);

    //   loadImages(
    //     imgList,
    //     () => {
    //       // const fontA = new FontFaceObserver('Kimberley Bl');
    //       // const fontB = new FontFaceObserver('Montserrat');
    //       //
    //       // Promise.all([fontA.load(), fontB.load()]).then(function () {
    //       //   setLoaded(true);
    //       //   setTimeout(onFinish, 1000);
    //       // });
    //
    //       gsap.set('.preloader-overlay', {
    //         backgroundColor: 'transparent',
    //       });
    //
    //       gsap.to('.preloader-display', {
    //         y: '-100%',
    //         ease: 'power2.in',
    //         opacity: 0,
    //         delay: 0.8,
    //         duration: 0.5,
    //       });
    //
    //       const tl = gsap.timeline({ delay: 1 });
    //       tl.to(overlayPath, {
    //         duration: 0.3,
    //         ease: 'power2.in',
    //         attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },
    //       }).to(overlayPath, {
    //         duration: 0.8,
    //         ease: 'power4',
    //         attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
    //       });
    //     },
    //     (c: any) => {
    //       gsap.to('.preload-progress-status', {
    //         width: `${(c / imgList.length) * 100}%`,
    //       });
    //     }
    //   );
    // }, []);

    return (
      <div className="preLoader">
        <div className="overlay preloader-overlay">
          <div className="display preloader-display">
            <div className="logo">
              <StaticImage src="../../images/lionshare-logo.svg" alt="logo"/>
            </div>
            <div className="progress">
              <div className="status preload-progress-status"/>
            </div>
          </div>
        </div>
        {/*{loaded && <div>{children}</div>}*/}
        <div>{children}</div>
      </div>
    );
  };

export default PreLoader;
