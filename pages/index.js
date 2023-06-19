import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from 'context/intro'
import { useContext, useEffect } from 'react'
import Reel from '@/components/reel'

export default function Home() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 2750);
  },[]);

  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            <div className="flex flex-wrap w-full items-center justify-center">
              <div className="w-10/12 md:w-8/12 lg:w-7/12 max-w-[900px]">
                <Reel />
              </div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
