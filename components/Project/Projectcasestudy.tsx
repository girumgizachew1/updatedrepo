import React from 'react'
import Image from 'next/image'
function Projectcasestudy({project}:any) {

    return (
        <div className="h-full w-full  flex flex-col md:flex-row text-white space-y-10 about-text ">
            <div className="about-text scroll-auto  flex flex-col justify-center items-center p-2 md:p-16 my-72 " style={{ justifyContent: 'center' }}>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 ">{project.title}</h1>
                <p className="text-3xl md:text-3xl mb-8">
                    {project.overview}
                </p>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                        <Image
                            className='rounded-xl '
                            src={project.photo}
                            alt="Watch Config Image 1"
                            width={700}
                            height={400}
                            layout="responsive"
                        />
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <div className='flex-row mt-10 px-10' >
                            <div className='space-y-4 ' >
                                <h1 className="text-3xl md:text-3xl text-white rounded-xl p-2  md:text-5xl bg-gradient-to-r from-red-600 from-orange-600 font-bold mb-8">Design</h1>
                                <p className="text-3xl md:text-3xl  text-gray-500 md:text-3xl  mb-8">
                               { project.designProcess } </p>
                                <div className="project-card__left">
                                    <h4 className="heading-4 text-3xl md:text-3xl  text-gray-500">{project.designTechnology} </h4>
                                </div>
                            </div>


                            <div className='space-y-4' >
                                <h1 className="text-3xl md:text-3xl text-white rounded-xl p-2 md:text-5xl bg-gradient-to-r from-red-600 from-orange-600 font-bold mt-8">Development</h1>
                                <p className="text-3xl md:text-3xl text-gray-500 mb-8 ">
                                    {project.developmentProcess}
                                </p>
                                <div className="project-card__left">
                                    <h1 className="heading-4 text-3xl md:text-3xl text-gray-500 ">{project.developmentTechnology} </h1>
                                </div>
                            </div>

                            <div className='flex justify-between mt-16 '>
                                <a
                                    rel="noopener"
                                    target="_blank"
                                    href={project.githubLink}
                                    className="projectcardlink text-orange-500"
                                >
                                    Github
                                </a>
                                <a
                                    rel="noopener"
                                    target="_blank"
                                    href={project.websiteLink}
                                    className="projectcardlink text-orange-500"
                                >
                                    VISIT THE WEBSITE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectcasestudy