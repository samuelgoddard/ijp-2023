import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="p-3 px-4">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-3">
          <Link href="/" aria-label="Navigate to the home page">
            Isaac Powell
          </Link>
        </div>
        
          {router.asPath == '/' && (
            <div className="col-start-4 col-span-6">
              <span className="block mx-auto text-center flex-1">
                <span>Freelance Designer<span className="hidden lg:inline"> <span className="font-arial">&mdash;</span> Art Direction, Brand, Interactive</span></span>
              </span>
            </div>
          )}
          
          {router.asPath !== '/' && (
            <div className="col-start-5 lg:col-start-7 col-span-4 lg:col-span-4 text-center lg:text-left">
              <span className="block">
                <span>Freelance Designer</span>
              </span>
            </div>
          )}
        
        <div className="col-start-11 col-span-2">
          <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
            <Link href="/" aria-label="Navigate to the home page">
              <span className="flex items-center">
                <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] ${router.asPath == '/' && 'bg-black'}`}></span>
                Reel
              </span>
            </Link>

            <Link href="/info" aria-label="Navigate to the info page">
              <span className="flex items-center">
                <span className={`w-[12px] md:w-[13px] lg:w-[15px] h-[12px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] ${router.asPath == '/info' && 'bg-black'}`}></span>
                Info
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}