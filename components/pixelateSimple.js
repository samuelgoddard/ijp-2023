import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagePixelated } from "react-pixelate";

export default function PixelateSimple({image, w, h}) {
  const [pixelSize, setPixelSize] = useState(60);

  useEffect(() => {
    let speed = 150
    
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
      <Image quality={85} className="w-full" src={image} width={w} height={h} sizes={`(max-width: 1024px) 33vw,30vw`} alt="Image" />

      { !pixelSize == 0 && (
        <div className={`absolute inset-0 w-full h-full z-[11]`}>
          <div className="absolute inset-0">
            <ImagePixelated src={image} pixelSize={pixelSize} width={w} height={h} centered />
          </div>
        </div>
      )}
    </div>
  )
}