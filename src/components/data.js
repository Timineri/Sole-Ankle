import NikeCourt from "../assets/img/IMG-20240601-WA0004.jpg";
import Metcon from "../assets/img/IMG-20240601-WA0005.jpg";
<<<<<<< HEAD
import Phantom from "../assets/img/IMG-20240601-WA0006.jpg";
import Pegasus from "../assets/img/IMG-20240601-WA0007.jpg";
import Joyride from "../assets/img/IMG-20240601-WA0008.jpg";
import Legend from "../assets/img/IMG-20240601-WA0009.jpg";
import React from "../assets/img/IMG-20240601-WA0010.jpg";
import PhantomFly from "../assets/img/IMG-20240601-WA0011.jpg";
=======
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca

const SHOES = [
  {
    slug: "tech-challenge",
    name: "NikeCourt Tech Challenge 20",
    imageSrc: NikeCourt,
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: "metcon-5",
    name: "Nike Metcon 5 AMP",
    imageSrc: Metcon,
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: "phantom",
    name: "Nike Phantom Vision",
<<<<<<< HEAD
    imageSrc: Phantom,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0006.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: "pegasus",
    name: "Nike Air Zoom Pegasus",
<<<<<<< HEAD
    imageSrc: Pegasus,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0007.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: "joyride",
    name: "Nike Joyride Dual Run",
<<<<<<< HEAD
    imageSrc: Joyride,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0008.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: "legend-academy",
    name: "Nike Tiempo Legend 8",
<<<<<<< HEAD
    imageSrc: Legend,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0009.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: "react-infinity",
    name: "Nike React Infinity Pro",
<<<<<<< HEAD
    imageSrc: React,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0010.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: "phantom-flyknit",
    name: "Nike React Phantom Run Flyknit 2",
<<<<<<< HEAD
    imageSrc: PhantomFly,
=======
    imageSrc: "../assets/img/IMG-20240601-WA0011.jpg",
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
<<<<<<< HEAD
  // {
  //   slug: "lebron",
  //   name: "LeBron 17",
  //   imageSrc: "../assets/img/IMG-20240601-WA0012.jpg",
  //   price: 26000,
  //   salePrice: null,
  //   releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
  //   numOfColors: 1,
  // },
=======
  {
    slug: "lebron",
    name: "LeBron 17",
    imageSrc: "../assets/img/IMG-20240601-WA0012.jpg",
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
  },
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
];

export default SHOES;
