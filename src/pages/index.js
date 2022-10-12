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
      <div class="container">
        <div class="display">
          <span class="myname">Rúben Rodrigues<sup>(1997)</sup> is a Portuguese<br></br></span>
          Ruben is a Portuguese UI UX Designer currently working at <a href="https://void.pt" target={_blank}>Void Software</a>. He's focusing on building products that matters for everybody to use. Ruben is a Portuguese UI UX Designer currently working at <a href="google.com">Void Software</a>. He's focusing on building products that matters for everybody to use.  
        </div>
      </div>
    </Layout>
  );
}


export default Home;
