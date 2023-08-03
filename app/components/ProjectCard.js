import React from 'react'


export default function ProjectCard({logo, title, company, start, end, description }) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[21rem] md:w-[600px] xl:w-[700px] snap-center bg-[#531150] p-5 md:p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
     <img 
     className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
     src={logo} alt="logo" 
     />

     <div className="px-0 md:px-10"> 
        <h4 className="text-2xl md:text-4xl font-light text-center md:text-left">
            {title}
        </h4>
        <p className="font-bold text-1xl md:text-2xl mt-1 text-center md:text-left">
            {company}
        </p>
        {/* <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
        </div> */}
        <p className="text-sm m:text-l uppercase py-5 text-center sm:text-left">
            {start} - {end}
        </p>

        <ul className="list-disc space-y-4 ml-1 mr-1 md:ml-0 sm:text-base text-sm  h-80 overflow-y-scroll pl-2 md:pl-6 pr-2 md:pr-4
        scrollbar-thin scrollbar-track-black/40 scrollbar-thumb-[#0a98f7]/80 bg-[#3a0c38]">
            {description.map((desc, desci) => <li className="" key={desci}>{desc}</li>)}
            </ul>
     </div>  
    </article>
  )
}