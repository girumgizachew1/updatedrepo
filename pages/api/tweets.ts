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
    reply: "This is great stuff right here..",
  },
  {
    id: 1,
    name: "nahom reta",
    userName: "@edmund",
    reply: "Your projects are amazing!",
  },
  {
    id: 2,
    name: "Bamleak tad",
    userName: "@bamtad",
    reply: "Man your portfolio is 🔥",
  },
  {
    id: 3,
    name: "Bemnet tad",
    userName: "@aloha",
    reply: "Really impressive man",
  },
  {
    id: 4,
    name: "Fasica Worku",
    userName: "@fasicawk",
    reply: "Your site is elite, lovely work.",
  },
  {
    id: 5,
    name: "kaleab daniel",
    userName: "@kaleab_daniel",
    reply: "Rooting for you!!",
  },
  {
    id: 6,
    name: "Mikiyas tesema",
    userName: "@mikiyas",
    reply: "Beautiful site you have!",
  },
  {
    id: 7,
    name: "dano Hailu",
    userName: "@danik",
    reply: "Great Portfolio man...Wish you luck",
  },
  {
    id: 8,
    name: "hundaol neguse",
    userName: "@hundalnk",
    reply: "Whooooaaaaaaa your site is mad",
  },
  {
    id: 9,
    name: "Big Sheddy 🦅",
    userName: "@coder_blvck",
    reply: "This is really cool!",
  },
  {
    id: 10,
    name: "Hululante worku",
    userName: "@hulu1k",
    reply: "well-done.",
  },
  {
    id: 11,
    name: "meseret keleab",
    userName: "@mesi_kl",
    reply: "i loved working with !",
  },
  {
    id: 12,
    name: "Menetesnot Ertibu",
    userName: "@nedval",
    reply: "impressive Clapping hands sign wish you success",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
