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
    let speed = 100
    let speedReel = 250

    const i_id2 = setInterval(() => {
      if (currentImage == (28 - 1)) {
        setCurrentImage(0)
      } else {
        setCurrentImage((introContext && pixelSize == 0) ? currentImage => currentImage+1 : currentImage => currentImage)
      }
    }, speedReel);

    const i_id = setInterval(() => {
      if (pixelSize == (0)) {
        setPixelSize(0)
      } else {
        setPixelSize(introContext ? pixelSize => pixelSize-20 : pixelSize => pixelSize)
      }
    }, speed);

    return () => {
      clearInterval(i_id);
      clearInterval(i_id2);
    }
  },[currentImage, pixelSize, introContext]);

  return(
    <div className="relative w-full overflow-hidden grayscale">
      <Image quality={80} className="w-full" src={src} width={1396} height={962} alt="Pocket pieces" />
      
      {Array.from(Array(28), (e, i) => {
        return (
          <div className={`absolute inset-0 ${i == currentImage ? 'z-[10]' : 'z-[1]'}`} key={i}>
            <Image quality={80} className="w-full" width={1396} height={962} src={`/images/IJP-REEL-${ i < 9 ? '0' : ''}${i+1}.jpg`} alt="Arc Architects" />
          </div>
        )
      })}

      { !pixelSize == 0 && (
        <div className={`absolute inset-0 w-full h-full z-[11] bg-black py-[7.2%] px-[6.5%]`}>
          <ImagePixelated src={'/images/IJP-REEL-01-scramble.jpg'} pixelSize={pixelSize} width={600} height={375} centered />
        </div>
      )}
    </div>
  )
}