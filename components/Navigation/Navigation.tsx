import * as React from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import Link from "next/link";


export const Navigation = ({ isOpen, toggleOpen }: any) => {

  return (
    
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >   
      
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
