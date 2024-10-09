import Image from "next/image"
import seedrandom from "seedrandom";

const Gallery = () => {
  return (
    <div className="gallery absolute flex left-0 w-[100vw] h-[60vh] overflow-x-auto gap-4 align-middle flex-nowrap">
      {ImageUrls.map(url => {
        const size = Math.floor(seedrandom(url)() * 30 + 50);
        const sizeClasses = `inline-block flex-shrink-0 flex-grow-0`
        return (
          <div 
            key={url} 
            className={`${sizeClasses} bg-red-300`} 
            style={{ width: `${size}vw`, height: `${size}vh` }}
          >
            <Image key={url} src={url} width={size} height={size} alt="apfhdasfsdfsdfsdfsd" layout="responsive"/>
          </div>
        )
      })}
    </div>
  )
}

const ImageUrls = [
  "/photos/5B04D951-9662-44B3-85E9-67B691EDEC05_1_105_c.jpeg",
  "/photos/C1B57BC9-25AD-4753-8EE4-3E042840BACD_4_5005_c.jpeg",
  "/photos/F52CE914-4A8A-4430-8BCC-E78459B8B61C_1_102_o.jpeg",
  "/photos/F75411C0-D54D-4FC9-BA45-F874070CA6D5_4_5005_c.jpeg"
]

export default Gallery;