type Project = {
  slug: string;
  title: string;
  photo: string;
  overview: string;
  designProcess: string;
  designTechnology: string;
  developmentTechnology: string;
  developmentProcess: string;
  githubLink: string;
  websiteLink: string;
  // other properties...
}

const projectsData: Project[] = [
  {
    slug: "watchconfig",
    title: "Watch Config",
    photo: "/webp/watchconfig.png",
    overview: "Watch Config is a 3D watch customizer that allows users to customize and preview a watch in real-time. Users can choose the watch model, color, material, and other specifications to see how the watch will look like before they buy it. The project uses Three.js to create the 3D models and the customizer interface.",
    designProcess: "The design process of Watch Config involved creating wireframes and user flows to define the user experience, creating high-fidelity mockups to visualize the customizer interface, and iterating on the design based on user feedback.",
    designTechnology: "Sketch, Figma",
    developmentProcess: "The development process of Watch Config involved creating a React application that integrates with a Three.js customizer module. The customizer module handles the 3D model creation and manipulation based on user inputs, while the React app manages the state and user interface components.",
    developmentTechnology: "React, Three.js, WebGL",
    githubLink: "",
    websiteLink: ""
  }, {
    slug: "ethiopiaye",
    title: "Ethiopiaye",
    photo: "/webp/ethiopiaye.png",
    overview: "Ethiopiaye is a social network for Ethiopian people around the world. The platform allows users to connect with each other, share posts, photos, and videos, and discover events and businesses related to Ethiopian culture. The project aims to promote Ethiopian culture and create a global community of Ethiopians.",
    designProcess: "The design process of Ethiopiaye involved creating wireframes and user flows to define the user experience, creating high-fidelity mockups to visualize the user interface, and iterating on the design based on user feedback.",
    designTechnology: "Sketch, Figma",
    developmentProcess: "The development process of Ethiopiaye involved creating a React application that integrates with a Firebase backend. The backend manages the user authentication, data storage, and real-time updates, while the React app manages the user interface and interactions.",
    developmentTechnology: "React, Firebase",
    githubLink: "",
    websiteLink: ""
  },
  {
    slug: "ggv1",
    title: "Portfolio v1",
    photo: "portfolio-v1.png",
    overview: "Portfolio v1 is a personal portfolio website that showcases my projects, skills, and experience. The website aims to provide an overview of my work and attract potential clients or employers. The website features a responsive design that adapts to different screen sizes and devices.",
    designProcess: "The design process of Portfolio v1 involved creating wireframes and user flows to define the user experience, creating high-fidelity mockups to visualize the user interface, and iterating on the design based on personal preferences and best practices.",
    designTechnology: "Sketch, Figma",
    developmentProcess: "The development process of Portfolio v1 involved creating a React application that uses Next.js for server-side rendering and SEO optimization. The website features a dynamic routing system that generates pages based on the project data, and a contact form that sends emails using Nodemailer.",
    developmentTechnology: "React, Next.js, Nodemailer",
    githubLink: "",
    websiteLink: ""
  }, {
    slug: "hyabgifts",
    title: "Hyab gift",
    photo: "https://example.com/hyab-gift-photo.jpg",
    overview: "Hyab gift is an online gift shop that allows users to browse and purchase gifts for their loved ones. The website is built using modern web technologies and is designed to provide a seamless and enjoyable user experience.",
    designProcess: "The design process for Hyab gift involved several iterations of wireframing and prototyping. We started by creating low-fidelity wireframes to establish the basic layout and functionality of the site. From there, we created higher fidelity prototypes to refine the design and test user interactions.",
    designTechnology: "We used Figma for our design work, which allowed us to collaborate with our client and make design changes quickly and easily.",
    developmentProcess: "The development process for Hyab gift was iterative and involved frequent feedback and testing. We used React for our front-end development and built a custom CMS using Node.js and MongoDB for managing the site's content.",
    developmentTechnology: "We used a number of technologies in the development of Hyab gift, including React, Node.js, MongoDB, and AWS S3 for storing and serving images. We also used Stripe for handling payments.",
    githubLink: "",
    websiteLink: ""
  }

]
export default projectsData;