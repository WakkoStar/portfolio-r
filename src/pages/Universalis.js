import React, { useLayoutEffect, useRef } from 'react';
import firstImage from '../assets/Universalis/constellation.png';
import secondImage from '../assets/Universalis/tempsreel.png';
import thirdImage from '../assets/Universalis/procedural.png';
import mocks from '../assets/Universalis/phone.png';
const Universalis = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const firstImg = useRef(null);
  const secondImg = useRef(null);
  const thirdImg = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => {
      [firstImg, secondImg, thirdImg].forEach((ref, index) => {
        if (!ref?.current) return;
        const topPosition = ref.current.getBoundingClientRect().top;
        if (topPosition < 300) {
          ref.current.style.opacity = 1;
          if (index == 1) {
            ref.current.style.marginLeft = '0vw';
            return;
          }
          ref.current.style.marginRight = '0vw';
          return;
        }
        ref.current.style.opacity = 0;
        if (index == 1) {
          ref.current.style.marginLeft = '20vw';
          return;
        }
        ref.current.style.marginRight = '20vw';
      });

      [firstRef, secondRef, thirdRef, fourthRef].forEach((ref) => {
        if (!ref?.current) return;
        const topPosition = ref.current.getBoundingClientRect().top;
        if (topPosition < 250) {
          ref.current.style.opacity = 1;
          return;
        }
        ref.current.style.opacity = 0;
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="header fadeIn">
        <h1>UNIVERSALIS</h1>
        <p>Application mobile Unity</p>
      </div>
      <div className="main fadeIn">
        <div className="section">
          <div className="section-placeholder"></div>
          <div className="section-texts" ref={firstRef}>
            <h1 className="section-texts-number">01.</h1>
            <h1 className="section-texts-title">
              présentation <br />
              du projet
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              massa nunc, fringilla in felis sit amet, interdum auctor lorem.
              Sed mollis, ipsum et aliquam sollicitudin, ex tortor efficitur
              felis, sit amet tempor leo justo sed augue. Nulla dapibus, ex
              vitae varius lobortis, dolor mauris sollicitudin sapien, ac
              facilisis erat magna at sapien. Maecenas sed massa massa. Quisque
              non turpis eu mi molestie venenatis ac sit amet diam. Sed egestas
              purus sit amet lacus finibus, at laoreet libero cursus. Cras
              sagittis felis purus, sed pretium metus porttitor at. Donec vel
              ligula commodo, tempus est ut, vestibulum mi. <br />
              <br />
              Vivamus consectetur, turpis sed ullamcorper vehicula, ante libero
              aliquet lacus, a ultricies leo lectus a urna. Nullam mauris felis,
              lacinia nec enim eget, ullamcorper ultrices orci. Morbi venenatis
              tellus ac sodales accumsan.
            </p>
          </div>
          <div className="section-image">
            <img src={firstImage} ref={firstImg} />
          </div>
        </div>
        <div className="section reversed">
          <div className="section-placeholder"></div>
          <div className="section-texts" ref={secondRef}>
            <h1 className="section-texts-number">02.</h1>
            <h1 className="section-texts-title">
              Position <br />
              en temps réel
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              massa nunc, fringilla in felis sit amet, interdum auctor lorem.
              Sed mollis, ipsum et aliquam sollicitudin, ex tortor efficitur
              felis, sit amet tempor leo justo sed augue. Nulla dapibus, ex
              vitae varius lobortis, dolor mauris sollicitudin sapien, ac
              facilisis erat magna at sapien. Maecenas sed massa massa. Quisque
              non turpis eu mi molestie venenatis ac sit amet diam. Sed egestas
              purus sit amet lacus finibus, at laoreet libero cursus. Cras
              sagittis felis purus, sed pretium metus porttitor at. Donec vel
              ligula commodo, tempus est ut, vestibulum mi. <br />
              <br />
              Vivamus consectetur, turpis sed ullamcorper vehicula, ante libero
              aliquet lacus, a ultricies leo lectus a urna. Nullam mauris felis,
              lacinia nec enim eget, ullamcorper ultrices orci. Morbi venenatis
              tellus ac sodales accumsan.
            </p>
          </div>
          <div className="section-image">
            <img src={secondImage} ref={secondImg} />
          </div>
        </div>
        <div className="section">
          <div className="section-placeholder"></div>
          <div className="section-texts" ref={thirdRef}>
            <h1 className="section-texts-number">03.</h1>
            <h1 className="section-texts-title">génération procédurale</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              massa nunc, fringilla in felis sit amet, interdum auctor lorem.
              Sed mollis, ipsum et aliquam sollicitudin, ex tortor efficitur
              felis, sit amet tempor leo justo sed augue. Nulla dapibus, ex
              vitae varius lobortis, dolor mauris sollicitudin sapien, ac
              facilisis erat magna at sapien. Maecenas sed massa massa. Quisque
              non turpis eu mi molestie venenatis ac sit amet diam. Sed egestas
              purus sit amet lacus finibus, at laoreet libero cursus. Cras
              sagittis felis purus, sed pretium metus porttitor at. Donec vel
              ligula commodo, tempus est ut, vestibulum mi. <br />
              <br />
              Vivamus consectetur, turpis sed ullamcorper vehicula, ante libero
              aliquet lacus, a ultricies leo lectus a urna. Nullam mauris felis,
              lacinia nec enim eget, ullamcorper ultrices orci. Morbi venenatis
              tellus ac sodales accumsan.
            </p>
          </div>
          <div className="section-image">
            <img src={thirdImage} ref={thirdImg} />
          </div>
        </div>
        <div className="section" style={{ paddingBottom: 0 }}>
          <div className="section-placeholder"></div>
          <div className="section-full-image" ref={fourthRef}>
            <img src={mocks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Universalis;
