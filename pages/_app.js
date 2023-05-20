import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { AntiqueLegacy } from '@/helpers/fonts';
import SEO from '@/helpers/seo.config';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { IntroContext } from '@/context/intro'
import { useState } from 'react';
import { TextScramble } from '@a7sc11u/scramble';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);
  
  const introEnd = {
    visible: {
      opacity: '100%',
      transition: {
        delay: 2.75,
        duration: 0,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0,
        delay: 2.75,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  }

  const container = {
    hidden: { opacity: 0, transition: { duration: 0 } },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
        staggerChildren: 0.15
      }
    }
  }
  
  const containerItem = {
    hidden: { opacity: 0, transition: { duration: 0 } },
    visible: { opacity: 1, transition: { duration: 0 } }
  }

  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden' }
  }

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div className={`${AntiqueLegacy.variable} font-sans flex flex-col min-h-screen`}>
          <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
              <div className="fixed inset-0 z-[100] p-3 px-4 h-screen bg-white text-sm md:text-sm lg:text-sm leading-[1.15] md:leading-[1.15] lg:leading-[1.15] cursor-wait">
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 2750, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                  cl1assName="w-full h-full p-[10px] cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                  >
                    <m.div variants={container} initial="hidden" animate="visible" className="w-full mt-auto overflow-hidden relative">
                      <m.span variants={containerItem} className="block">
                      <TextScramble
                        as="div"
                        play={true}
                        speed={0.75}
                        scramble={1}
                        step={1}
                        stepInterval={1}
                        seed={3}
                        seedInterval={1}
                        text={'INIT X.ROUTE—AAC33ND'}
                      />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'SEARCHING FOR PAGE ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'FOUND ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'RETURN ... MSG-STATE-INIT'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'IJP-23 RETURN ...'}
                        />
                      </m.span>
                      <m.span variants={containerItem} className="block">
                        <TextScramble
                          as="div"
                          play={true}
                          speed={0.75}
                          scramble={1}
                          step={1}
                          stepInterval={1}
                          seed={3}
                          seedInterval={1}
                          text={'IJPOWELL.CO.UK'}
                        />
                      </m.span>
                    </m.div>
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