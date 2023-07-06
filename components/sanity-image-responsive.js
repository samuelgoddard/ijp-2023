import Image from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageResponsive({ image, className, alt, priority, sizes }) {

  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);

	return (
    <figure className={`image bg-black/10 ${className} relative overflow-hidden`}>
      <Image
        src={imageProps?.src}
        className={`${className}`}
        quality={80}
        sizes={sizes ? sizes : `(max-width: 1024px) 90vw,55vw`}
        width={image?.asset.metadata.dimensions.width}
        height={image?.asset.metadata.dimensions.height}
        {...(priority ? {priority: true} : {})}
        alt={alt ? alt : 'MISSING ALT TEXT'}
      />
    </figure> 
  )
}