import React from 'react';
import './Intro.css';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <div className="hello">Hello,</div>
        <span className="introText">I'm <span className="introName">Vidya</span> <br /> Website Designer </span>
    <p className="introPara">I am skilled and passionate website designer with <br/> visually appealing and user friendly websites. </p>
    <Link><button className="btn">Hire me</button></Link>
    </div>
    </section>
  )
}

export default Intro
