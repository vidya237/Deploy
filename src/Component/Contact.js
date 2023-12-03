import React from 'react';
import './Contact.css';
import resume from '../assets/vidya Resume WD.pdf';


const Contact = () => {
  return (
    <section id="contact">
        <div className="contactBar">
            <span className="contactTitle">Contact Me</span>
<p className="contactDesc">Hereby i am concluded that above mensioned skills are best of my knowledge along with my strong dedication towards work, i can prove myself for that i need an opportunity.</p>
        </div>
        <div className="btns">
        <button className="email">vidya.ss.1996@gmail.com</button>
    <button className="no">8197308003</button>
        </div>

        <div className="resume"><button className='resumebtn'><a href={resume}>Download Resume</a></button></div>
       
    </section>
  )
}

export default Contact
