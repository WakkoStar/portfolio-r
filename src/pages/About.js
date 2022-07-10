import React, { useLayoutEffect, useRef } from 'react';
import firstImage from '../assets/about/profilepic.png';
import infographie from '../assets/about/infographie.png';
import database from '../assets/about/database.png';
import iot from '../assets/about/iot.png';
import js from '../assets/about/js.png';
import jv from '../assets/about/jv.png';
import mobile from '../assets/about/mobile.png';

const About = () => {
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
        <h1>HUGO DEL PIA</h1>
        <p>APPLICATION MOBILE IONIC / ESP-32</p>
      </div>
      <div className="main fadeIn light">
        <div className="section">
          <div className="section-placeholder"></div>
          <div className="section-texts" ref={firstRef}>
            <h1 className="section-texts-number">01.</h1>
            <h1 className="section-texts-title">
              A PROPOS
              <br /> DE MOI
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
              profil et
              <br />
              compétences
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
          <div className="section-competencies">
            <div className="section-competencies-wrapper" ref={secondImg}>
              <div className="section-competencies-item">
                <img src={infographie} />
                <h2>Infographie</h2>
                <p>
                  Photoshop, Indesign, Figma <br />
                </p>
              </div>
              <div className="section-competencies-item">
                <img src={mobile} />
                <h2>Mobile</h2>
                <p>
                  React Native, Ionic <br /> <br />
                </p>
              </div>
              <div className="section-competencies-item">
                <img src={js} />
                <h2>JS Fullstack</h2>
                <p>React, Angular, Redux, RxJS, Nest, Express</p>
              </div>
              <div className="section-competencies-item">
                <img src={database} />
                <h2>Base de données</h2>
                <p>
                  Postgres, SQL, MongoDB <br /> <br />
                </p>
              </div>
              <div className="section-competencies-item">
                <img src={jv} />
                <h2>Jeux vidéos</h2>
                <p>
                  Unity, Vuforia, C#, Blender
                  <br />
                </p>
              </div>
              <div className="section-competencies-item">
                <img src={iot} />
                <h2>IOT</h2>
                <p>
                  Arduino, ESP 32/86 <br /> <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section-placeholder"></div>
          <div
            className="section-texts"
            style={{
              marginTop: '13vw',
              paddingBottom: '2vw',
              width: '100%',
              maxWidth: '100%',
              marginRight: '0%',
            }}
          >
            <h1 className="section-texts-number">03.</h1>
            <h1 className="section-texts-title">Contact</h1>
            <h2>delpiahugo@gmail.com</h2>
            <h2>Linkedin</h2>
          </div>
          <div style={{ width: '50%' }}></div>
        </div>
      </div>
    </>
  );
};

export default About;
