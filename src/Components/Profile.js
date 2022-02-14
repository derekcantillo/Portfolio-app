import React from 'react'
import Typical from 'react-typical'
import '../styles/Profile.css'
import Header from './Header';
const Profile=()=> {
    const steps = [
        '<JuniorDeveloper/>', 1000,
        '<SystemsEngineerStudent/>',1000,
        '<OpenToWork/>',1000,
        '<WebDesign/>', 4000,
      
      ];
  return (
    

    <div id='profile'>
        <Header/>
        <div className='row name'>
                <div className='col-10 col-lg-10 col-sm-12 text-box'>
                <div className='profile-details-name'>
                    <h2 className='primary-text'>
                      
                        Hola Mundo, soy <span >Derek</span>
                    </h2>
 
                </div>  
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "} <h1> {" "}
                        <Typical loop={Infinity} 
                        steps={steps}></Typical></h1>
                        <span className='profile-role-tagline'>Abierto al mundo del desarrollo!</span>
                        <h6>(Website en construcción)</h6>
                    </span>

                </div>
                <div className='header-btns '>

                    <button className='cv-btn1'>{" "}Contáctame{" "}</button>
                    <a href="hvderekcantilloweb.pdf"  download="Hoja de Vida Derek.pdf">
                   
                        <button className='cv-btn'>

                        Currículum</button></a>
                    
                </div>
                </div>
                <div className='col-lg-2 col-sm-12'>
                <div className=' profile-picture '>
                    <div className='profile-picture-background'></div>
                    

                </div> 
                </div>
               
        </div>
       <div className='arrow'>

       </div>
    </div>

  )
}

export default Profile