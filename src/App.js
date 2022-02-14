
import './App.css';
import AboutMe from './Components/AboutMe';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import ProjectsGrid from './Components/ProjectsGrid';
function App() {
  return (
    <div className="App">
      <Profile/>
      <div className='f-heading'>
        <h1>Sobre mí</h1>
        <p>No sé qué poner aquí</p>
      
      </div>
      <AboutMe/>
      <div className='s-heading'>
        <h1>Proyectos</h1>
        <p>No sé qué poner aquí</p>
      
      </div>
      <ProjectsGrid/>
    </div>
  );
}

export default App;
