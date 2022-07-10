import React, { useEffect, useLayoutEffect, useRef } from 'react';
import forwardIcon from '../assets/pics/forward.png';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Link } from 'react-router-dom';

const Home = () => {
  let cb = useRef(null);
  useLayoutEffect(() => {
    const onScroll = () => {
      document.querySelector('.footer').style.opacity =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
          ? 0
          : 1;
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    /**
     * Base
     */
    // Canvas
    const canvas = document.querySelector('canvas.webgl');
    const objectsDistance = 4;
    // Scene
    const scene = new THREE.Scene();

    /**
     * Objects
     */
    // Material

    // Meshes
    const loader = new GLTFLoader();

    loader.load(
      'scene.glb',
      function (gltf) {
        const obj = gltf.scene;
        obj.traverse((n) => {
          if (n.isMesh) {
            n.receiveShadow = true;
            n.castShadow = true;
            if (n.material.map) n.material.map.anisotropy = 16;
          }
        });
        scene.add(obj);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    /**
     * Lights
     */
    const hemiLight = new THREE.HemisphereLight('#ffeeb1', '#080820', 4);
    scene.add(hemiLight);

    const plantLight = new THREE.PointLight('#d0f5e3', 2, 10);
    plantLight.position.set(0, -6.8, 5.2);
    plantLight.castShadow = false;
    plantLight.shadow.bias = -0.0001;
    plantLight.shadow.mapSize.width = 1024 * 2;
    plantLight.shadow.mapSize.height = 1024 * 2;
    scene.add(plantLight);
    // scene.add(new THREE.PointLightHelper(plantLight));

    const spotLight = new THREE.SpotLight('#ffeeee', 4);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024 * 4;
    spotLight.shadow.mapSize.height = 1024 * 4;
    scene.add(spotLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const onResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    /**
     * Camera
     */
    // Group
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      65,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 6;
    cameraGroup.add(camera);

    /**
     * Scroll
     */
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    /**
     * Cursor
     */
    const cursor = {};
    cursor.x = 0;
    cursor.y = 0;

    const onMouseMove = (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    };

    window.addEventListener('mousemove', onMouseMove);
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setClearAlpha(0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;

    /**
     * Animate
     */
    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      // Render
      renderer.render(scene, camera);

      // Animate camera
      camera.position.y = (-scrollY / sizes.height) * objectsDistance;
      const parallaxX = cursor.x * 0.25;
      const parallaxY = -cursor.y * 0.25;
      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
      cameraGroup.position.y +=
        (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

      spotLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10
      );

      // Call tick again on the next frame
      cb.current = window.requestAnimationFrame(tick);
      console.log('aaaa');
    };

    tick();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(cb.current);
    };
  }, []);

  return (
    <>
      <canvas className="webgl"></canvas>
      <div className="main">
        <div className="footer">
          <p>DEFILEZ</p>
          <img id="forward" src={forwardIcon} alt="scroll down" />
        </div>
        <div className="book">
          <div className="book-main">
            <Link to="/about">
              <div className="transparent-black">
                <h1>HUGO DEL PIA</h1>
                <p>A PROPOS</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="book">
          <div className="book-main">
            <Link to="/universalis">
              <div className="transparent">
                <h1>UNIVERSALIS</h1>
                <p>DECOUVRIR</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="book">
          <div className="book-main">
            <Link to="/plant-e">
              <div className="transparent-black">
                <h1>PLANT-E</h1>
                <p>DECOUVRIR</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="book">
          <div className="book-main">
            <Link to="/creations">
              <div className="transparent">
                <h1>CREATIONS</h1>
                <p>DECOUVRIR</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
