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
import SanityPageService from '@/services/sanityPageService'
import { infoQuery } from '@/helpers/queries'

const pageService = new SanityPageService(infoQuery)

export default function Info(initialData) {
  const { data: { info }  } = pageService.getPreviewHook(initialData)()
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
        delayChildren: 0.125,
        staggerChildren: 0.125,
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
      <NextSeo title={info.title} />
      
      <LazyMotion features={domAnimation}>
        <m.div variants={container} initial="initial" animate="enter" exit="exit">
          <div className="flex flex-col min-h-screen">
            <div className="p-3 px-3 lg:px-4 w-full">
              <div className="grid grid-cols-12">
                <div className={`col-start-1 col-span-4 lg:col-span-2`}>
                  <Link href="/" aria-label="Navigate to the home page" className="inline-block">
                    Isaac Powell
                  </Link>
                </div>

                <div className="col-start-3 lg:col-start-3 col-span-3 lg:col-span-3 hidden lg:block relative">
                  { hovered && (
                    <div className="hidden lg:block lg:w-9/12 xl:w-8/12 2xl:w-7/12 absolute top-0 left-0 max-w-[260px]">
                      {/* <Image src="/images/ijp-hover-art-dir.jpg" width={499} height={651} /> */}
                      <PixelateSimple image="/images/ijp-hover-art-dir.jpg" w={499} h={651} />
                    </div>
                  )}
                </div>

                <div className={`col-start-11 col-span-2`}>
                  <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
                    <Link href="/" aria-label="Navigate to the home page" className="group">
                      <span className="flex items-center">
                        <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0`}></span>
                        <span className="flex-1">Reel <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
                      </span>
                    </Link>

                    <Link href="/info" aria-label="Navigate to the info page" className="group">
                      <span className="flex items-center">
                        <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0 bg-black`}></span>
                        <span className="flex-1">Info <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          
            <article className="w-full mt-auto pt-40 lg:pt-16 mb-16 lg:mb-0">
              <m.div variants={item} className={`w-full grid grid-cols-5 lg:grid-cols-12 p-3 px-3 lg:px-4 mb-8 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6 mb-6 lg:mb-0">
                  <p>Bio</p>
                </span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-11/12 lg:w-full max-w-[720px]">
                    <p>{info.biography}</p>
                  </div>
                </div>
              </m.div>

              <div className={`w-full grid grid-cols-5 lg:grid-cols-12 p-3 px-3 lg:px-4 mb-8 md:mb-6`}>
                <m.span variants={item} className="block col-span-5 lg:col-span-6 mb-6 lg:mb-0">
                  <p>Capabilities</p>
                </m.span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full max-w-[800px]">
                    <ul>
                      {info.capabilities.map((e, i) => {
                        return (
                          <m.li key={i} variants={item} className={`text-black ${(hovered && currentListItem != i) && 'lg:text-opacity-30' } ${(hovered && currentListItem == i) && 'lg:text-opacity-100'}`}><button className="cursor-text" onMouseEnter={()=> handleHover(i)} onMouseLeave={()=>handleHoverLeave()}>{e}</button></m.li>    
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`w-full grid grid-cols-5 lg:grid-cols-12 p-3 px-3 lg:px-4 mb-8 md:mb-6`}>
                <m.span variants={item} className="block col-span-5 lg:col-span-6 mb-6 lg:mb-0">
                  <p>Recognition</p>
                </m.span>
                <div className="col-span-5 lg:col-span-6">
                  <div className="w-full">
                    <ul>
                      {info.awards.map((e, i) => {
                        return (
                          <m.li variants={item} className="flex">
                            <span className="block">{e.awardWebsite}</span>
                            <span className="block ml-auto tabular-nums tracking-tighter">(&nbsp;{e.awardTimesWon}&nbsp;)</span>
                          </m.li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <m.div variants={item} className={`w-full grid grid-cols-5 lg:grid-cols-12 p-3 px-3 lg:px-4 mb-8 md:mb-6`}>
                <span className="block col-span-5 lg:col-span-6 mb-6 lg:mb-0">
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
            
            <footer className="p-3 px-3 lg:px-4">
              <div className="grid grid-cols-12">
                <m.div variants={item} className={`lg:col-start-1 col-span-12 lg:col-span-3 flex space-x-1 mb-2 lg:mb-0 lg:hidden`}>
                  <span className="block w-7/12">{info.home.headerText}</span>
                </m.div>

                <m.div variants={item} className={`lg:col-start-1 col-span-12 lg:col-span-3 flex space-x-1 mb-2 lg:mb-0`}>
                  <a href={info.contact.instagram} target="_blank" rel="noopener noreferrer" className="group inline-block">
                    Instagram,
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                  <a href={info.contact.threads} target="_blank" rel="noopener noreferrer" className="group inline-block">
                    Threads<span className="inline lg:hidden">,</span>
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                  <a href={`mailto:${info.contact.emailAddress}`} className="group inline-block lg:hidden">
                    Send An Email
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                </m.div>
                
                <m.div variants={item} custom={6} className={`lg:col-start-7 col-span-12 lg:col-span-4 hidden lg:block`}>
                  <span className="block  flex-1">
                    <span className="block flex-1">
                      <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
                    </span>
                  </span>
                </m.div>
                
                <m.div variants={item} custom={7} className={`lg:col-start-11 col-span-12 lg:col-span-2 hidden lg:block`}>
                  <div className="lg:ml-auto w-auto lg:text-right">
                    <a href={`mailto:${info.contact.emailAddress}`} className="group inline-block">
                      <span className="hidden lg:inline">Send An </span>Email
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                  </div>
                </m.div>

                <m.div variants={item} custom={6} className={`lg:col-start-4 col-span-12 lg:col-span-6 block lg:hidden`}>
                  <span className="block lg:mx-auto lg:text-center flex-1">
                    <span className="block lg:mx-auto lg:text-center flex-1">
                      <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
                    </span>
                  </span>
                </m.div>
              </div>
            </footer>
          </div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}