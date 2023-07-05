import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Link from 'next/link';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { LongIntroContext } from '@/context/longIntro';

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
      setLongIntroContext(true)
    }, 0);
  },[setIntroContext, setLongIntroContext]);

  const container = {
    enter: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1
      }
    }
  }
  
  const item = {
    initial: { visibility: 'hidden' },
    enter: { 
      visibility: 'visible',
      transition: { duration: 0 }
    },
    exit: {
      visibility: 'hidden',
      transition: { duration: 0 }
    }
  }

  return (
    <Layout>
      <NextSeo title="Info" />
      
      <LazyMotion features={domAnimation}>
        <m.div variants={container} initial="initial" animate="enter" exit="exit">
          <div className="flex flex-col min-h-screen">
            <div className="p-3 px-4 w-full">
              <div className="grid grid-cols-12">
                <div className={`col-start-1 col-span-3`}>
                  <Link href="/" aria-label="Navigate to the home page">
                    Isaac Powell
                  </Link>
                </div>

                <div className="col-start-5 lg:col-start-7 col-span-4 lg:col-span-4 text-center lg:text-left">
                  <span>
                    <span>
                      Freelance Designer
                      {/* <TypeAnimation
                        sequence={[
                          'Freelance Designer'
                        ]}
                        cursor={false}
                        speed={{type: 'keyStrokeDelayInMs', value: 35}}
                      /> */}
                    </span>
                  </span>
                </div>

                <div className={`col-start-11 col-span-2`}>
                  <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
                    <Link href="/" aria-label="Navigate to the home page">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px]`}></span>
                        Reel
                      </span>
                    </Link>

                    <Link href="/info" aria-label="Navigate to the info page">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] bg-black`}></span>
                        Info
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          
            <article className="w-full mt-auto pt-16">
              <m.div variants={item} className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6">
                  <p>Bio</p>
                </span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full max-w-[720px]">
                    <p>The studio of independent designer Isaac Powell. I&apos;ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that&apos;s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.</p>
                  </div>
                </div>
              </m.div>

              <m.div variants={item} className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
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
              </m.div>

              <m.div variants={item} className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6">
                  <p>Recognition</p>
                </span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full">
                    <ul>
                      <li className="flex">
                        <span className="block">FWA</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;1&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">Awwwards</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;6&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">Klikkentheke</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;4&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">The Brand Identity</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;4&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">Essential Design</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;3&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">SiteInspire</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;6&nbsp;)</span>
                      </li>
                      <li className="flex">
                        <span className="block">Typewolf</span>
                        <span className="block ml-auto tabular-nums">(&nbsp;2&nbsp;)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </m.div>

              <m.div variants={item} className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6">
                  <p>Development Partner</p>
                </span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full max-w-[800px]">
                    <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk">Sam Goddard</a>
                  </div>
                </div>
              </m.div>
            </article>
            
            <footer className="p-3 px-4">
              <div className="grid grid-cols-12">
                <m.div variants={item} className={`col-start-1 col-span-3`}>
                  <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </m.div>
                  
                <m.div variants={item} className={`col-start-5 lg:col-start-7 col-span-4 text-center lg:text-left`}>
                  <span className="block flex-1">
                    12:43:32 GMT
                  </span>
                </m.div>
                
                <m.div variants={item}  className={`col-start-10 lg:col-start-11 col-span-3 lg:col-span-2`}>
                  <div className="ml-auto w-auto text-right">
                    <a href="mailto:hello@ijpowell.co.uk">Send An Email</a>
                  </div>
                </m.div>
              </div>
            </footer>
          </div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
