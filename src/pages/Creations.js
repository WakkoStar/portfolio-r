import React, { useEffect } from 'react';
import first from '../assets/creations/archivs1.png';
import second from '../assets/creations/cc1.png';
import third from '../assets/creations/cc2.png';
import fourth from '../assets/creations/cc3.png';
import fifth from '../assets/creations/cc4.png';
import sixth from '../assets/creations/cc5.png';
import seventh from '../assets/creations/ecranaccueil.png';
import eighth from '../assets/creations/ecranmenu.jpg';
import ninth from '../assets/creations/jc1.png';
import tenth from '../assets/creations/jc2.png';
import eleventh from '../assets/creations/jc3.png';
import twelveth from '../assets/creations/jc4.png';
import thirdteenth from '../assets/creations/lum.jpg';
import fourteenth from '../assets/creations/ouvaton1.png';
import fiveteenth from '../assets/creations/ouvaton2.png';
import sixteenth from '../assets/creations/mapscene.jpg';
import seventeenth from '../assets/creations/ouvaton3.png';
import eightteenth from '../assets/creations/thb_elite.jpg';

const Creations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="header fadeIn">
        <h1>CRéATIONS</h1>
        <p>Travaux divers</p>
      </div>
      <div className="main fadeIn">
        <div className="section">
          <div className="section-gallery">
            <div className="section-gallery-item wide">
              <img src={first}></img>
            </div>
            <div className="section-gallery-item">
              <img src={second}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={eleventh}></img>
            </div>
            <div className="section-gallery-item">
              <img src={third}></img>
            </div>
            <div className="section-gallery-item">
              <img src={fourth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={eighth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={seventh}></img>
            </div>
            <div className="section-gallery-item">
              <img src={fifth}></img>
            </div>
            <div className="section-gallery-item">
              <img src={sixth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={ninth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={thirdteenth}></img>
            </div>
            <div className="section-gallery-item">
              <img src={twelveth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={tenth}></img>
            </div>
            <div className="section-gallery-item">
              <img src={fourteenth}></img>
            </div>
            <div className="section-gallery-item">
              <img src={fiveteenth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={sixteenth}></img>
            </div>
            <div className="section-gallery-item wide">
              <img src={eightteenth}></img>
            </div>
            <div className="section-gallery-item">
              <img src={seventeenth}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creations;
