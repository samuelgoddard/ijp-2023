import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="p-3 px-4 fixed top-0 left-0 right-0 w-full z-10">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-3">
          <Link href="/" aria-label="Navigate to the home page">
            Isaac Powell
          </Link>
        </div>
        
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