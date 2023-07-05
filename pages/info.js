import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect } from 'react'
import { IntroContext } from '@/context/intro'
import { TextScramble } from '@a7sc11u/scramble'

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);
  },[setIntroContext]);

  return (
    <Layout>
      <NextSeo title="Info" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div variants={fade}>
            <div className="w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6">
              <span className="block col-span-5 lg:col-span-6">
                <TextScramble
                  as="p"
                  play={true}
                  speed={0.15}
                  scramble={4}
                  step={25}
                  stepInterval={1}
                  seed={3}
                  seedInterval={1}
                  text={'Bio'}
                />
              </span>
              <div className="col-span-5 lg:col-span-6">
                <div className="w-full max-w-[800px] relative">
                  <div className="absolute top-0 left-0">
                    <TextScramble
                      as="p"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={40}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'The studio of independent designer Isaac Powell. I’ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that’s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.'}
                    />
                  </div>

                  <p className="opacity-0">The studio of independent designer Isaac Powell. I’ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that&apos;s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.</p>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6">
              <span className="block col-span-5 lg:col-span-6">
                <TextScramble
                  as="p"
                  play={true}
                  speed={0.15}
                  scramble={4}
                  step={25}
                  stepInterval={1}
                  seed={3}
                  seedInterval={1}
                  text={'Capabilities'}
                />
              </span>
              <div className="col-span-5 lg:col-span-6">
                <div className="w-full max-w-[800px]">
                  <ul>
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Art Direction'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Strategy'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Brand Identity'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Website Design'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Interaction'}
                    />
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6">
              <span className="block col-span-5 lg:col-span-6">
                <TextScramble
                  as="p"
                  play={true}
                  speed={0.15}
                  scramble={4}
                  step={25}
                  stepInterval={1}
                  seed={3}
                  seedInterval={1}
                  text={'Recognition'}
                />
              </span>
              <div className="col-span-5 lg:col-span-6">
                <div className="w-full max-w-[800px]">
                  <ul>
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'FWA'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Awwwards'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Klikkentheke'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'The Brand Identity'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Essential Design'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'SiteInspire'}
                    />
                    <TextScramble
                      as="li"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Typewolf'}
                    />
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6">
              <span className="block col-span-5 lg:col-span-6">
                <TextScramble
                  as="p"
                  play={true}
                  speed={0.15}
                  scramble={4}
                  step={25}
                  stepInterval={1}
                  seed={3}
                  seedInterval={1}
                  text={'Development Partner'}
                />
              </span>
              <div className="col-span-5 lg:col-span-6">
                <div className="w-full max-w-[800px]">
                  <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk">
                    <TextScramble
                      as="span"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Sam Goddard'}
                    />
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
