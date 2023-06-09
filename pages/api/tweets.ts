import type { NextApiRequest, NextApiResponse } from "next";

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const result: Ireply[] = [
  {
    id: 0,
    name: "Hyabhr",
    userName: "HYAB GIFTS AND MARKET",
    reply: "Girum's expertise in HTML, CSS, and JavaScript is remarkable. His ability to bring complex designs to life is simply outstanding. His attention to detail and eagerness to learn new technologies make him a valuable asset to any team.",
  },
  {
    id: 1,
    name: "Aaron Sarginson",
    userName: "CEO at Trigan",
    reply: "Girum is a talented frontend developer who is always looking for ways to improve the performance and user experience of our web applications. His expertise in responsive design, mobile-first development, and accessibility has helped us create websites and applications that work well on all devices and for all users.",
  },
  {
    id: 2,
    name: "Hyunjae Lee",
    userName: "CEO at Vimerse",
    reply: "It's been a pleasure to work with Girum on various projects. His knowledge of responsive design, cross-browser compatibility, and accessibility has allowed us to create websites that perform well and meet our clients' needs. He is a true professional and a team player.",
  },
  {
    id: 3,
    name: "Kidus tamerat",
    userName: "CTO AT RaeyeTech",
    reply: "Girum's proficiency in CSS preprocessors like SASS and LESS has enabled us to create maintainable and scalable CSS codebases. His attention to detail and his ability to work collaboratively with designers and backend developers have helped us deliver exceptional user experiences.",
  },
  {
    id: 4,
    name: "Mentesnot Ertibu",
    userName: "CTO at IMPART",
    reply: "Girum is an incredibly talented frontend developer. His mastery of Angular, Vue, and other modern web frameworks has enabled us to create visually stunning and highly functional applications. His ability to communicate effectively and his commitment to quality make him an invaluable member of our team.",
  },
  {
    id: 5,
    name: "fasica zewede",
    userName: "Flutter developer at AWRA",
    reply: "I've had the pleasure of working with Girum for several years now, and I can confidently say that he is one of the most talented frontend developers I've ever worked with. His expertise in modern web technologies like React, Vue, and Angular is unparalleled, and his ability to write clean and efficient code is impressive.",
  },
  
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
