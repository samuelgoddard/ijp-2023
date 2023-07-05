import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from 'context/intro'
import { useContext, useEffect, useState } from 'react'
import Pixelate from '@/components/pixelate'
import Link from 'next/link'
import { LongIntroContext } from '@/context/longIntro'

export default function Home() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 1200);
    setTimeout(() => {
      setLongIntroContext(true)
    }, 1200);
  },[setIntroContext, setLongIntroContext]);

  const container = {
    enter: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: introContext ? 0 : 1.1,
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
      <NextSeo title="Home" />
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

                <div className="col-start-4 col-span-6">
                  <span className={`block mx-auto text-center flex-1`}>
                    <span>Freelance Designer<span className="hidden lg:inline"> <span className="font-arial">&mdash;</span> Art Direction, Brand, Interactive</span></span>
                  </span>
                </div>

                <div className={`col-start-11 col-span-2`}>
                  <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
                    <Link href="/" aria-label="Navigate to the home page">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] bg-black`}></span>
                        Reel
                      </span>
                    </Link>

                    <Link href="/info" aria-label="Navigate to the info page">
                      <span className="flex items-center">
                        <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px]`}></span>
                        Info
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <article className="w-full mt-auto">
              <div className="flex flex-wrap w-full items-center justify-center">
                <m.div variants={imageItem} custom={4} className={`w-10/12 md:w-[80dvh] lg:w-[80dvh] max-w-[900px]`}>
                  {/* <Reel /> */}
                  <Pixelate />
                </m.div>
              </div>
            </article>
            
            <div className={`w-full self-end mt-auto`}>
              <footer className="p-3 px-4">
                <div className="grid grid-cols-12">
                  <m.div variants={item} custom={5} className={`col-start-1 col-span-3`}>
                    <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </m.div>
                  
                  <m.div variants={item} custom={6} className={`col-start-4 col-span-6`}>
                    <span className="block mx-auto text-center flex-1">
                      <span className="block mx-auto text-center flex-1">
                        12:43:32 GMT
                      </span>
                    </span>
                  </m.div>
                  
                  <m.div variants={item} custom={7} className={`col-start-10 lg:col-start-11 col-span-3 lg:col-span-2`}>
                    <div className="ml-auto w-auto text-right">
                      <a href="mailto:hello@ijpowell.co.uk">Send An Email</a>
                    </div>
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