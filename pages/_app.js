import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AntiqueLegacy } from '@/helpers/fonts';
import SEO from '@/helpers/seo.config';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { IntroContext } from '@/context/intro'
import { useEffect, useState } from 'react';
import { TextScramble } from '@a7sc11u/scramble';

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
  const [introContext, setIntroContext] = useState(false);
  
  const introEnd = {
    visible: {
      opacity: '100%',
    },
    hidden: { 
      opacity: 0,
      transition: { delay: 5, duration: 0, ease: [0.83, 0, 0.17, 1] }
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
    }, 250);

    setTimeout(() => {
      setIntroText3(true)
    }, 500);

    setTimeout(() => {
      setIntroText4(true)
    }, 750);

    setTimeout(() => {
      setIntroText5(true)
    }, 1000);
    
    setTimeout(() => {
      setIntroText6(true)
    }, 1250);
    
    setTimeout(() => {
      setIntroText7(true)
    }, 1500);

    setTimeout(() => {
      setIntroText8(true)
    }, 1750);

    setTimeout(() => {
      setIntroText9(true)
    }, 2000);
  },[]);

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div className={`${AntiqueLegacy.variable} font-sans flex flex-col min-h-screen selection:bg-black selection:text-white`}>
          <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
              <div className="fixed inset-0 z-[100] p-3 px-4 h-screen bg-white text-base md:text-base lg:text-base leading-[1.2] md:leading-[1.2] lg:leading-[1.2] cursor-wait">
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 5000, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                  className="w-full h-full p-[10px] cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                  >
                    <div className="w-full mt-auto overflow-hidden relative">
                      {introText1 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'INIT X.ROUTE—AAC33ND'}
                        />
                      )}

                      {introText2 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      )}
                      {introText3 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      )}
                      {introText4 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      )}
                      {introText5 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'STILL SEARCHING ...'}
                        />
                      )}
                      {introText6 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'FOUND ...'}
                        />
                      )}
                      {introText7 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'RETURN ... MSG-STATE-INIT'}
                        />
                      )}
                      {introText8 && (
                        <TextScramble
                          as="div"
                          play={true}
                          speed={1.25}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'IJP-23 RETURN ...'}
                        />
                      )}
                      {introText9 && (
                        <>
                          <TextScramble
                            as="span"
                            play={true}
                            speed={1.25}
                            scramble={1}
                            step={1}
                            stepInterval={1}
                            seed={3}
                            seedInterval={1}
                            text={'IJPOWELL.CO.UK'}
                          />
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
            <AnimatePresence mode="wait" initial={true}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </div>
          
          <div className={`w-full self-end ${router.asPath == '/info' ? '' : 'mt-auto'}`}>
            <Footer />
          </div>
        </div>
      </IntroContext.Provider>
    </>
  )
}