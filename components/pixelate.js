import { IntroContext } from "@/context/intro";
import { LongIntroContext } from "@/context/longIntro";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ImagePixelated } from "react-pixelate";
import { useReducedMotion } from "framer-motion"
import SanityImageResponsive from "./sanity-image-responsive";
import src from '/public/images/IJP-REEL-01.jpg'

export default function Pixelate({images}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [longIntroContext, setLongIntroContext] = useContext(LongIntroContext);
  const [pixelSize, setPixelSize] = useState(100);
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    let speed = 150
    let speedReel = shouldReduceMotion ? 2000 : 900

    if (longIntroContext) {
      const i_id2 = setInterval(() => {
        if (currentImage == (images.length)) {
          setCurrentImage(0)
        } else {
          setCurrentImage((longIntroContext && (pixelSize == 0 || shouldReduceMotion)) ? currentImage => currentImage+1 : currentImage => currentImage)
        }
      }, speedReel);

      const i_id = setInterval(() => {
        if (pixelSize == (0)) {
          setPixelSize(0)
        } else {
          setPixelSize(longIntroContext ? pixelSize => pixelSize-20 : pixelSize => pixelSize)
        }
      }, speed);

      return () => {
        clearInterval(i_id);
        clearInterval(i_id2);
      }
    }
  },[currentImage, pixelSize, longIntroContext]);

  return(
    <div className="relative w-full overflow-hidden grayscale">
      <Image priority quality={80} className="w-full" src={src} width={1396} height={962} sizes={`(max-width: 1024px) 90vw,65vw`} alt="Pocket pieces" />
      
      {images.map((e, i) => {
        return (
          <div className={`absolute inset-0 ${i == currentImage ? 'z-[10]' : 'z-[1]'}`} key={i}>
            <SanityImageResponsive className="w-full" image={e} sizes={`(max-width: 1024px) 90vw,65vw`} />
          </div>
        )
      })}

      { !pixelSize == 0 && (
        <div className={`absolute inset-0 w-full h-full z-[11]`}>
          <div className="absolute inset-0 bg-black py-[7.2%] px-[6.5%]">
            <ImagePixelated src={'/images/IJP-REEL-01-scramble.jpg'} pixelSize={pixelSize} width={600} height={375} centered />
          </div>
        </div>
      )}
    </div>
  )
}