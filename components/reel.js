import { IntroContext } from "@/context/intro";
import { useContext, useEffect, useRef, useState } from "react";

export default function Reel() {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    let speed = 550

    const i_id = setInterval(() => {
      if (currentImage == (28 - 1)) {
        setCurrentImage(0)
      } else {
        setCurrentImage(introContext ? currentImage => currentImage+1 : currentImage => currentImage)
      }
    }, speed);
    return () => {
      clearInterval(i_id);
    }

  },[currentImage, introContext]);

  return(
    <div className="relative w-full overflow-hidden grayscale">

      {/* <span className="absolute bottom-0 left-0 block border-2 border-white w-8 h-8 m-4 rounded-full z-[11]"></span> */}
      <img className="w-full" src="/images/index.jpg" alt="Arc Architects" />
      
      {Array.from(Array(28), (e, i) => {
        return (
          <div className={`absolute inset-0 ${i == currentImage ? 'z-[10]' : 'z-[1]'}`} key={i}>
            <img className="w-full" src={`/images/IJP-REEL-${ i < 9 ? '0' : ''}${i+1}.jpg`} alt="Arc Architects" />
          </div>
        )
      })}
    </div>
  )
}