import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

 import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);


  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <div class="wrapper">
        <div class="scene">
          <div class="carousel">
            <div class="carousel__cell">R</div>
            <div class="carousel__cell">U</div>
            <div class="carousel__cell">B</div>
            <div class="carousel__cell">E</div>
            <div class="carousel__cell">N</div>
            <div class="carousel__cell">·</div>
            <div class="carousel__cell">R</div>
            <div class="carousel__cell">O</div>
            <div class="carousel__cell">D</div>
            <div class="carousel__cell">R</div>
            <div class="carousel__cell">I</div>
            <div class="carousel__cell">G</div>
            <div class="carousel__cell">U</div>
            <div class="carousel__cell">E</div>
            <div class="carousel__cell">S</div>
            <div class="carousel__cell">·</div>
          </div>
        </div>
      </div>
        <div class="container2">
          <ul class="logogrid">
            <li class="logogrid__item">
              <img src="https://void.pt/img/logo.svg" class="logogrid__img" alt="Void Software"></img>
            </li>
            <li class="logogrid__item">
              <img src="https://ricardodaniel.net/wp-content/uploads/2020/04/estudioricardodaniel-logo.svg" class="logogrid__img" alt="Estúdio Ricardo Daniel"></img>
            </li>
            <li class="logogrid__item">
              <img src="https://www.freelogovectors.net/wp-content/uploads/2021/12/canva-logo-circle-freelogovectors.net_-400x400.png" class="logogrid__img" alt="AirBnB"></img>
            </li>
            <li class="logogrid__item">
              <img src="https://www.grupovm.pt/wp-content/themes/grupovm/images/logo-grupovm-black.svg" class="logogrid__img" alt="Spotify"></img>
            </li>
          </ul>
        </div>
        <main id="main" ref={mainRef} hidden={true}></main>
    </Layout>
  );
}

document.addEventListener("mousemove", function(e){
  var xPos = e.pageX - (window.innerWidth / 2);
  var yPos = e.pageY - (window.innerHeight / 2);

  var xPosPercent = ((e.pageX / window.innerWidth) * 100);
  var yPosPercent = ((e.pageY / window.innerHeight) * 100);

console.log(xPosPercent, yPosPercent)

});



export default Home;
