import FancyLink from '@/components/fancyLink'

export default function Footer() {
  return (
    <header className="p-3 px-4">
      <div className="flex flex-wrap mr-auto flex-1">
        <a href="#">Instagram</a>

        <span className="block mx-auto text-center flex-1">
          12:43:32 GMT
        </span>

        <div className="ml-auto w-auto">
          <a href="#">Send An Email</a>
        </div>
      </div>
    </header>
  )
}