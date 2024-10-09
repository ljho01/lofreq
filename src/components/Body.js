"use client"
import { usePathname } from "next/navigation";
import { pretendard } from "@/app/fonts";


const Body = (props) => {
  const path = usePathname();
  return (
    <body className={`${bgClasses[path]} ` + `${pretendard.variable} antialiased relative w-[100vw] min-h-[100vh] background`} {...props}/>
  )
}

const bgClasses = {
  '/': "bg-photos",
  '/music': "bg-music",
  '/me': "bg-me",
};

export default Body;