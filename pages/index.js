import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from 'context/intro'
import { useContext, useEffect } from 'react'
import Reel from '@/components/reel'
import Pixelate from '@/components/pixelate'

export default function Home() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  
  const fade = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { duration: 0.33, delay: !introContext ? 3 : 0, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0, ease: [0.83, 0, 0.17, 1] }
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);
  },[setIntroContext]);

  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <article>
            <div className="flex flex-wrap w-full items-center justify-center">
              <div className="w-10/12 md:w-8/12 lg:w-7/12 max-w-[900px]">
                {/* <Reel /> */}
                <Pixelate />
              </div>
            </div>
          </article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
