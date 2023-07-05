import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="p-3 px-4">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-3">
          <a href="https://www.instagram.com/ijpowell" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        
          {router.asPath == '/' && (
            <div className="col-start-4 col-span-6">
              <span className="block mx-auto text-center flex-1">
                <span className="block mx-auto text-center flex-1">
                  12:43:32 GMT
                </span>
              </span>
            </div>
          )}
          
          {router.asPath !== '/' && (
            <div className="col-start-5 lg:col-start-7 col-span-4 text-center lg:text-left">
              <span className="block flex-1">
                12:43:32 GMT
              </span>
            </div>
          )}
        
        <div className="col-start-10 lg:col-start-11 col-span-3 lg:col-span-2">
          <div className="ml-auto w-auto text-right">
            <a href="mailto:hello@ijpowell.co.uk">Send An Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}