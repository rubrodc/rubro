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
      <nav>
  
</nav>  <div class="main">
  <div class="content">
  </div>
</div>
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

const images = [
  'https://cdn.dribbble.com/users/821797/screenshots/16824647/media/d1f2444bcb478a5953c8146f91e121fe.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/15644694/media/173d9ba919f0522b20de9522eae72b0b.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/15227180/media/316d69f885eece8746b657683fa903e9.png?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/11423433/media/63dbfe038d40bbcd2f9dfaae678fc8f0.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/16815925/media/ed75d234cb28d50c0be4ef28a5a1aa01.jpg?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/15114365/media/920883729d8b6787e1626c692b3af66e.png?compress=1&resize=1600x1200&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/2224440/media/8b876ba1f59f21e0917d34d929a602c4.png?compress=1&resize=800x600&vertical=top',
  'https://cdn.dribbble.com/users/821797/screenshots/16798837/media/04c2fbffb6e60592a11809485d64f394.jpg?compress=1&resize=1600x1200&vertical=top'];
  
  
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  
  window.addEventListener('load', () => {
    const content = document.querySelector('.content');
    let main = null;
  
    images.forEach((url, index) => {
      const stickyBound = document.createElement('div');
      stickyBound.className = 'sticky_bound';
  
      const posterContainer = document.createElement('section');
      posterContainer.className = 'poster_container';
      posterContainer.style.zIndex = 100 - index;
      posterContainer.style.marginLeft = `${random(-10, 10)}vh`;
      posterContainer.style.transform = `rotate(${random(-10, 10)}deg)`;
  
      const image = document.createElement('img');
      image.src = url;
  
      if (!main) {
        posterContainer.appendChild(image);
        stickyBound.appendChild(posterContainer);
  
        main = stickyBound;
      } else {
        posterContainer.appendChild(image);
        stickyBound.appendChild(main);
        stickyBound.appendChild(posterContainer);
  
        main = stickyBound;
  
        console.log(main);
      }
    });
  
    content.appendChild(main);
  });

export default Home;
