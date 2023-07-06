import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="p-3 px-3 lg:px-4 absolute top-0 left-0 right-0 w-full z-[10]">
      <div className="grid grid-cols-12">
        <div className={`col-start-1 col-span-4 lg:col-span-3`}>
          <Link href="/" aria-label="Navigate to the home page" className="inline-block a11y-focus">
            Isaac Powell
          </Link>
        </div>

        { router.asPath == '/' && (
          <div className={`col-start-4 col-span-6 hidden lg:block`}>
            <span className={`block mx-auto text-center flex-1`}>
              <span className="hidden lg:block">Freelance Designer — Art Direction, Brand, Interactive</span>
            </span>
          </div>
        )}

        <div className={`col-start-11 col-span-2`}>
          <nav className="ml-auto flex space-x-[8px] md:space-x-[12px] w-auto justify-end">
            <Link href="/" aria-label="Navigate to the home page" className="group a11y-focus">
              <span className="flex lg:flex-wrap items-center">
                <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0 ${router.asPath == '/' && 'bg-black'}`}></span>
                <span className="flex-1">Reel <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
              </span>
            </Link>

            <Link href="/info" aria-label="Navigate to the info page" className="group a11y-focus">
              <span className="flex items-center">
                <span className={`w-[13px] md:w-[13px] lg:w-[15px] h-[13px] md:h-[13px] lg:h-[15px] rounded-full border border-black mr-[5px] translate-y-[-10%] md:translate-y-0 ${router.asPath == '/info' && 'bg-black'}`}></span>
                <span className="flex-1">Info <span className="block h-[1px] bg-black w-0 group-hover:w-full transition-all ease-in-out duration-[400ms]"></span></span>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}