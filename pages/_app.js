import '@/styles/main.css'
import { LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AntiqueLegacy } from '@/helpers/fonts';
import SEO from '@/helpers/seo.config';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { IntroContext } from '@/context/intro'
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
  
  const introEnd = {
    visible: {
      opacity: '100%',
    },
    hidden: { 
      opacity: 0,
      transition: { delay: 2, duration: 0, ease: [0.83, 0, 0.17, 1] }
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
    }, 200);

    setTimeout(() => {
      setIntroText3(true)
    }, 400);

    setTimeout(() => {
      setIntroText4(true)
    }, 600);

    setTimeout(() => {
      setIntroText5(true)
    }, 800);
    
    setTimeout(() => {
      setIntroText6(true)
    }, 1000);
    
    setTimeout(() => {
      setIntroText7(true)
    }, 1200);

    setTimeout(() => {
      setIntroText8(true)
    }, 1400);

    setTimeout(() => {
      setIntroText9(true)
    }, 1600);

    setTimeout(() => {
      setIntroText10(true)
    }, 1800);
  },[]);

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div className={`${AntiqueLegacy.variable} font-sans flex flex-col min-h-screen selection:bg-black selection:text-white`}>
          <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
              <div className="fixed inset-0 z-[100] p-3 px-4 h-screen bg-white leading-[1.2] md:leading-[1.2] lg:leading-[1.2] cursor-wait">
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 2000, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                  className="w-full h-full p-[10px] cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                  >
                    <div className="w-full mt-auto overflow-hidden relative">
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
                        <>
                          <span className="inline">Site ready</span>
                          <span className="inline cursor">...</span>
                        </>
                      )}
                    </div>
                  </m.div>
                </m.div>
              </div>
            )}
          </LazyMotion>
          
          <div className="w-full mb-auto self-start">
            <Header />
          </div>

          <div className={`w-full ${router.asPath == '/info' ? 'mt-auto' : 'my-auto'}`}>
            <Component {...pageProps} key={router.asPath} />
          </div>
          
          <div className={`w-full self-end ${router.asPath == '/info' ? '' : 'mt-auto'}`}>
            <Footer />
          </div>
        </div>
      </IntroContext.Provider>
    </>
  )
}