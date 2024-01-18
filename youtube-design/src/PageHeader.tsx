import { ArrowLeft, BellIcon, MenuIcon, Mic, MicIcon, Search, UploadIcon, User,  } from 'lucide-react';
import logo from '../src/assets/youtube.png';
import { Button } from './components/Button';
import { useState } from 'react';

export function PageHeader() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
    <div className={` gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant="ghost" size="icon" >
            <MenuIcon size={24} />
        </Button>
        <a href="">
            <img src={logo}  className='h-5'/>
        </a>
    </div>
    <form className={` gap-4 flex-grow justify-center  ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
    {showFullWidthSearch && ( <Button onClick={() => setShowFullWidthSearch(false)} size={'icon'} variant={'ghost'} type='button' className='flex-shrink-0'>
            <ArrowLeft />
        </Button>)}
        <div className='flex flex-grow max-w-[600px]'>
            <input type='search' placeholder='Search' className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none'/>
            <Button className='py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0'>
                <Search />
            </Button>
        </div>
        <Button size={'icon'} type='button' className='flex-shrink-0'>
            <MicIcon />
        </Button>
    </form>
    <div className={` flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
    <Button onClick={() => setShowFullWidthSearch(true)} size={"icon"} variant={"ghost"} className='md:hidden'>
            <Search  />
        </Button>
        <Button size={"icon"} variant={"ghost"} className='md:hidden'>
            <Mic  />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
            <UploadIcon  />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
            <BellIcon  />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
            <User  />
        </Button>
    </div>

  </div>
}