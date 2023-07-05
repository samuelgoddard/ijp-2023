import { IntroContext } from '@/context/intro';
import { TextScramble } from '@a7sc11u/scramble'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react';

export default function Header() {
  const router = useRouter()
  const [introContext, setIntroContext] = useContext(IntroContext);

  return (
    <header className="p-3 px-4">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-3">
          <Link href="/" aria-label="Navigate to the home page">
            { introContext && (
              <TextScramble
                as="span"
                play={true}
                speed={0.15}
                scramble={4}
                step={25}
                stepInterval={1}
                seed={3}
                seedInterval={1}
                text={'Isaac Powell'}
              />
            )}
          </Link>
        </div>
        
          {router.asPath == '/' && (
            <div className="col-start-4 col-span-6">
              <span className="block mx-auto text-center flex-1">

                <span>
                  { introContext && (
                    <TextScramble
                      as="span"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Freelance Designer'}
                    />
                  )}
                <span className="hidden lg:inline">&nbsp;
                  <span className="font-arial">
                    { introContext && (
                      <TextScramble
                        as="span"
                        play={true}
                        speed={0.15}
                        scramble={4}
                        step={25}
                        stepInterval={1}
                        seed={3}
                        seedInterval={1}
                        text={'—'}
                      />
                    )}
                  </span>&nbsp;
                  { introContext && (
                <TextScramble
                  as="span"
                  play={true}
                  speed={0.15}
                  scramble={4}
                  step={25}
                  stepInterval={1}
                  seed={3}
                  seedInterval={1}
                  text={'Art Direction, Brand, Interactive'}
                />
                  )}
                </span>
              </span>
              </span>
            </div>
          )}
          
          {router.asPath !== '/' && (
            <div className="col-start-5 lg:col-start-7 col-span-4 lg:col-span-4 text-center lg:text-left">
              <span className="block">
                <span>
                  <TextScramble
                    as="span"
                    play={true}
                    speed={0.15}
                    scramble={4}
                    step={25}
                    stepInterval={1}
                    seed={3}
                    seedInterval={1}
                    text={'Freelance Designer'}
                  />
                  {/* <TypeAnimation
                    sequence={[
                      'Freelance Designer'
                    ]}
                    cursor={false}
                    speed={{type: 'keyStrokeDelayInMs', value: 25}}
                  /> */}
                </span>
              </span>
            </div>
          )}
        
        <div className="col-start-11 col-span-2">
          <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
            <Link href="/" aria-label="Navigate to the home page">
              <span className="flex items-center">
                <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] ${router.asPath == '/' && 'bg-black'}`}></span>
                  { introContext && (
                    <TextScramble
                      as="span"
                      play={true}
                      speed={0.15}
                      scramble={4}
                      step={25}
                      stepInterval={1}
                      seed={3}
                      seedInterval={1}
                      text={'Reel'}
                    />
                  )}
              </span>
            </Link>

            <Link href="/info" aria-label="Navigate to the info page">
              <span className="flex items-center">
                <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] ${router.asPath == '/info' && 'bg-black'}`}></span>
                { introContext && (
                  <TextScramble
                    as="span"
                    play={true}
                    speed={0.15}
                    scramble={4}
                    step={25}
                    stepInterval={1}
                    seed={3}
                    seedInterval={1}
                    text={'Info'}
                  />
                )}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}