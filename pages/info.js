import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion';
import { LongIntroContext } from '@/context/longIntro';
import SanityPageService from '@/services/sanityPageService'
import { infoQuery } from '@/helpers/queries'
import dynamic from 'next/dynamic';
import PixelateSimple from '@/components/pixelateSimple';
import SanityImageResponsive from '@/components/sanity-image-responsive';

const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

const pageService = new SanityPageService(infoQuery)

export default function Info(initialData) {
  const { data: { info }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);
  const [currentListItem, setCurrentListItem] = useState(null);
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion()
  
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
        delayChildren: shouldReduceMotion ? 0 : 0.125,
        staggerChildren: shouldReduceMotion ? 0 : 0.125,
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
          <div className="p-3 px-4 w-full absolute top-0 left-0 right-0">
            <div className="grid grid-cols-12">
              <div className={`col-start-1 col-span-2`}>
              </div>

              <div className="col-start-3 lg:col-start-3 col-span-3 lg:col-span-3 hidden lg:block relative">
                {info.capabilities.map((e, i) => {
                  return (
                    <div className={`hidden lg:block lg:w-10/12 xl:w-9/12 2xl:w-8/12 absolute top-0 left-0 ${(currentListItem == i && hovered) ? 'opacity-100' : 'opacity-0' }`} key={i}>
                      <SanityImageResponsive image={e.image} sizes={`(max-width: 1024px) 90vw,60vw`} />
                    </div>
                )
                })}
              </div>

              <div className={`col-start-11 col-span-2`}>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-screen">
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
                          <m.li key={i} variants={item} className={`text-black ${(hovered && currentListItem != i) && 'lg:text-opacity-30' } ${(hovered && currentListItem == i) && 'lg:text-opacity-100'}`}><button className="cursor-text a11y-focus" onMouseEnter={()=> handleHover(i)} onMouseLeave={()=>handleHoverLeave()}>{e.text}</button></m.li>    
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
                          <m.li variants={item} className="flex" key={i}>
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
                    <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk" className="inline-block group a11y-focus">
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
                  <a href={info.contact.instagram} target="_blank" rel="noopener noreferrer" className="group a11y-focus inline-block">
                    Instagram,
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                  <a href={info.contact.threads} target="_blank" rel="noopener noreferrer" className="group a11y-focus inline-block">
                    Threads<span className="inline lg:hidden">,</span>
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                  <a href={`mailto:${info.contact.emailAddress}`} className="group a11y-focus inline-block lg:hidden">
                    Send An Email
                    <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                  </a>
                </m.div>
                
                <m.div variants={item} custom={6} className={`lg:col-start-7 col-span-12 lg:col-span-4 hidden lg:block`}>
                  <span className="block  flex-1">
                    <span className="block flex-1">
                      <Clock noSsr={true} format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
                    </span>
                  </span>
                </m.div>
                
                <m.div variants={item} custom={7} className={`lg:col-start-11 col-span-12 lg:col-span-2 hidden lg:block`}>
                  <div className="lg:ml-auto w-auto lg:text-right">
                    <a href={`mailto:${info.contact.emailAddress}`} className="group inline-block a11y-focus">
                      <span className="hidden lg:inline">Send An </span>Email
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                  </div>
                </m.div>

                <m.div variants={item} custom={6} className={`lg:col-start-4 col-span-12 lg:col-span-6 block lg:hidden`}>
                  <span className="block lg:mx-auto lg:text-center flex-1">
                    <span className="block lg:mx-auto lg:text-center flex-1">
                      <Clock noSsr={true} format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
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