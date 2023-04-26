import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation/Navigation";
import  Footer  from "../components/Navigation/Footer";
import  Navbar  from "../components/navbar";
import  Hero  from "../components/hero";

import ReactGa from "react-ga";
interface indexProps {}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};


const index: React.FC<indexProps> = ({}) => 
{

  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);


  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.onmousemove = (e: any) => {
      cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };

    console.clear();
  }, []);

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6513560829041028"
     crossOrigin="anonymous"></script>
          <link rel="icon" href="svg/logo2.png" />
          <link href="https://girum.netlify.app/" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <meta name="google-site-verification" content="yPdBVDKst-ITfiTQPTkB8rxQjArTSTzqFJ65hJK9C4Q" />
          <title>Girum Gizachew &mdash; Frontend Devloper || FullStack Developer</title>
          <meta
            name="description"
            content="I'm a FrontEnd Developer And A Software Engineer ."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Girum Gizachew &mdash; Frontend Devloper and FullStack Developer"
          />
          <meta property="og:url" content="" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="I'm a FrontEnd Developer And A Software Engineer ."
          />
          <meta
            name="twitter:title"
            content="Girum Gizachew 🚀 &mdash; Frontend Devloper and FullStack Developer"
          />
          <meta
            name="twitter:description"
            content="I'm a FrontEnd Developer And A Software Engineer ."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="" />
        </Head>




        <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
          <source src="sound/preloader.mp3" type="audio/mp3" />
        </audio>
        <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              <img src="svg/logo2.png" width={50} height={50} alt="giri logo" />
            </motion.div>
            <motion.div
              initial={{ x: 15, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">REACT JS</p>
              <p className="preloader__text">NEXT JS</p>
              <p className="preloader__text">JAVASCRIPT</p>
              <p className="preloader__text">TYPESCRIPT</p>
              <p className="preloader__text">THREE JS</p>
              <p className="preloader__text">TAILWIND CSS, CSS</p>
              <p className="preloader__text">FRAMER MOTION</p>
            </motion.div>

          </div>
        </motion.div>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        
          <Navbar/>
          <Hero/>
          <Footer/>
      </div>
    </>
  );
};

export default index;
