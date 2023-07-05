import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from 'context/intro'
import { useContext, useEffect, useState } from 'react'
import Pixelate from '@/components/pixelate'
import Link from 'next/link'

export default function Home() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [introText1, setIntroText1] = useState(false);
  const [introText2, setIntroText2] = useState(false);
  const [introText3, setIntroText3] = useState(false);
  const [introText4, setIntroText4] = useState(false);
  const [introText5, setIntroText5] = useState(false);
  const [introText6, setIntroText6] = useState(false);
  const [introText7, setIntroText7] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 1625);

    setTimeout(() => {
      setIntroText1(true)
    }, !introContext ? 1725 : 100);

    setTimeout(() => {
      setIntroText2(true)
    }, !introContext ? 1825 : 200);
    
    setTimeout(() => {
      setIntroText3(true)
    }, !introContext ? 1925 : 300);
    
    setTimeout(() => {
      setIntroText4(true)
    }, !introContext ? 2025 : 400);
    
    setTimeout(() => {
      setIntroText5(true)
    }, !introContext ? 2125 : 500);

    setTimeout(() => {
      setIntroText6(true)
    }, !introContext ? 2225 : 600);

    setTimeout(() => {
      setIntroText7(true)
    }, !introContext ? 2325 : 700);
  },[setIntroContext, setIntroText1, setIntroText2, setIntroText3, setIntroText4, setIntroText5, setIntroText6, setIntroText7]);

  return (
    <Layout>
      <NextSeo title="Home" />
      <div className="flex flex-col min-h-screen">
        <div className="p-3 px-4 w-full">
          <div className="grid grid-cols-12">
            <div className={`col-start-1 col-span-3 ${introText1 ? 'opacity-1' : 'opacity-0' }`}>
              <Link href="/" aria-label="Navigate to the home page">
                Isaac Powell
              </Link>
            </div>

            <div className="col-start-4 col-span-6">
              <span className={`block mx-auto text-center flex-1 ${introText2 ? 'opacity-1' : 'opacity-0' }`}>
                <span>Freelance Designer<span className="hidden lg:inline"> <span className="font-arial">&mdash;</span> Art Direction, Brand, Interactive</span></span>
              </span>
            </div>

            <div className={`col-start-11 col-span-2 ${introText3 ? 'opacity-1' : 'opacity-0' }`}>
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
            <div className={`w-10/12 md:w-[80dvh] lg:w-[80dvh] max-w-[900px]`}>
              {/* <Reel /> */}
              { introText4 && (
                <Pixelate />
              )}
            </div>
          </div>
        </article>
        
        <div className={`w-full self-end mt-auto`}>
          <footer className="p-3 px-4">
            <div className="grid grid-cols-12">
              <div className={`col-start-1 col-span-3 ${introText5 ? 'opacity-1' : 'opacity-0' }`}>
                <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
              
              <div className={`col-start-4 col-span-6 ${introText6 ? 'opacity-1' : 'opacity-0' }`}>
                <span className="block mx-auto text-center flex-1">
                  <span className="block mx-auto text-center flex-1">
                    12:43:32 GMT
                  </span>
                </span>
              </div>
              
              <div className={`col-start-10 lg:col-start-11 col-span-3 lg:col-span-2 ${introText7 ? 'opacity-1' : 'opacity-0' }`}>
                <div className="ml-auto w-auto text-right">
                  <a href="mailto:hello@ijpowell.co.uk">Send An Email</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  )
}
