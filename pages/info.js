import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Link from 'next/link';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { LongIntroContext } from '@/context/longIntro';
import Clock from 'react-live-clock';
import Image from 'next/image';
import PixelateSimple from '@/components/pixelateSimple';

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);
  const [currentListItem, setCurrentListItem] = useState(null);
  const [hovered, setHovered] = useState(false);
  
  function handleHover(e) {
    setHovered(true)
    setCurrentListItem(e)
  }

  function handleHoverLeave(e) {
    setHovered(false)
    setCurrentListItem(null)
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
      setLongIntroContext(true)
    }, 0);
  },[setIntroContext, setLongIntroContext]);

  const container = {
    enter: {
      transition: {
        delayChildren: 0.15,
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
                <div className={`col-start-1 col-span-2`}>
                  <Link href="/" aria-label="Navigate to the home page" className="inline-block group">
                    Isaac Powell
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </Link>
                </div>

                <div className="col-start-3 lg:col-start-3 col-span-3 lg:col-span-3 hidden lg:block">
                  { hovered && (
                    <div className="hidden lg:block lg:w-10/12 xl:w-9/12 2xl:w-8/12">
                      {/* <Image src="/images/ijp-hover-art-dir.jpg" width={499} height={651} /> */}
                      <PixelateSimple image="/images/ijp-hover-art-dir.jpg" w={499} h={651} />
                    </div>
                  )}
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
                    <Link href="/" aria-label="Navigate to the home page" className="group">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px]`}></span>
                        <span className="flex-1">Reel <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
                      </span>
                    </Link>

                    <Link href="/info" aria-label="Navigate to the info page" className="group">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] bg-black`}></span>
                        <span className="flex-1">Info <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
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

              <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <m.span variants={item} className="block col-span-5 lg:col-span-6">
                  <p>Capabilities</p>
                </m.span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full max-w-[800px]">
                    <ul>
                      <m.li variants={item} className={`text-black ${(hovered && currentListItem != 1) && 'lg:text-opacity-30' } ${(hovered && currentListItem == 1) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(1)} onMouseLeave={()=>handleHoverLeave()}>Art Direction</button></m.li>
                      <m.li variants={item} className={`text-black ${(hovered && currentListItem != 2) && 'lg:text-opacity-30' } ${(hovered && currentListItem == 2) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(2)} onMouseLeave={()=>handleHoverLeave()}>Strategy</button></m.li>
                      <m.li variants={item} className={`text-black ${(hovered && currentListItem != 3) && 'lg:text-opacity-30' } ${(hovered && currentListItem == 3) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(3)} onMouseLeave={()=>handleHoverLeave()}>Brand Identity</button></m.li>
                      <m.li variants={item} className={`text-black ${(hovered && currentListItem != 4) && 'lg:text-opacity-30' } ${(hovered && currentListItem == 4) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(4)} onMouseLeave={()=>handleHoverLeave()}>Website Design</button></m.li>
                      <m.li variants={item} className={`text-black ${(hovered && currentListItem != 5) && 'lg:text-opacity-30' } ${(hovered && currentListItem == 5) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(5)} onMouseLeave={()=>handleHoverLeave()}>Interaction</button></m.li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <m.span variants={item} className="block col-span-5 lg:col-span-6">
                  <p>Recognition</p>
                </m.span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full">
                    <ul>
                      <m.li variants={item} className="flex">
                        <span className="block">FWA</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;1&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">Awwwards</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;6&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">Klikkentheke</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;4&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">The Brand Identity</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;4&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">Essential Design</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;3&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">SiteInspire</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;6&nbsp;)</span>
                      </m.li>
                      <m.li variants={item} className="flex">
                        <span className="block">Typewolf</span>
                        <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;2&nbsp;)</span>
                      </m.li>
                    </ul>
                  </div>
                </div>
              </div>

              <m.div variants={item} className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6">
                  <p>Development Partner</p>
                </span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full max-w-[800px]">
                    <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk" className="inline-block group">
                      Sam Goddard
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                  </div>
                </div>
              </m.div>
            </article>
            
            <footer className="p-3 px-4">
              <div className="grid grid-cols-12">
                <m.div variants={item} className={`col-start-1 col-span-3`}>
                  <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    Instagram
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                </m.div>
                  
                <m.div variants={item} className={`col-start-5 lg:col-start-7 col-span-4 text-center lg:text-left`}>
                  <span className="block flex-1 tabular-nums">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
                  </span>
                </m.div>
                
                <m.div variants={item}  className={`col-start-10 lg:col-start-11 col-span-3 lg:col-span-2`}>
                  <div className="ml-auto w-auto text-right">
                    <a href="mailto:hello@ijpowell.co.uk" className="group inline-block">
                      Send An Email
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
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
