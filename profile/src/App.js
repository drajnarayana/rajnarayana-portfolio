
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Skills  from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
       <Navbar />
       <div id="home"></div>
      <Profile />
       <div id="about"></div>
       <About/>
       <div id="skills"></div>

      <Skills />
      <div id="project"></div>
      <div style={{height:"3vh"}}></div>
      <Project />
      <Contact />
     <Footer/>
     
    </div>
  );
}

export default App;
