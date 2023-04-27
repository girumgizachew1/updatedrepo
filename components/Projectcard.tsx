import Link from 'next/link';
import React from 'react';

function Projectcard({ project }: any) {
    return (
        <div className="project-card ">

            <div className="project-card__left">
                <h4 className="heading-4">{project.techStack}</h4>
            </div>
            <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
            >
                <img src={project.image1} alt={project.name} />
                <img src={project.image2} alt={`${project.name} logo`} />
            </div>
            <div className="project-card__right">
                <h2
                    data-scroll
                    data-scroll-offset="35%"
                    data-scroll-repeat={true}
                    data-scroll-class={project.animationClass}
                    className="heading-2"
                >
                    {project.name}
                </h2>
                <div className='flex flex-col space-y-8' >
                <a 
                     rel="noopener"
                    target="_blank"
                    href={project.caselink}
                >
                    Case Study
                </a>
                <a
                   
                   rel="noopener"
                   target="_blank"
                    href={project.link}
                    className="project-card__link"
                >
                    VISIT THE WEBSITE
                </a>
                </div>
            </div>
        </div>
    );
}

export default Projectcard;
