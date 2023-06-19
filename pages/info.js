import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'
import { IntroContext } from '@/context/intro'

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);
  },[]);

  return (
    <Layout>
      <NextSeo title="Info" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div variants={fade}>
            <div className="w-full flex flex-wrap p-3 px-4 md:mb-6">
              <div className="w-full md:w-6/12 lg:w-[55%] mb-3 md:mb-0">
                <p>Bio</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-[45%]">
                <div className="md:w-11/12 lg:w-10/12 max-w-[720px]">
                  <p>The studio of independent designer Isaac Powell. I&apos;ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that&apos;s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full flex flex-wrap p-3 px-4 md:mb-6">
              <div className="w-full md:w-6/12 lg:w-[55%] mb-3 md:mb-0">
                <p>Capabilities</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-[45%]">
                <div className="md:w-11/12 lg:w-10/12">
                  <ul>
                    <li>Art Direction</li>
                    <li>Strategy</li>
                    <li>Brand Identity</li>
                    <li>Website Design</li>
                    <li>Interaction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap p-3 px-4 md:mb-6">
              <div className="w-full md:w-6/12 lg:w-[55%] mb-3 md:mb-0">
                <p>Recognition</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-[45%]">
                <div className="md:w-11/12 lg:w-10/12">
                  <ul>
                    <li>FWA</li>
                    <li>Awwwards</li>
                    <li>Klikkentheke</li>
                    <li>The Brand Identity</li>
                    <li>Essential Design</li>
                    <li>SiteInspire</li>
                    <li>Typewolf</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap p-3 px-4 md:mb-6">
              <div className="w-full md:w-6/12 lg:w-[55%] mb-3 md:mb-0">
                <p>Site Development</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-[45%]">
                <div className="md:w-11/12 lg:w-10/12">
                  <a href="https://samgoddard.co.uk">Sam Goddard</a>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
