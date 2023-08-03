import Image from 'next/image'
import React from 'react'



export default function AboutMe() {
  return (
    <div id="about" 
    className="flex flex-col relative h-screen text-center sm:text-justify md:text-justify md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase text-2xl">
            About Me
        </h3>
        <Image src="/face.jpg" width={300} height={300}/>
        <div className="space-y-10 px-0 md:px-10">
            <p className="text-base">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada tellus, in ornare orci. Quisque dapibus, nisl nec facilisis gravida, dolor lectus vestibulum justo, a euismod dolor diam et dui. Phasellus maximus ullamcorper erat, vitae accumsan diam imperdiet at. Proin placerat sem dolor. Vivamus cursus eget tellus in semper. Nam hendrerit est non cursus interdum. Nullam porta vehicula facilisis. Mauris auctor nisi sit amet mi bibendum, ac laoreet lorem auctor. Vivamus pellentesque efficitur urna, non cursus ligula posuere vitae. Vivamus condimentum quam in justo placerat, non tempor velit imperdiet. Aliquam iaculis convallis nibh, eu viverra nisi euismod ac. Phasellus consectetur, nibh id posuere interdum, eros nisl rutrum odio, sit amet rutrum nisi justo vitae sem. Nunc massa mauris, rhoncus sit amet bibendum at, auctor rutrum quam. Nunc sed convallis augue.

Fusce orci urna, vehicula sit amet tempus at, dictum a tellus. Pellentesque scelerisque elementum metus sit amet suscipit. Sed eu erat nibh. Nam mi augue, egestas et dolor non, scelerisque suscipit tortor. Ut vestibulum blandit magna sed finibus. Duis id nulla magna. Mauris mollis enim in nisi pretium placerat. Proin arcu quam, interdum a velit posuere, blandit malesuada quam. Donec luctus, ligula id auctor pretium, quam diam sollicitudin libero, eget eleifend sem nulla eget dui. Morbi gravida urna iaculis lectus faucibus consectetur. Integer sollicitudin aliquam scelerisque. Cras rhoncus quam quis tortor rhoncus laoreet.

Sed laoreet leo placerat tortor vehicula tristique. Maecenas gravida neque eget nibh pretium gravida. Mauris eu erat sed nulla dapibus faucibus in laoreet metus. Aliquam nulla felis, convallis in nulla a, aliquam laoreet quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet justo non nisl porttitor laoreet eget at augue. Maecenas velit dolor, finibus ut diam quis, accumsan congue odio. Maecenas ultricies, purus vitae congue porttitor, metus lectus bibendum lectus, in hendrerit dolor justo quis nunc. Donec dignissim ultrices lorem, in efficitur turpis vestibulum et. Duis bibendum quam sit amet dui ullamcorper pellentesque. Morbi sapien lacus, sodales vitae varius ut, varius sit amet tortor. Sed sed mi molestie, vehicula quam vitae, gravida diam. Quisque feugiat ex augue, sed volutpat enim euismod sed. Pellentesque mollis suscipit mi sed ullamcorper. Aenean sapien diam, pretium id nibh eu, euismod scelerisque ipsum. Fusce sed dolor mollis, eleifend eros sed, elementum orci.            </p>
        </div>

    </div>
  )
}

//inter-word 