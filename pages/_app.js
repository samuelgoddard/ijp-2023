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

  const [removeIntroText1, setRemoveIntroText1] = useState(true)
  const [removeIntroText2, setRemoveIntroText2] = useState(true)
  const [removeIntroText3, setRemoveIntroText3] = useState(true)
  const [removeIntroText4, setRemoveIntroText4] = useState(true)
  const [removeIntroText5, setRemoveIntroText5] = useState(true)
  const [removeIntroText6, setRemoveIntroText6] = useState(true)
  const [removeIntroText7, setRemoveIntroText7] = useState(true)
  const [removeIntroText8, setRemoveIntroText8] = useState(true)
  const [removeIntroText9, setRemoveIntroText9] = useState(true)
  const [removeIntroText10, setRemoveIntroText10] = useState(true)

  const [introContext, setIntroContext] = useState(false);
  
  const introEnd = {
    visible: {
      opacity: '100%',
    },
    hidden: { 
      opacity: 0,
      transition: { delay: 1.625, duration: 0, ease: [0.83, 0, 0.17, 1] }
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

    setTimeout(() => {
      setRemoveIntroText10(false)
    }, 1300);
    setTimeout(() => {
      setRemoveIntroText9(false)
    }, 1325);
    setTimeout(() => {
      setRemoveIntroText8(false)
    }, 1350);
    setTimeout(() => {
      setRemoveIntroText7(false)
    }, 1375);
    setTimeout(() => {
      setRemoveIntroText6(false)
    }, 1400);
    setTimeout(() => {
      setRemoveIntroText5(false)
    }, 1425);
    setTimeout(() => {
      setRemoveIntroText4(false)
    }, 1450);
    setTimeout(() => {
      setRemoveIntroText3(false)
    }, 1475);
    setTimeout(() => {
      setRemoveIntroText2(false)
    }, 1500);
    setTimeout(() => {
      setRemoveIntroText1(false)
    }, 1525);
  },[]);

  return (
    <>
      <DefaultSeo {...SEO} /> 
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div className={`${AntiqueLegacy.variable} font-sans selection:bg-black selection:text-white`}>
          <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
              <div className="fixed inset-0 z-[100] p-3 px-4 h-screen bg-white leading-[1.2] md:leading-[1.2] lg:leading-[1.2] cursor-wait">
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 1.625, duration: 0, ease: [0.83, 0, 0.17, 1] }}
                  className="w-full h-full p-[10px] cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                  >
                    <div className="w-full mt-auto overflow-hidden relative">
                      {removeIntroText1 && (
                        <>
                          {introText1 && (
                            <span className="block">Running build in Nottingham, UK (Mid) - sfo1</span>
                          )}
                        </>
                      )}

                      {removeIntroText2 && (
                        <>
                        {introText2 && (
                          <span className="block">Cloning github.com/shiftwalk/ijp-2023 (Branch: main, Commit: 06ab843)</span>
                        )}
                        </>
                      )}
                      {removeIntroText3 && (
                        <>
                        {introText3 && (
                          <span className="block">Cloning completed: 222.005ms</span>
                        )}
                        </>
                      )}
                      {removeIntroText4 && (
                        <>
                        {introText4 && (
                          <span className="block">Running build</span>
                        )}
                        </>
                      )}
                      {removeIntroText5 && (
                        <>
                        {introText5 && (
                          <span className="block">info  - Compiled successfully</span>
                        )}
                        </>
                      )}
                      {removeIntroText6 && (
                        <>
                        {introText6 && (
                          <span className="block">info  - Collecting page data...</span>
                        )}
                        </>
                      )}
                      {removeIntroText7 && (
                        <>
                        {introText7 && (
                          <span className="block">info  - Generating static pages (2/2)</span>
                        )}
                        </>
                      )}
                      {removeIntroText8 && (
                        <>
                        {introText8 && (
                          <span className="block">ploying outputs...</span>
                        )}
                        </>
                      )}
                      {removeIntroText9 && (
                        <>
                        {introText9 && (
                          <span className="block">Uploading build cache [1.48 MB]...</span>
                        )}
                        </>
                      )}
                      {removeIntroText10 && (
                        <>
                          {introText10 && (
                            <span className="block">Site ready...</span>
                          )}
                        </>
                      )}
                    </div>
                  </m.div>
                </m.div>
              </div>
            )}
          </LazyMotion>

          <Component {...pageProps} key={router.asPath} />
        </div>
      </IntroContext.Provider>
    </>
  )
}