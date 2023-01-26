import React, { useEffect, useRef, useState } from "react";


import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);

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
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/25abril.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 6, '--c': 5 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/36dot.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 8, '--c': 7 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/100.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 9, '--c': 1 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/ampersand.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 9, '--c': 5 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/arrows.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 8, '--c': 3 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/bikeicon.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 5, '--c': 2 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/bloomstone.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 2, '--c': 6 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/burble.gif)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 3, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/cs.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 2, '--c': 8 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/diamondhands.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 1, '--c': 2 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/eb.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 4, '--c': 5 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/flower.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 5, '--c': 8 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/greative.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 7, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/looking.gif)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 3, '--c': 1 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/mars2020.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 2, '--c': 6 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/palm-tree.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 1, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/paloma.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 6, '--c': 7 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/plus.gif)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 4, '--c': 2 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/portal.gif)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 10, '--c': 4 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/qp.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 11, '--c': 6 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/spread-love.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 12, '--c': 3 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/tek.jpg)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 10, '--c': 8 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/wallpaper.png)' }}></div>
          </div>
          <div className="grid__item" style={{ '--r': 13, '--c': 5 }}>
            <div className="grid__item-img" style={{ backgroundImage: 'url(img/yingyang.png)' }}></div>
          </div>
        </div> {/* end .grid */}
        <main id="main" ref={mainRef} hidden={true}></main>
      </div> {/* end .content */}
    </Layout>
  );
}

export default Home;
