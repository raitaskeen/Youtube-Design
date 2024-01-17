import { BellIcon, MenuIcon, UploadIcon, User } from 'lucide-react';
import logo from '../src/assets/youtube.png';
import { Button } from './components/Button';

export function PageHeader() {
  return <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
    <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon" >
            <MenuIcon size={24} />
        </Button>
        <a href="">
            <img src={logo}  className='h-5'/>
        </a>
    </div>
    <div></div>
    <div className='flex flex-shrink-0 md:gap-2'>
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