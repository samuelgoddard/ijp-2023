import { IntroContext } from '@/context/intro';
import { TextScramble } from '@a7sc11u/scramble';
import { useRouter } from 'next/router'
import { useContext } from 'react';

export default function Footer() {
  const router = useRouter()
  const [introContext, setIntroContext] = useContext(IntroContext);

  return (
    <footer className="p-3 px-4">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-3">
          <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
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
                text={'Instagram'}
              />
            )}
          </a>
        </div>
        
          {router.asPath == '/' && (
            <div className="col-start-4 col-span-6">
              <span className="block mx-auto text-center flex-1">
                <span className="block mx-auto text-center flex-1">
                  <TextScramble
                    as="span"
                    play={true}
                    speed={0.15}
                    scramble={4}
                    step={25}
                    stepInterval={1}
                    seed={3}
                    seedInterval={1}
                    text={'12:43:32 GMT'}
                  />
                </span>
              </span>
            </div>
          )}
          
          {router.asPath !== '/' && (
            <div className="col-start-5 lg:col-start-7 col-span-4 text-center lg:text-left">
              <span className="block flex-1">
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
                    text={'12:43:32 GMT'}
                  />
                )}
              </span>
            </div>
          )}
        
        <div className="col-start-10 lg:col-start-11 col-span-3 lg:col-span-2">
          <div className="ml-auto w-auto text-right">
            <a href="mailto:hello@ijpowell.co.uk">
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
                  text={'Send An Email'}
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}