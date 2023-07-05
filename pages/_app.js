import '@/styles/main.css'
import { LazyMotion, m, domAnimation, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AntiqueLegacy } from '@/helpers/fonts';
import SEO from '@/helpers/seo.config';
import { IntroContext } from '@/context/intro'
import { LongIntroContext } from '@/context/longIntro'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introText1, setIntroText1] = useState(false)
  const [introText2, setIntroText2] = useState(false)
  const [introText3, setIntroText3] = useState(false)
  const [introText4, setIntroText4] = useState(false)
  const [introText5, setIntroText5] = useState(false)
  const [introText6, setIntroText6] = useState(false)
  const [introText7, setIntroText7] = useState(false)
  const [introText8, setIntroText8] = useState(false)
  const [introText9, setIntroText9] = useState(false)
  const [introText10, setIntroText10] = useState(false)

  const [introContext, setIntroContext] = useState(false);
  const [longIntroContext, setLongIntroContext] = useState(false);
  
  const introEnd = {
    visible: {
      opacity: '100%',
    },
    hidden: { 
      opacity: 0,
      transition: { delay: 1.2, duration: 0, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden',  }
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIntroText1(true)
    }, 0);

    setTimeout(() => {
      setIntroText2(true)
    }, 100);

    setTimeout(() => {
      setIntroText3(true)
    }, 200);

    setTimeout(() => {
      setIntroText4(true)
    }, 300);

    setTimeout(() => {
      setIntroText5(true)
    }, 400);
    
    setTimeout(() => {
      setIntroText6(true)
    }, 500);
    
    setTimeout(() => {
      setIntroText7(true)
    }, 600);

    setTimeout(() => {
      setIntroText8(true)
    }, 700);

    setTimeout(() => {
      setIntroText9(true)
    }, 800);

    setTimeout(() => {
      setIntroText10(true)
    }, 900);
  },[]);

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <LongIntroContext.Provider value={[introContext, setIntroContext]}>
          <div className={`${AntiqueLegacy.variable} font-sans selection:bg-black selection:text-white`}>
            <LazyMotion features={domAnimation}>
            { !introContext && router.asPath == '/' && (
                <div className="fixed inset-0 z-[100] p-3 px-4 h-screen bg-white leading-[1.2] md:leading-[1.2] lg:leading-[1.2] cursor-wait">
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introFullEnd}
                    transition={{ delay: 1.2, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                    className="w-full h-full p-[10px] cursor-wait absolute inset-0"
                  >
                    <m.div 
                      initial="visible"
                      animate="hidden"
                      variants={introEnd}
                    >
                      {introText1 && (
                        <span className="block">Running build in Nottingham, UK (Mid) - sfo1</span>
                      )}

                      {introText2 && (
                        <span className="block">Cloning github.com/shiftwalk/ijp-2023 (Branch: main, Commit: 06ab843)</span>
                      )}
                      
                      {introText3 && (
                        <span className="block">Cloning completed: 222.005ms</span>
                      )}
                      
                      {introText4 && (
                        <span className="block">Running build</span>
                      )}
                      
                      {introText5 && (
                        <span className="block">info  - Compiled successfully</span>
                      )}
                      
                      {introText6 && (
                        <span className="block">info  - Collecting page data...</span>
                      )}
                      
                      {introText7 && (
                        <span className="block">info  - Generating static pages (2/2)</span>
                      )}
                      
                      {introText8 && (
                        <span className="block">ploying outputs...</span>
                      )}
                      
                      {introText9 && (
                        <span className="block">Uploading build cache [1.48 MB]...</span>
                      )}
                      
                      {introText10 && (
                        <span className="block">Site ready...</span>
                      )}
                    </m.div>
                  </m.div>
                </div>
              )}
            </LazyMotion>

            <AnimatePresence mode="wait" initial={router.asPath == '/' ? true : false}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </div>
        </LongIntroContext.Provider>
      </IntroContext.Provider>
    </>
  )
}