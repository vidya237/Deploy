import React from 'react';
import './Project.css';
import netflix from '../assets/netflix.png';
import zomatoclone from '../assets/zomato-clone.png';
import weatherApp from '../assets/weatherApp.png';

const Project = () => {
  return (
    <section id="project">
        <div className="decription">
        <span className="projectTitle">PROJECTS DONE</span>
        <p className="TitleDesc">Here are some of major projects like zomato-clone and netflix-clone,<br/> minor projects like weather app done during my internship time to the best of my knowledge</p>
        </div>
        <div className="projectBar">
        <div className="projectName">
        <img src={netflix} alt="" className="projectImg" />
        <p className="projectDesc">Here i have done netflix-clone using technologies like html, css, bootstrap, MongoDb, Nodejs and React, we can access to page where we can see trailor of a movie</p>
        </div>

        <div className="projectName">
        <p className="projectDesc">Here i have done zomato-clone using technologies like html, css, bootstrap, MongoDb, Nodejs and React, it's a major project contaning database and from login to payment integration ll functionalities have been done. </p>
            <img src={zomatoclone} alt="" className="projectImg" />
        </div>

        <div className="projectName">
        <img src={weatherApp} alt="" className="projectImg" />
        <p className="projectDesc">Here i have done netflix-clone using technologies like html, css, bootstrap and javascript, we can access weather conditions of cities </p>
        </div>
        
        </div>
    </section>
  )
}

export default Project
