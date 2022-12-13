
import React from 'react'
import"./Introduction.css"

// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";


// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FloatingDiv } from '../floatingDiv/FloatingDiv';


export const Introduction = () => {

    const transition = { duration: 2, type: "spring" };

  return (
    <div className='genealIntro'>
     <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          {/* <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span> */}
          {/* <span>Andrew Thomas</span> */}
          {/* <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span> */}
        <div className='mangop1'>
        <img className='imgMongo' src="../../img/mango.jpg" alt="" />
        </div>
         
         

        </div>
        <Link to="contact" smooth={true} spy={true}>
          {/* <button className="button i-button">Hire me</button> */}
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src="../../img/github.png" alt="" />
          <img src="../../img/linkedin.png" alt="" />
          <img src="../../img/instagram.png" alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src= "../../img/Vector1.png" alt="" />
        <img src= "../../img/Vector2.png" alt="" />
        <img src= "../../img/boy.png"alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src= "../../img/glassesimoji.png"
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img= "../../img/crown.png" text1="Boutique" text2="Mango" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
         
          <FloatingDiv img= "../../img/thumbup.png" text1="E-Commerce"  />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>

    </div>
  )
}
