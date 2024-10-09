"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const TabBar = () => {
  const path = usePathname();
  return (
    <div className="flex gap-8 justify-center align-middle fixed bottom-10 px-6 py-4 left-[50%] translate-x-[-50%] font-semibold">
      {tabs.map(tab => 
        <Link 
          href={tab.url} 
          key={tab.url}
          className={`relative text-sm min-w-8 text-center after:bg-black after:h-[4px] after:inline-block after:rounded-full after:absolute after:top-[calc(100%+2px)] after:left-[50%] after:translate-x-[-50%] after:transition-all after:duration-300 after:w-[4px] ${tab.url == path ? "after:opacity-100" : "after:opacity-0"}`}
        >
          {tab.name}
        </Link>)}
      <div className={`absolute top-0 left-0 w-[100%] h-[100%] z-[-1] rounded-full backdrop-blur-sm ${bgClasses[path]} transition-colors duration-300`}/>
    </div>
  )
}

const tabs = [
  { url: "/", name: "Photos" },
  { url: "/music", name: "Music" },
  { url: "/me", name: "Me" }
]

const bgClasses = {
  '/': "bg-photosHalf",
  '/music': "bg-musicHalf",
  '/me': "bg-meHalf",
};

export default TabBar;