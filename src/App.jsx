/* eslint-disable react/no-unescaped-entities */

import './App.css'
import 'boxicons/css/boxicons.min.css';
import Contact from './Contact/Contact';


function App() {
  

  return (
    <>
    {/* header section */}
    <header className='header'>
      <a href="#" className='logo'>nazmun.nahar</a>
      
      <i className='bx bx-menu' id='menu-btn'></i>
      <nav className='menu-bar'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    {/* home section */}
    <section className='home' id='home'>
      <div className="home-bio">
        <h3 className='font-bold'>This Is</h3>
        <h1 className='font-bold'>Nazmun Nahar</h1>
        <h3 className='font-bold'>I am a <span className='animated-text'>Web Developer</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem, neque et error veniam,<br /> quidem odio magni cum consequatur dolorum debitis perferendis quae ducimus dolorem, placeat a. Fuga, distinctio eligendi!</p>
        <div className="social-media">
        <a href="#"><i className='bx bxl-linkedin'></i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-facebook'></i></a>
        </div>
        <a href="#contact" className='button'>Let's Talk</a>
      </div>
      <div className='profile-pic'>
        <img src="/src/assets/IMG_20220106_201607-fotor-20230702185841.png" alt="" />
      </div>
    </section>
    {/* about section */}
    <section className='about' id='about'>
      <div className="heading">
        <h2>About <span>Me</span></h2>
      </div>
      <div className="about-items">
        <div className="about-resume">
          <h3>Front-End & MERN Stack Developer</h3>
          <a href="#" className='button'>Download Resume</a>
        </div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum reprehenderit animi repellat sit doloribus molestiae, <br /> illo est aliquid. Suscipit doloremque aut atque laudantium esse necessitatibus voluptates possimus nostrum praesentium dolor.</p>
        </div>
      </div>
    </section>

    {/* skills section */}
    <section className="skills" id="skills">
      <div className="heading">
        <h2>My <span>Skills</span></h2>
      </div>
      <div className="skills-items">
        <div className="skill-card">
        <i className='bx bxl-html5' ></i>
        <h3>HTML</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
        </div>
      
        <div className="skill-card">
        <i className='bx bxl-css3' ></i>
        <h3>CSS</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
        </div>
      
      
        <div className="skill-card">
        <i className='bx bxl-javascript' ></i>
        <h3>JavaScript</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
        </div>
      
        <div className="skill-card">
        <i className='bx bxl-nodejs' ></i>
        <h3>Node JS</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
        </div>
     
        <div className="skill-card">
        <i className='bx bxl-react' ></i>
        <h3>React</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
      </div>
        <div className="skill-card">
        <i className='bx bxl-github' ></i>
        <h3>GitHub</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta!</p>
        </div>
      </div>

      
    </section>


    {/* projects section */}
    <section className="projects" id="projects">
      <div className="heading">
        <h2>Completed <span>Projects</span></h2>
      </div>
      <div className="scroll-list">
        <div className="scroll-item">
    <div className="icons">
      <button>
      <i className='bx bx-link' ></i>
      <p className='text-black'>GitHub link <br />(client)</p>
      </button>
      <button>
      <i className='bx bx-link-alt' ></i>
      <p className='text-black'>GitHub link <br />(server)</p>
      </button>
      <button>
      <i className='bx bx-link-external' ></i>
      <p className='text-black'>Live website <br /> link</p>
      </button>
    </div>
        </div>
        <div className="scroll-item">
    <div className="icons">
      <button>
      <i className='bx bx-link' ></i>
      <p className='text-black'>GitHub link <br />(client)</p>
      </button>
      <button>
      <i className='bx bx-link-alt' ></i>
      <p className='text-black'>GitHub link <br />(server)</p>
      </button>
      <button>
      <i className='bx bx-link-external' ></i>
      <p className='text-black'>Live website <br /> link</p>

      </button>
    </div>
        </div>
        <div className="scroll-item">
    <div className="icons">
      <button>
      <i className='bx bx-link' ></i>
      <p className='text-black'>GitHub link <br />(client)</p>
      </button>
      <button>
      <i className='bx bx-link-alt' ></i>
      <p className='text-black'>GitHub link <br />(server)</p>
      </button>
      <button>
      <i className='bx bx-link-external' ></i>
      <p className='text-black'>Live website <br /> link</p>

      </button>
    </div>
        </div>
      </div>
      {/* <div className="projects-details">
        <div className="heading">
          <h2>Projects <span>Details</span></h2>
        </div>
      </div> */}
    </section>

    {/* contact section */}
   
    <Contact></Contact>
    

    {/* footer section */}
      <footer className="footer">
        <hr />
        <p className='text-xl'>Copyrights &copy; 1997 <br />
        All rights reserver by Nazmun Nahar.
        </p>
      </footer>



    {/* scroll reveal section */}
    {/* typing animation section */}
    {/* js script file */}

    </>
  )
}

export default App
