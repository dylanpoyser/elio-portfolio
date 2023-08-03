import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


// TO DO: Card behind name.

export default function Hero() {

    return (
        <div id="hero" className="w-screen h-5/6 flex flex-col justify-center space-between">
        <div id="summary" className="z-10 relative left-10 top-24 text-5xl flex flex-col">
            <div id="portrait" className= "absolute top-10 rounded-full h-100 mx-auto flex flex-row">
            <Image src="/face.jpg" alt="portrait" class="relative rounded-full h-32 w-32 mx-auto object-cover" width={600} height={600} />
            <div>
                <div id="about" className="mb-5 ">
            Elionardo Feliciano
            </div>
            <div id="about" className="w-fit">
            UI Engineer
            </div>
            </div>
                </div>
        </div>
        <div id="bgimage" className="mx-10 aspect-video relative">
        <Image src="/bg.jpg" alt="background" class="object-cover mx-auto z-0" fill priority/>
        </div>
      </div>
  )
}