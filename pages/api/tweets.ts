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
    name: "Hyab Gift And market",
    userName: "@Hyabhr",
    reply: "Girum's expertise in HTML, CSS, and JavaScript is remarkable. His ability to bring complex designs to life is simply outstanding. His attention to detail and eagerness to learn new technologies make him a valuable asset to any team.",
  },
  {
    id: 1,
    name: "nahom reta",
    userName: "@edmund",
    reply: "Girum is a talented frontend developer who is always looking for ways to improve the performance and user experience of our web applications. His expertise in responsive design, mobile-first development, and accessibility has helped us create websites and applications that work well on all devices and for all users.",
  },
  {
    id: 2,
    name: "Bamleak tad",
    userName: "@bamtad",
    reply: "It's been a pleasure to work with Girum on various projects. His knowledge of responsive design, cross-browser compatibility, and accessibility has allowed us to create websites that perform well and meet our clients' needs. He is a true professional and a team player.",
  },
  {
    id: 3,
    name: "Bemnet tad",
    userName: "@aloha",
    reply: "Girum's proficiency in CSS preprocessors like SASS and LESS has enabled us to create maintainable and scalable CSS codebases. His attention to detail and his ability to work collaboratively with designers and backend developers have helped us deliver exceptional user experiences.",
  },
  {
    id: 4,
    name: "Fasica Worku",
    userName: "@fasicawk",
    reply: "Girum is an incredibly talented frontend developer. His mastery of Angular, Vue, and other modern web frameworks has enabled us to create visually stunning and highly functional applications. His ability to communicate effectively and his commitment to quality make him an invaluable member of our team.",
  },
  {
    id: 5,
    name: "kaleab daniel",
    userName: "@kaleab_daniel",
    reply: "I've had the pleasure of working with Girum for several years now, and I can confidently say that he is one of the most talented frontend developers I've ever worked with. His expertise in modern web technologies like React, Vue, and Angular is unparalleled, and his ability to write clean and efficient code is impressive.",
  },
  {
    id: 6,
    name: "Mikiyas tesema",
    userName: "@mikiyas",
    reply: "Girum is an excellent frontend developer who is always up-to-date with the latest web development trends and technologies. His knowledge of web performance optimization, progressive web apps, and serverless architecture has helped us create fast and scalable web applications.",
  },
  {
    id: 7,
    name: "dano Hailu",
    userName: "@danik",
    reply: "Girum is an incredibly talented frontend developer. His mastery of Angular, Vue, and other modern web frameworks has enabled us to create visually stunning and highly functional applications. His ability to communicate effectively and his commitment to quality make him an invaluable member of our team.",
  },
  
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
