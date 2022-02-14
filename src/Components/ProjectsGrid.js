import React from 'react'
import ProjectCardItem from './ProjectCardItem'
import image1 from '../images/unsplash-photo-1.jpg';
import image2 from '../images/registro.png';
import image3 from '../images/unsplash-photo-3.jpg';
const ProjectsGrid=()=> {

    const initialStateProjects=[{
        id:1, 
        title: 'Gifind',
        img: image1,
        link: 'https://github.com/derekcantillo/Gifind ',
        description: 'Proyecto realizado con ReactJS'    
    },
    {
        id:2, 
        title: 'Deliveries - App',
        img: image2,
        link: 'https://github.com/derekcantillo/DeliveriesFrontend ',
        description: 'Realizado con ReactJS, Bootstrap Y Java en SpringTool'    
    },
    {
        id:3, 
        title: 'Compra y Venta',
        img: image3,
        link: '# ',
        description: 'Aplicación de escritorio con Java'    
    }]
    const projects=initialStateProjects;
  return (
    <div id='projects'>
        
      
        <div className='row'>
            {projects.map((project)=>{
                return(
                    <div className='col'>
                <ProjectCardItem
                   key={project.id}
                   project={project}
                >

                </ProjectCardItem>

            </div>
                )
            })}
            

        </div>
    </div>
  )
}

export default ProjectsGrid