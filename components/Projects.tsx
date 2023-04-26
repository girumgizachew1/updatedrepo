import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Projectcard from './Projectcard';
const projects = [
    {
        name: "Watch Config",
        techStack: "React.js, React-fiber-three, Threejs",
        image1: "webp/watchconfig.jpg",
        image2: "webp/watchconfig.jpg",
        caselink: '/projects/watchconfig',
        link: "https://watchconfig.vercel.app/",
        animationClass: "dgh-anim"
    },
    
    {
        name: 'Ethiopiaye ኢትዮጲያን እንወቅ',
        techStack: 'REACT JS, Tailwindcss, NodeJS',
        animationClass: 'safarika-anim',
        link: 'https://ethiopiaye.netlify.app/',
        caselink: '/projects/ethiopiaye',
        image1: 'webp/abyssinaye.png',
        image2: 'webp/abyssinaye.png',
    },
    {
        name: "Girum Gizachew version 1",
        techStack: "Wordpress, JAVASCRIPT",
        image1: "webp/giri.png",
        image2: "webp/giri.png",
        caselink: '/projects/ggv1',
        link: "https://girumgizachew.netlify.app/",
        animationClass: "girum-anim"
    },
    {
        name: 'hYAB gIFTS',
        techStack: 'NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION',
        animationClass: 'alexxandria-anim',
        link: 'https://hyab-15046.web.app/',
        caselink: '/projects/hyabgifts',
        image1: 'webp/hyab1.png',
        image2: 'webp/hyab1.png',
    },
];

function Projects() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          
        ]
      };

    return (
        <div className='w-full' >
        <section id="sectionProjects" className="section-projects mt-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mb-4 md:mb-8">
            <span>Some Worthy mentioning projects </span> <small>💼</small>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-8">
            Each project is unique. Here are some of my works.
          </p>
  
          <div className="grid grid-cols-1 gap-2">
            <Slider {...settings}>
              {projects.map((project) => (
                <Projectcard project={project} key={project.name} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
    )
}

export default Projects