
import React from 'react'
import ProjectCard from './ProjectCard'

// TO DO: Experiences should display the tech used

export default function Projects() {
  const projects = [
    {
logo: "/logo.png",
title: "Role",
company: "Company",
start: "Start Date",
end: "End Date",
description:[
  "Description",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada tellus, in ornare orci. Quisque dapibus, nisl nec facilisis gravida, dolor lectus vestibulum justo, a euismod dolor diam et dui. Phasellus maximus ullamcorper erat, vitae accumsan diam imperdiet at. Proin placerat sem dolor. Vivamus cursus eget tellus in semper. Nam hendrerit est non cursus interdum. Nullam porta vehicula facilisis. Mauris auctor nisi sit amet mi bibendum, ac laoreet lorem auctor. Vivamus pellentesque efficitur urna, non cursus ligula posuere vitae. Vivamus condimentum quam in justo placerat, non tempor velit imperdiet. Aliquam iaculis convallis nibh, eu viverra nisi euismod ac. Phasellus consectetur, nibh id posuere interdum, eros nisl rutrum odio, sit amet rutrum nisi justo vitae sem. Nunc massa mauris, rhoncus sit amet bibendum at, auctor rutrum quam. Nunc sed convallis augue."

]
    },
    {
logo: "/logo.png",
title: "Role",
company: "Company",
start: "Start Date",
end: "End Date",
description:[
  "Description",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada tellus, in ornare orci. Quisque dapibus, nisl nec facilisis gravida, dolor lectus vestibulum justo, a euismod dolor diam et dui. Phasellus maximus ullamcorper erat, vitae accumsan diam imperdiet at. Proin placerat sem dolor. Vivamus cursus eget tellus in semper. Nam hendrerit est non cursus interdum. Nullam porta vehicula facilisis. Mauris auctor nisi sit amet mi bibendum, ac laoreet lorem auctor. Vivamus pellentesque efficitur urna, non cursus ligula posuere vitae. Vivamus condimentum quam in justo placerat, non tempor velit imperdiet. Aliquam iaculis convallis nibh, eu viverra nisi euismod ac. Phasellus consectetur, nibh id posuere interdum, eros nisl rutrum odio, sit amet rutrum nisi justo vitae sem. Nunc massa mauris, rhoncus sit amet bibendum at, auctor rutrum quam. Nunc sed convallis augue."

]
    },
    {
logo: "/logo.png",
title: "Role",
company: "Company",
start: "Start Date",
end: "End Date",
description:[
  "Description",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada tellus, in ornare orci. Quisque dapibus, nisl nec facilisis gravida, dolor lectus vestibulum justo, a euismod dolor diam et dui. Phasellus maximus ullamcorper erat, vitae accumsan diam imperdiet at. Proin placerat sem dolor. Vivamus cursus eget tellus in semper. Nam hendrerit est non cursus interdum. Nullam porta vehicula facilisis. Mauris auctor nisi sit amet mi bibendum, ac laoreet lorem auctor. Vivamus pellentesque efficitur urna, non cursus ligula posuere vitae. Vivamus condimentum quam in justo placerat, non tempor velit imperdiet. Aliquam iaculis convallis nibh, eu viverra nisi euismod ac. Phasellus consectetur, nibh id posuere interdum, eros nisl rutrum odio, sit amet rutrum nisi justo vitae sem. Nunc massa mauris, rhoncus sit amet bibendum at, auctor rutrum quam. Nunc sed convallis augue."

]
    },
    {
logo: "/logo.png",
title: "Role",
company: "Company",
start: "Start Date",
end: "End Date",
description:[
  "Description",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac malesuada tellus, in ornare orci. Quisque dapibus, nisl nec facilisis gravida, dolor lectus vestibulum justo, a euismod dolor diam et dui. Phasellus maximus ullamcorper erat, vitae accumsan diam imperdiet at. Proin placerat sem dolor. Vivamus cursus eget tellus in semper. Nam hendrerit est non cursus interdum. Nullam porta vehicula facilisis. Mauris auctor nisi sit amet mi bibendum, ac laoreet lorem auctor. Vivamus pellentesque efficitur urna, non cursus ligula posuere vitae. Vivamus condimentum quam in justo placerat, non tempor velit imperdiet. Aliquam iaculis convallis nibh, eu viverra nisi euismod ac. Phasellus consectetur, nibh id posuere interdum, eros nisl rutrum odio, sit amet rutrum nisi justo vitae sem. Nunc massa mauris, rhoncus sit amet bibendum at, auctor rutrum quam. Nunc sed convallis augue."

]
    },
  ]
  return (
    <div id="about"
    className="my-5 h-screen flex relative overflow-hidden flex-col text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3
        className="absolute top-24 uppercase tracking-[20px] text-2xl z-20">
            Projects
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        ">
            {projects.map((project, i) => (<ProjectCard key={i} logo={project.logo} title={project.title}
            company={project.company} start={project.start} end={project.end} description={project.description} />))}

        </div>
    </div>
  )
}