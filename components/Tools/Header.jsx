import React from 'react'
import {  useScrollYPosition } from 'react-use-scroll-position';
import { useState,useEffect } from 'react';
import styles from "../../styles/Tools/Header.module.css"
import { Link } from "react-scroll";

function Header() {
   const scrollY = useScrollYPosition();
   const [mainClass, setMainClass] = useState(styles.main)
   const [menu1Class, setMenu1Class] = useState(styles.menu1)
   const [menu2Class, setMenu2Class] = useState(styles.menu2)
   const [goBackTop, setGoBackTop] = useState(styles.goBackTop)

   const whiteMenuFunc = () => {
      setMainClass(styles.row1White)
      setMenu1Class(styles.menu1White)
      setMenu2Class(styles.menu2White)
      setGoBackTop(styles.goBackTopWhite)
   }

   const blackMenuFunc = () => {
      setMainClass(styles.row1)
      setMenu1Class(styles.menu1)
      setMenu2Class(styles.menu2)
      setGoBackTop(styles.goBackTop)

   }

   useEffect(() => {
      scrollY > screen.height - 200 ? whiteMenuFunc() : blackMenuFunc()
    }, [scrollY])
    return (
     <div className={mainClass}>
         <div className={goBackTop}>
             <Link
               to="home"
               spy={true}
               smooth={true}
               duration={600}
              >
                <img className={styles.vector3} src="/img/Vector 3.png" />
              </Link>
         </div>
        <div className={styles.img}>
           <img className={styles.imgMain} src="/img/SwitchBank.ng.png" alt="logo" />
        </div>  
        <div className={styles.menu}>
           <div className={menu1Class}>
             <Link
               to="home"
               spy={true}
               smooth={true}
               duration={600}
              >
               Home
              </Link>
           </div>
           <div className={menu2Class}>
             <Link
               to="section1"
               spy={true}
               smooth={true}
               duration={600}
              >
              How it Works
              </Link>
           </div>
           <div className={styles.menu3}>
             About
           </div>
        </div>
    </div>
    )
}

export default Header
