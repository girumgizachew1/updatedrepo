
import React, { useEffect, useState } from 'react'
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
    const [slidesToShow, setSlidesToShow] = useState(2);
    const [slidesToScroll, setSlidesToScroll] = useState(2);

    const responsiveSettings = [
        {
            breakpoint: 768, // adjust as needed
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1240) {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            } else {
                setSlidesToShow(2);
                setSlidesToScroll(2);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // set initial values based on screen size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <section id="sectionProjects" className="section-projects mt-1">
                <h1 className="heading-1">
                    <span>Some Worthy mentioning projects </span> <small>💼</small>
                </h1>
                <p className="paragraph">
                    Each project is unique. Here are some of my works.
                </p>

                <div className="grid lg:grid-cols-1 gap-2 md:grid-cols-1">
                    <Slider dots
                        infinite
                        speed={100}
                        slidesToShow={slidesToShow}
                        slidesToScroll={slidesToScroll}
                        adaptiveHeight
                        responsive={responsiveSettings}>
                        {projects.map((project) => (
                            <Projectcard project={project} />
                        ))}
                    </Slider>


                </div>
            </section></div>
    )
}

export default Projects