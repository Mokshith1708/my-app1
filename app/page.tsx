'use client'
import Image from "next/image";
import { useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleButtonClick = ()=>
  {
    setCount((count)=>count+1);
  }
  return (<div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-800">
    <p>Hello World {count}</p>
    <button onClick={handleButtonClick}>click me!</button>
   </div>
  );
}
