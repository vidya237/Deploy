import React from 'react';
import './Skills.css';
import node from '../assets/node.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import MangoDB from '../assets/mangoDB.png';


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">WHAT I DO</span>
        <p className="skillDesc">I am skilled and passionate website designer with <br/> visually appealing and user friendly websites.<br/> well versed Knwoledge in frontend technologies like html, css, bootstrap <br/> and some basic backend technologies like Javascript, React, MangoDB, nodejs</p>
    <div className="skillbars">
      <div className="skillbars1">
      <div className="skillbar">
            <img src={html} alt="" className="skillbarImg" />
        <h2>HTML</h2>
        </div>
        <div className="skillbar">
            <img src={css} alt="" className="skillbarImg" />
        <h2>CSS</h2>
        </div>
        <div className="skillbar">
            <img src={Javascript} alt="" className="skillbarImg" />
        <h2>Javascript</h2>
        </div>
      </div>
        <div className="skillbars2">
        <div className="skillbar">
            <img src={react} alt="" className="skillbarImg" />
        <h2>React</h2>
        </div>
        <div className="skillbar">
            <img src={node} alt="" className="skillbarImg" />
        <h2>Nodejs</h2>
        </div>
        <div className="skillbar">
            <img src={MangoDB} alt="" className="skillbarImg" />
        <h2>MongoDB</h2>
        </div>
        </div>

    </div>

    </section>
  )
}

export default Skills
