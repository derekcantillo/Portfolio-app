import React from 'react'
import Typical from 'react-typical'
import '../styles/Profile.css'
const Profile=()=> {
    const steps = [
        '#JuniorDeveloper', 1000,
        '#Student', 1000,
        '#SystemsEngineer',1000,
        '#WebDesign', 4000,
      
      ];
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/derek-cantillo-34bb81213/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/derekcantillo' target="_blank">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.instagram.com/dereskeree/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                     
                    </div>
                    
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hola Mundo, soy <span className='highlighted-text'>Derek</span>
                    </span>
 
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "} <h1> {" "}
                        <Typical loop={Infinity} 
                        steps={steps}></Typical></h1>
                        <span className='profile-role-tagline'>Abierto al mundo del desarrollo!</span>
                    </span>

                </div>
                <div className='profile-options'>

                    <button className='btn primary-btn'>{" "}Contáctame{" "}</button>
                    <a href="cvderekweb.pdf" download="Hoja de Vida Derek.pdf">
                    <i className="bi bi-download"></i>
                        <button className='btn highlighted-btn'>
                        Currículum</button></a>
                    
                </div>

                
            </div>
            <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                    

                </div>
        </div>
        
    </div>
  )
}

export default Profile