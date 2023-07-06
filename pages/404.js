import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from 'context/intro'
import { useContext, useEffect, useState } from 'react'
import Pixelate from '@/components/pixelate'
import Link from 'next/link'
import { LongIntroContext } from '@/context/longIntro'
import Clock from 'react-live-clock';
import SanityPageService from '@/services/sanityPageService'
import { homeQuery } from '@/helpers/queries'

const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);
  const shouldReduceMotion = useReducedMotion()
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, shouldReduceMotion ? 0 : 1200);
    setTimeout(() => {
      setLongIntroContext(true)
    }, shouldReduceMotion ? 0 : 1200);
  },[setIntroContext, setLongIntroContext]);

  const container = {
    enter: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.125,
        delayChildren: introContext ? 0.125 : 1.1,
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

  const imageItem = {
    initial: { display: 'none' },
    enter: { 
      display: 'block',
      transition: { duration: 0 }
    },
    exit: {
      display: 'none',
      transition: { duration: 0 }
    }
  }

  return (
    <Layout>
      <NextSeo title={home.title} />
      <LazyMotion features={domAnimation}>
        <m.div variants={container} initial="initial" animate="enter" exit="exit">
          <div className="flex flex-col min-h-screen">
            <div className="p-3 px-3 lg:px-4 w-full">
              <div className="grid grid-cols-12">
                <div className={`col-start-1 col-span-4 lg:col-span-3`}>
                  <Link href="/" aria-label="Navigate to the home page" className="inline-block a11y-focus">
                    Isaac Powell
                  </Link>
                </div>

                <div className="col-start-4 col-span-6 hidden lg:block">
                  <m.span variants={item} className={`block mx-auto text-center flex-1`}>
                    <span className="hidden lg:block">{home.headerText}</span>
                    {/* <span className="block lg:hidden">{home.headerTextMobile}</span> */}
                  </m.span>
                </div>

                <div className={`col-start-11 col-span-2`}>
                  <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
                    <Link href="/" aria-label="Navigate to the home page" className="group a11y-focus">
                      <span className="flex lg:flex-wrap items-center">
                        <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0 bg-black`}></span>
                        <span className="flex-1">Reel <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
                      </span>
                    </Link>

                    <Link href="/info" aria-label="Navigate to the info page" className="group a11y-focus">
                      <span className="flex items-center">
                        <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0`}></span>
                        <span className="flex-1">Info <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <article className="w-full mt-auto">
              <div className="flex flex-wrap w-full items-center justify-center">
                <m.div variants={imageItem} custom={4} className={`w-full md:w-[80dvh] lg:w-[80dvh] max-w-[900px] px-3 lg:px-12`}>
                  <h1 className="text-center">404</h1>
                </m.div>
              </div>
            </article>
            
            <div className={`w-full self-end mt-auto`}>
              <footer className="p-3 px-3 lg:px-4">
                <div className="grid grid-cols-12">
                  <m.div variants={item} className={`lg:col-start-1 col-span-12 lg:col-span-3 flex space-x-1 mb-2 lg:hidden`}>
                    <span className="block w-9/12">{home.headerText}</span>
                  </m.div>

                  <m.div variants={item} className={`lg:col-start-1 col-span-12 lg:col-span-3 flex space-x-1 mb-2 lg:mb-0`}>
                    <a href={home.contact.instagram} target="_blank" rel="noopener noreferrer" className="group inline-block a11y-focus">
                      Instagram,
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                    <a href={home.contact.threads} target="_blank" rel="noopener noreferrer" className="group inline-block a11y-focus">
                      Threads<span className="inline lg:hidden">,</span>
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                    <a href={`mailto:${home.contact.emailAddress}`} className="group a11y-focus inline-block lg:hidden">
                      Send An Email
                      <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span>
                    </a>
                  </m.div>
                  
                  <m.div variants={item} custom={6} className={`lg:col-start-4 col-span-12 lg:col-span-6 hidden lg:block`}>
                    <span className="block lg:mx-auto lg:text-center flex-1">
                      <span className="block lg:mx-auto lg:text-center flex-1">
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} />&nbsp;GMT
                      </span>
                    </span>
                  </m.div>
                  
                  <m.div variants={item} custom={7} className={`lg:col-start-11 col-span-12 lg:col-span-2 hidden lg:block`}>
                    <div className="lg:ml-auto w-auto lg:text-right">
                      <a href={`mailto:${home.contact.emailAddress}`} className="group inline-block a11y-focus">
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