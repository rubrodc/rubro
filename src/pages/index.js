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
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>


        <div className="row">
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("/img/burble.gif")}/>
            <img className="headerphoto2" src={useBaseUrl("/img/bikeicon.jpg")}/>
            <img className="headerphoto3" src={useBaseUrl("/img/arrows.jpg")}/>
            <img className="headerphoto4" src={useBaseUrl("/img/36dot.jpg")}/>
            <img className="headerphoto5" src={useBaseUrl("/img/qp.jpg")}/>
            <img className="headerphoto6" src={useBaseUrl("/img/25abril.jpg")}/>
          </div>
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("/img/palm-tree.png")}/>
            <img className="headerphoto2" src={useBaseUrl("/img/eb.jpg")}/>
            <img className="headerphoto3" src={useBaseUrl("/img/portal.gif")}/>
            <img className="headerphoto4" src={useBaseUrl("/img/tek.jpg")}/>
            <img className="headerphoto5" src={useBaseUrl("/img/paloma.jpg")}/>
            <img className="headerphoto6" src={useBaseUrl("/img/yingyang.png")}/>
          </div>
          <div className="column">

            <img className="headerphoto1" src={useBaseUrl("/img/looking.gif")}/>
            <img className="headerphoto2" src={useBaseUrl("/img/flower.png")}/>
            <img className="headerphoto3" src={useBaseUrl("/img/ampersand.png")}/>
            <img className="headerphoto4" src={useBaseUrl("/img/mars2020.jpg")}/>
            <img className="headerphoto5" src={useBaseUrl("/img/100.png")}/>
            <img className="headerphoto6" src={useBaseUrl("/img/cs.png")}/>
          </div>
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("/img/wallpaper.png")}/>
            <img className="headerphoto2" src={useBaseUrl("/img/bloomstone.jpg")}/>
            <img className="headerphoto3" src={useBaseUrl("/img/diamondhands.jpg")}/>
            <img className="headerphoto4" src={useBaseUrl("/img/plus.gif")}/>
            <img className="headerphoto5" src={useBaseUrl("/img/greative.jpg")}/>
            <img className="headerphoto6" src={useBaseUrl("/img/spread-love.jpg")}/>
          </div>

        </div>

      </header>
      <div className="cover">
        <h2 className="cover__title">RÚBEN RODRIGUES<sup>&reg;</sup></h2>
        <h3 className="cover__subtitle">UI/UX DESIGNER & FULL TIME CREATIVE</h3>
      </div>
      <div className="footerino">
				<p>…fascinated with how a creative outlook plays a vital role in life – a great meal, a hit song, an inspired building, to a business card that’s a conversation – spirits him to tease out, dream up and inspire the pursuit of great ideas. </p>
			</div>

      <main id="main" ref={mainRef} hidden={true}></main>
    </Layout>
  );
}

export default Home;
