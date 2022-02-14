import React from 'react'

const ProjectCardItem=(props)=> {
  return (
<div className='s-box card'>
    
   <div className='s-b-img'>
       <img className='card-img-top' src={props.project.img}/>

   </div>
   <div className='card-title'>
    {props.project.title}
   </div>
   <div className='s-b-text'>
       <p>{props.project.description}</p>
       <a href={props.project.link} className='card-cv-btn'> Github</a>
      

   </div>
</div>
    
  )
}

export default ProjectCardItem