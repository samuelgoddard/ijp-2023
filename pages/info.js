import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'

export default function Info() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [introText1, setIntroText1] = useState(false)
  const [introText2, setIntroText2] = useState(false)
  const [introText3, setIntroText3] = useState(false)
  const [introText4, setIntroText4] = useState(false)
  const [introText5, setIntroText5] = useState(false)
  const [introText6, setIntroText6] = useState(false)
  const [introText7, setIntroText7] = useState(false)
  const [introText8, setIntroText8] = useState(false)
  const [introText9, setIntroText9] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);

    setTimeout(() => {
      setIntroText1(true)
    }, 100);
    
    setTimeout(() => {
      setIntroText2(true)
    }, 200);

    setTimeout(() => {
      setIntroText3(true)
    }, 300);

    setTimeout(() => {
      setIntroText4(true)
    }, 400);

    setTimeout(() => {
      setIntroText5(true)
    }, 500);

    setTimeout(() => {
      setIntroText6(true)
    }, 600);

    setTimeout(() => {
      setIntroText7(true)
    }, 700);

    setTimeout(() => {
      setIntroText8(true)
    }, 800);
    
    setTimeout(() => {
      setIntroText9(true)
    }, 900);
  },[setIntroContext, setIntroText1, setIntroText2, setIntroText3, setIntroText4, setIntroText5, setIntroText6, setIntroText7, setIntroText8, setIntroText9]);

  return (
    <Layout>
      <NextSeo title="Info" />

      <div className="flex flex-col min-h-screen">
        <div className="p-3 px-4 w-full">
          <div className="grid grid-cols-12">
            <div className="col-start-5 lg:col-start-7 col-span-4 lg:col-span-4 text-center lg:text-left">
              <span className={`${introText1 ? 'opacity-1' : 'opacity-0' }`}>
                <span>
                  Freelance Designer
                  {/* <TypeAnimation
                    sequence={[
                      'Freelance Designer'
                    ]}
                    cursor={false}
                    speed={{type: 'keyStrokeDelayInMs', value: 35}}
                  /> */}
                </span>
              </span>
            </div>          
          </div>
        </div>
      
        <article className="w-full mt-auto pt-16">
          <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText2 ? 'opacity-1' : 'opacity-0' }`}>
            <span className="block col-span-5 lg:col-span-6">
              <p>Bio</p>
            </span>
            <div className="col-span-5 lg:col-span-6">
              <div className="w-full max-w-[720px]">
                <p>The studio of independent designer Isaac Powell. I&apos;ve been working with clients, agencies, and individuals across all facets of brand and digital since 2014, helping them to create purposeful and refined work that&apos;s rooted in simplicity. I&apos;ve worked with Ragged Edge, Paul Smith, Ingamana, Pitch, CUSP, and more.</p>
              </div>
            </div>
          </div>

          <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText3 ? 'opacity-1' : 'opacity-0' }`}>
            <span className="block col-span-5 lg:col-span-6">
              <p>Capabilities</p>
            </span>
            <div className="col-span-5 lg:col-span-6">
              <div className="w-full max-w-[800px]">
                <ul>
                  <li>Art Direction</li>
                  <li>Strategy</li>
                  <li>Brand Identity</li>
                  <li>Website Design</li>
                  <li>Interaction</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText4 ? 'opacity-1' : 'opacity-0' }`}>
            <span className="block col-span-5 lg:col-span-6">
              <p>Recognition</p>
            </span>
            <div className="col-span-5 lg:col-span-6">
              <div className="w-full">
                <ul>
                  <li className="flex">
                    <span className="block">FWA</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;1&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">Awwwards</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;6&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">Klikkentheke</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;4&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">The Brand Identity</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;4&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">Essential Design</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;3&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">SiteInspire</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;6&nbsp;)</span>
                  </li>
                  <li className="flex">
                    <span className="block">Typewolf</span>
                    <span className="block ml-auto tabular-nums">(&nbsp;2&nbsp;)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`w-full grid grid-cols-10 lg:grid-cols-12 p-3 px-4 md:mb-6 ${introText5 ? 'opacity-1' : 'opacity-0' }`}>
            <span className="block col-span-5 lg:col-span-6">
              <p>Development Partner</p>
            </span>
            <div className="col-span-5 lg:col-span-6">
              <div className="w-full max-w-[800px]">
                <a target="_blank" rel="noopener noreferrer" href="https://samgoddard.co.uk">Sam Goddard</a>
              </div>
            </div>
          </div>
        </article>
        
        <footer className="p-3 px-4">
          <div className="grid grid-cols-12">
            <div className={`col-start-1 col-span-3 ${introText6 ? 'opacity-1' : 'opacity-0' }`}>
              <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
              
            <div className={`col-start-5 lg:col-start-7 col-span-4 text-center lg:text-left ${introText7 ? 'opacity-1' : 'opacity-0' }`}>
              <span className="block flex-1">
                12:43:32 GMT
              </span>
            </div>
            
            <div className={`col-start-10 lg:col-start-11 col-span-3 lg:col-span-2 ${introText8 ? 'opacity-1' : 'opacity-0' }`}>
              <div className="ml-auto w-auto text-right">
                <a href="mailto:hello@ijpowell.co.uk">Send An Email</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
