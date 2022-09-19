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
            <img className="headerphoto1" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto2" src={useBaseUrl("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")}/>
            <img className="headerphoto3" src={useBaseUrl("https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}/>
            <img className="headerphoto4" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto5" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/2RuM54HIeuFO3WGmDJYesF/9d977211b63375cd3ad18410833ed7fd/PD02285_-_floating_fsr_laptop.png?fm=jpg&q=85")}/>
            <img className="headerphoto6" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
          </div>
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")}/>
            <img className="headerphoto2" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto3" src={useBaseUrl("https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}/>
            <img className="headerphoto4" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto5" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/2RuM54HIeuFO3WGmDJYesF/9d977211b63375cd3ad18410833ed7fd/PD02285_-_floating_fsr_laptop.png?fm=jpg&q=85")}/>
            <img className="headerphoto6" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
          </div>
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("")}/>
            <img className="headerphoto2" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto3" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/1QXEwttBcJmqTueBfSB2Ri/226b3f966f1452c0a9a6e206fc4aa9c0/PD02285_-_floating_landscaper.png?fm=jpg&q=85")}/>

            <img className="headerphoto5" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/2RuM54HIeuFO3WGmDJYesF/9d977211b63375cd3ad18410833ed7fd/PD02285_-_floating_fsr_laptop.png?fm=jpg&q=85")}/>
            <img className="headerphoto6" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
          </div>
          <div className="column">
            <img className="headerphoto1" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto2" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto3" src={useBaseUrl("")}/>
            <img className="headerphoto4" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
            <img className="headerphoto5" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/2RuM54HIeuFO3WGmDJYesF/9d977211b63375cd3ad18410833ed7fd/PD02285_-_floating_fsr_laptop.png?fm=jpg&q=85")}/>
            <img className="headerphoto6" src={useBaseUrl("https://images.ctfassets.net/2d5q1td6cyxq/Ce2C5fxlv2tgXJx7R4tn9/4d602ef12626a064e665b96250094f37/PD02285_-_floating_Furniture_Maker.png?fm=jpg&q=85")}/>
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
