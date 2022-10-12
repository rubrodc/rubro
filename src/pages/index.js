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
      <header className="heroBanner" style={{ minHeight: headerHeight }}>
      </header>
      <div className="cover">
        <h2 className="cover__title">RÚBEN RODRIGUES</h2>
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
