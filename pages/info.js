import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [introText1, setIntroText1] = useState(false)
  const [introText2, setIntroText2] = useState(false)
  const [introText3, setIntroText3] = useState(false)
  const [introText4, setIntroText4] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);

    setTimeout(() => {
      setIntroText1(true)
    }, 200);
    
    setTimeout(() => {
      setIntroText2(true)
    }, 400);

    setTimeout(() => {
      setIntroText3(true)
    }, 600);

    setTimeout(() => {
      setIntroText4(true)
    }, 800);
  },[setIntroContext, setIntroText1, setIntroText2, setIntroText3, setIntroText4]);

  return (
    <Layout>
      <NextSeo title="Info" />
    
      <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText1 ? 'opacity-1' : 'opacity-0' }`}>
        <span className="block col-span-5 lg:col-span-6">
          <p>Bio</p>
        </span>
        <div className="col-span-5 lg:col-span-6">
          <div className="w-full max-w-[800px]">
            <p>The studio of independent designer Isaac Powell. I&apos;ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that&apos;s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.</p>
          </div>
        </div>
      </div>

      <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText2 ? 'opacity-1' : 'opacity-0' }`}>
        <span className="block col-span-5 lg:col-span-6">
          <p>Capabilities</p>
        </span>
        <div className="col-span-5 lg:col-span-6">
          <div className="w-full max-w-[800px]">
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

      <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText3 ? 'opacity-1' : 'opacity-0' }`}>
        <span className="block col-span-5 lg:col-span-6">
          <p>Recognition</p>
        </span>
        <div className="col-span-5 lg:col-span-6">
          <div className="w-full max-w-[800px]">
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

      <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText4 ? 'opacity-1' : 'opacity-0' }`}>
        <span className="block col-span-5 lg:col-span-6">
          <p>Development Partner</p>
        </span>
        <div className="col-span-5 lg:col-span-6">
          <div className="w-full max-w-[800px]">
            <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk">Sam Goddard</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
