/* eslint-disable react/no-unescaped-entities */

import './App.css'
import 'boxicons/css/boxicons.min.css';


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
        <a href="#contact" className='btn'>Let's Talk</a>
      </div>
      <div className='profile-pic'>
        <img src="/src/assets/IMG_20220106_201607-fotor-20230702185841.png" alt="" />
      </div>
    </section>
    {/* about section */}

    {/* skills section */}

    {/* projects section */}

    {/* contact section */}

    {/* footer section */}




    {/* scroll reveal section */}
    {/* typing animation section */}
    {/* js script file */}

    </>
  )
}

export default App
