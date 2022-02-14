import React from 'react';
import image1 from '../images/otra-2.jpg'
const AboutMe=()=>{
    return(
        <div id='aboutme'>
            <div className='features-model'>
            <img src={image1}></img>
            </div>
            <div className='features-text'>
                <h2>Sobre mí</h2>
                <h3>Hola<span>, me presento</span></h3> 
                <p>Soy una persona honesta, eficaz, dispuesto a trabajar siempre a favor
                    de la misión y visión de la empresa; capaz de adaptarme en
                    situaciones diversas que requieran sacar mis habilidades potenciales;
                    encontrando así, soluciones óptimas. Estudiante de Ingeniería de
                    Sistemas, experiencia con proyectos y/o aplicativos universitarios con
                    exigencias considerables; destacando siempre por el resultado de
                    estos. Capacidad para analizar problemas y encontrar una solución
                    de estos, siendo eficiente a la hora de realizar los mismos.
                </p>   
            </div>
        </div>
    )
}

export default AboutMe