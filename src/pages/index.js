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

<div className="cover">
        <h2 className="cover__title">RÚBEN RODRIGUES</h2>
        <h3 className="cover__subtitle">Full time creative - UI/UX Designer</h3>
      </div>


      <div className="content">
        <div className="grid">
          <div className="grid__item" style={{ '--r': 1, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4255920/file/original-d6edd8b0407b95ddc0a4743e5a9034cf.jpg?compress=1&resize=1504x1128)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 6, '--c': 2 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4246409/file/original-ef3aa7f0b6b1ef1a8c546b1ea8fa0581.png?compress=1&resize=2048x2048)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 8, '--c': 7 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/1731652/screenshots/20265690/media/bfa5dd01494ebfc35d83d4d78afb1379.jpeg?compress=1&resize=800x600&vertical=top)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 9, '--c': 1 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4215046/file/original-b3ec5cdbaa8f96e3d93358f327797433.png?compress=1&resize=1504x1128)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 9, '--c': 5 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4169021/file/original-97a27d5648170df7efe29825c18dd527.png?compress=1&resize=1504x1128)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 8, '--c': 3 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4174086/file/original-0f49c76f9d9b0b81efc69215b2687d21.jpg?compress=1&resize=2048x1536)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 5, '--c': 9 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4169021/file/original-97a27d5648170df7efe29825c18dd527.png?compress=1&resize=1504x1128)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 2, '--c': 6 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4169021/file/original-97a27d5648170df7efe29825c18dd527.png?compress=1&resize=1504x1128)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 3, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(https://cdn.dribbble.com/userupload/4169021/file/original-97a27d5648170df7efe29825c18dd527.png?compress=1&resize=1504x1128)' }}></div>
          </div>
        </div> {/* end .grid */}
        <main id="main" ref={mainRef} hidden={true}></main>
      </div> {/* end .content */}
    </Layout>
  );
}

export default Home;
