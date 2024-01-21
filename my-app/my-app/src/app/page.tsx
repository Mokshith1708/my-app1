'use client'
import { Button } from '@/components/ui/button';

export default function Proposal(){
    const handleHover = (e:React.MouseEvent<HTMLButtonElement>) =>{
          const windowHeight = window.innerHeight;
          const windowWidth =window.innerWidth;
          const randomX = Math.floor(Math.random()*windowWidth);
          const randomY= Math.floor(Math.random()*windowHeight);
          if(e.currentTarget instanceof HTMLButtonElement)
          {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.left = `${randomX}px` ;
          e.currentTarget.style.top = `${randomY}px` ;
    }
}
    const name = "Mokshith"
    const handleClick = () =>
    {
        window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=Prom+Reminder+with+${name}&dates=20240214T101100Z%2F20240214T101100Z`)
    }
    return(
        <div className="w-Screen h-screen bg-pink-500 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"/>
                <p className="font-bold text-xl text-white">Will you go to the prom with me?</p>
                <Button onClick={handleClick}>YES!</Button>
                <Button onMouseEnter={handleHover}>NO</Button>
            </div>
        </div>
    );
}