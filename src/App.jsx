/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState} from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import Contact from './Contact/Contact';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Modal from './Modal/Modal';
import resumePDF from './assets/Nazmun_Nahar_MERN_Stack_Developer_resume.pdf';
import Modal2 from './Modal2/Modal2';
import Modal3 from './Modal3/Modal3';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const openModal2 = () => {
    setIsOpen2(true);
  };
  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };
  const closeModal3 = () => {
    setIsOpen3(false);
  };
  useEffect(() => {
    // Action Menu Button
    let menuBtn = document.querySelector('#menu-btn');
    let menuBar = document.querySelector('.menu-bar');

    menuBtn.onclick = () => {
      menuBtn.classList.toggle('bx-x');
      menuBar.classList.toggle('active');
    };

    // Let's remove the menu-bar on scroll
    window.onscroll = () => {
      menuBtn.classList.remove('bx-x');
      menuBar.classList.remove('active');
    };
  }, []);

  useEffect(() => {
    const scrollReveal = ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2000,
      delay: 200
    });

    scrollReveal.reveal('.home-bio h1, .about-resume', { origin: 'left' });
    scrollReveal.reveal('.home-bio p', { origin: 'right' });
    scrollReveal.reveal('.profile-pic, .about-items, .skills-items, .scroll-list, .form', { origin: 'bottom' });
  }, []);

  useEffect(() => {
    const typedText = new Typed('.animated-text', {
      strings: ['Web Developer', 'MERN Stack Developer', 'Front End Developer'],
      backSpeed: 100,
      typeSpeed: 100,
      backDelay: 600,
      loop: true
    });
  
 
    return () => {
      typedText.destroy();
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.target = '_blank';
    link.download = 'resume.pdf';
    link.click();
  };
  

  return (
    <>
    {/* header section */}
    <header className='header'>
      <a href="#" className='logo'>Nazmun Nahar</a>
      
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
        <p>Passionate web developer creating user-friendly websites, <br /> proficient in front-end technologies and experienced in React <br /> and Node.js. Committed to delivering high-quality solutions.</p>
        <div className="social-media">
        <a href="https://www.linkedin.com/in/nazmunnahar-nijhum-b81711287/" target="_blank" rel="noopener noreferrer">
  <i className="bx bxl-linkedin"></i>
</a>
        <a href="https://github.com/nazmunnaharnijhum"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
        <a href="https://www.facebook.com/nijhum.982?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
        </div>
        <a href="#contact" className='button'>Let's Talk</a>
      </div>
      <div className='profile-pic'>
        <img className='ml-16' src="https://i.ibb.co/LhvxFTp/IMG-20220106-201607-fotor-20230702185841.png" alt="" />
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
          <a href="" className='button' onClick={handleDownloadResume}>Download Resume</a>
        </div>
        <div className="about-text">
          <p>I am a Full Stack Web Developer. <br />
          <br />
I love the world of web development and thrive on the ever-evolving <br /> technologies that emerge today. As a passionate MERN Stack developer, <br /> I am continuously seeking new opportunities to grow and expand my skill set. <br /> With a strong focus on innovative solutions and staying up-to-date with <br /> industry trends, I am eager to contribute my expertise to collaborate <br /> with like-minded professionals in creating captivating web experiences <br /> that leave a lasting impact.</p>
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
        <p>HTML is the standard markup language for creating web pages and web applications.</p>
        </div>
      
        <div className="skill-card">
        <i className='bx bxl-css3' ></i>
        <h3>CSS</h3>
        <p>CSS is used for styling and visually enhancing web pages and applications.</p>
        </div>
      
      
        <div className="skill-card">
        <i className='bx bxl-javascript' ></i>
        <h3>JavaScript</h3>
        <p>
JavaScript adds interactivity and dynamic behavior to web pages.</p>
        </div>
      
        <div className="skill-card">
        <i className='bx bxl-nodejs' ></i>
        <h3>Node JS</h3>
        <p>Node.js is a JavaScript runtime environment that allows server-side execution of JavaScript code.</p>
        </div>
     
        <div className="skill-card">
        <i className='bx bxl-react' ></i>
        <h3>React</h3>
        <p>React is a JavaScript library for building user interfaces, used for creating interactive and dynamic web applications.</p>
      </div>
        <div className="skill-card">
        <i className='bx bxl-github' ></i>
        <h3>GitHub</h3>
        <p>GitHub is a web-based platform for version control and collaboration, primarily used for hosting and managing code repositories.</p>
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
      <a href="https://github.com/nazmunnaharnijhum/summer-camp-client" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Client Site</p>
      </button>
      <button>
      <a href="https://github.com/nazmunnaharnijhum/summer-camp-server" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Server Site</p>
      </button>
      <button>
      <a href="https://summer-camp-413e8.web.app/" target="_blank" rel="noopener noreferrer">
      <i className='bx bx-link-external' ></i>
      </a>
      <p className='text-black'>Live Link</p>
      </button>
      <button onClick={openModal}>
      <i className='bx bx-detail' ></i>
      <p className='text-black'>Details</p>
      </button>
      <Modal
      isOpen={isOpen}
      onClose={closeModal}
      ></Modal>


    </div>
        </div>
        <div className="scroll-item">
    <div className="icons">
      <button>
      <a href="https://github.com/nazmunnaharnijhum/toy-marketplace-client" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Client Site</p>
      </button>
      <button>
      <a href="https://github.com/nazmunnaharnijhum/toy-marketplace-server" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Server Site</p>
      </button>
      <button>
      <a href="https://toy-marketplace-assignme-fd894.web.app/" target="_blank" rel="noopener noreferrer" >
      <i className='bx bx-link-external' ></i>
      </a>
      <p className='text-black'>Live Link</p>
      </button>
      <button onClick={openModal2}>
      <i className='bx bx-detail' ></i>
      <p className='text-black'>Details</p>
      </button>
      <Modal2
      isOpen={isOpen2}
      onClose={closeModal2}
      ></Modal2>
    </div>
        </div>
        <div className="scroll-item">
    <div className="icons">
      <button>
      <a href="https://github.com/nazmunnaharnijhum/chef-recipe-client" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Client Site</p>
      </button>
      <button>
      <a href="https://github.com/nazmunnaharnijhum/chef-recipe-server" target="_blank" rel="noopener noreferrer">
      <i className='bx bxl-github' ></i>
      </a>
      <p className='text-black'>Server Site</p>
      </button>
      <button>
      <a href="https://chef-recipe-b12eb.web.app/"  target="_blank" rel="noopener noreferrer">
      <i className='bx bx-link-external' ></i>
      </a>
      <p className='text-black'>Live Link</p>
      </button>
      <button onClick={openModal3}>
      <i className='bx bx-detail' ></i>
      <p className='text-black'>Details</p>
      </button>
      <Modal3
      isOpen={isOpen3}
      onClose={closeModal3}
      ></Modal3>
    </div>
        </div>
      </div>
      
    </section>

    {/* contact section */}
   
    <Contact></Contact>
    

    {/* footer section */}
      <footer className="footer">
        <hr />
        <p className='text-xl'>Copyrights &copy; 2023 <br />
        All rights are reserved by Nazmun Nahar.
        </p>
      </footer>


    </>
  )
}

export default App
