import { useEffect, useRef, useState } from "react";

export default function Reel() {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let speed = 600

    // Set an interval that updates the currentProject every 3 seconds on mobile to rotate the projects
    const i_id = setInterval(() => {
      if (currentImage == (28 - 1)) {
        // If we hit the cap (5)... Reset...
        setCurrentImage(0)
      } else {
        // Else... Tick along...
        setCurrentImage(currentImage => currentImage+1)
      }
    }, speed);
    return () => {
      clearInterval(i_id);
    }
  },[currentImage]);

  return(
    <div className="relative w-full overflow-hidden">
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