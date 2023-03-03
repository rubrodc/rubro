import React, { useEffect, useRef, useState } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Core } from './Core';
import Image1 from '../../static/img/25abril.jpg';
import Image2 from '../../static/img/36dot.jpg';
import Image3 from '../../static/img/100.png';
import Image4 from '../../static/img/ampersand.png';
import Image5 from '../../static/img/arrows.jpg';
import Image6 from '../../static/img/bikeicon.jpg';
import Image7 from '../../static/img/bloomstone.jpg';
import Image8 from '../../static/img/burble.gif';
import Image9 from '../../static/img/cs.png';
import Image10 from '../../static/img/diamondhands.jpg';

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const mainRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(1536);
    const [bannerHeight, setBannerHeight] = useState(256);

    useEffect(() => {
        const tempHeaderHeight = Math.max(384, window.innerHeight);
        setHeaderHeight(tempHeaderHeight);
        setBannerHeight(Math.max(256, tempHeaderHeight / 2));
        setIsLoading(false);
        mainRef.current.hidden = false;

        const elementCanvas = document.querySelector('canvas');

        if (!elementCanvas) {
            new Core();
        } else {
            elementCanvas.hidden = false;
            elementCanvas.setAttribute('style', 'display: block');
        }

        return () => {
            const element = document.querySelector('canvas');
            if (element) {
                element.hidden = true;
                element.setAttribute('style', 'display: none');
            }
        };
    }, []);

    return (
        <Layout title='Home' description={siteConfig.tagline}>
            <div className='cover'>
                <h2 className='cover__title'>RÚBEN RODRIGUES</h2>
                <h3 className='cover__subtitle'>
                    Full time creative - UI/UX Designer
                </h3>
            </div>
            <div className='content'>
                <div className='grid-scroll js-grid'>
                    <div>
                        <figure className='js-plane' data-src={Image1}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image2}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image3}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image4}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image5}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image6}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image7}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image8}></figure>
                    </div>
                    <div>
                        <figure className='js-plane' data-src={Image9}></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src={Image10}
                        ></figure>
                    </div>
                </div>

                <div className='page js-page'></div>
                {/* end .grid */}
                <main id='main' ref={mainRef} hidden={true}></main>
            </div>
            <div className='page js-page'></div>
            {/* end .content */}
        </Layout>
    );
}

export default Home;
