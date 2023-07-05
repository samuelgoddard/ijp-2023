import { IntroContext } from "@/context/intro";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ImagePixelated } from "react-pixelate";
import src from '/public/images/IJP-REEL-01.jpg'

export default function Pixelate() {
  const [currentImage, setCurrentImage] = useState(0);
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [pixelSize, setPixelSize] = useState(100);

  useEffect(() => {
    let speed = 120

      const i_id = setInterval(() => {
        if (pixelSize == (0)) {
          setPixelSize(0)
        } else {
          setPixelSize(pixelSize => pixelSize-20)
        }
      }, speed);
      return () => {
        clearInterval(i_id);
      }

  },[pixelSize]);

  return(
    <div className="relative w-full overflow-hidden">
      <Image className="w-full" src={src} width={1396} height={962} alt="Arc Architects" />
      
      { !pixelSize == 0 && (
        <div className={`absolute inset-0 w-full h-full z-10 bg-black py-[7.2%] px-[6.5%]`}>
          <ImagePixelated src={'/images/IJP-REEL-01-scramble.jpg'} pixelSize={pixelSize} width={1396} height={962} />
        </div>
      )}
    </div>
  )
}