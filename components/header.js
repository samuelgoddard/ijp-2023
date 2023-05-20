import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="p-3 px-4">
      <div className="flex flex-wrap mr-auto flex-1 items-center">
        <Link href="/" aria-label="Navigate to the home page">
          Isaac Powell
        </Link>

        <span className="block mx-auto text-center flex-1">
          Freelance Designer<span className="hidden md:inline"> <span className="font-arial">&mdash;</span> Art Direction, Brand, Interactive</span>
        </span>

        <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto">
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
    </header>
  )
}