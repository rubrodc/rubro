import React, { useEffect, useRef, useState } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Core } from './Core';

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const mainRef = useRef(null);

    useEffect(() => {
        const tempHeaderHeight = Math.max(384, window.innerHeight);
        mainRef.current.hidden = false;

        new Core();
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
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-3.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-2.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-1.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-3.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-2.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-1.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-3.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-2.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-1.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-3.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-2.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-1.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-1.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-3.jpg?width=1100&format=auto'
                        ></figure>
                    </div>
                    <div>
                        <figure
                            className='js-plane'
                            data-src='https://assets.codepen.io/58281/lama-2.jpg?width=1100&format=auto'
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
