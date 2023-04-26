import * as React from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

const variants = {
  open: {
    left: 0,
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const Navigation = ({ isOpen, toggleOpen }: any) => {

  return (
    
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >   
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top h-28 w-full"
      >
        <Link href="/">
          <a className="brand-logo space-x-6">
            <img
              className="brand-logo__icon"
              src="/svg/logo2.png" width={40} height={30}
              alt="Girum gizachew logo"
            />
            <span className="brand-logo__text-wrapper">
              <img
                className="brand-logo__text h-40 mt-6"
                src="/svg/text.png "
                alt="Girum gizachew logo"
                
              />
            </span>
          </a>
        </Link>
        <MenuToggle toggle={toggleOpen} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};
