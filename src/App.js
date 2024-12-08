import logo from './logo.svg';
import data from './data.json';
import  Snowfall  from 'react-snowfall'; // Import Snowfall component
import './App.css';
import React from 'react';
import aboutMeImage from './aboutme.jpeg';
import logofa from './favicon.ico';
import { SocialIcon } from 'react-social-icons';

function App() {
  const scrollToBoxes = () => {
    const boxSection = document.querySelector('.box-container');
    if (boxSection) {
      boxSection.scrollIntoView()
    }
  };
  const scrollToBoxest = () => {
    const boxSection = document.querySelector('.Aboutpart');
    if (boxSection) {
      boxSection.scrollIntoView()
    }
  };
  const scrollToBoxesth = () => {
    const boxSection = document.querySelector('.Contactme');
    if (boxSection) {
      boxSection.scrollIntoView()
    }
  };

  
  return (
    <div className="background-container">
      <div style={{ height: 2000, width: 2500, background: '#282c34', position: 'fixed' }}>
    <Snowfall style={{height: 2000, width: 2500}} />
    </div>,
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logofa} alt="Logo" className="navbar-logo-img" />
        </div>
        <ul className="navbar-links">
          <li onClick={scrollToBoxes}>Skills</li>
          <li onClick={scrollToBoxest}>About Me</li>
          <li onClick={scrollToBoxesth}>Contact</li>
        </ul>
      </nav>
      {/* Main content */}
      <div className="App">
        <div className="navigation"></div>
        <div className="fullpage">
          <h1 className="title">{data.title}</h1>
        </div>
        <div>
          <h2>{data.subtitle}</h2>
        </div>
        <div>
          {Object.keys(data.links).map((key) => (
            <SocialIcon url={data.links[key]} className="Logo" key={key} />
          ))}
        </div>
        <div className="fullpage">
          <h3>{data.sections[0].title}</h3>
          <p>{data.sections[0].items[0].content}</p>
          <p>Front end : {data.sections[0].items[0].Frontend}</p>
        </div>
        {/* Scroll Button */}
        <button className="scroll-button" onClick={scrollToBoxes}>
          ⬇
        </button>
        {/* Boxes Section */}
        <div className="box-title">

          <h1>{data.sections[1].title}</h1>
        </div>
        <div className="box-container">
          {[
          { name: 'Front end', logo: 'https://www.audero.it/blog/wp-content/uploads/2014/09/front-end-stack.png' },
          { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
          { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
          { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg' },
          { name: 'C', logo: 'https://img.icons8.com/?size=512&id=40670&format=png' },
          { name: 'Ruby', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg'  },
          { name: 'Dart', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg' },
          { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
          { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
          { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg' },
          { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/440px-Google-flutter-logo.svg.png' },
          ].map((item) => (
            <div className="box" key={item.name}>
            <img src={item.logo} alt={`${item.name} logo`} className="box-logo"  />
            <h3>100%</h3>
            <div className="progress-bar">
            <div className="progress" style={{ width: `${item.skillLevel}%` }}></div>
            </div>
            <span>{item.name}</span>
            </div>
            ))}
        </div>

        <button className="scroll-button-2" onClick={scrollToBoxest}>
          ⬇
        </button>
        <div className="Aboutpart">
          <div className="about-content">
            <div className="about-text">
              <h1>{data.sections[0].title}</h1>
              <h3>{data.sections[0].items[0].content}</h3>
              <h3>Front end : {data.sections[0].items[0].Frontend}</h3>
              <h3>{data.sections[0].items[1].content}</h3>
              <h3>{data.sections[0].items[2].content}</h3>
              <h3>{data.sections[0].items[3].content}</h3>
              <h3>{data.sections[0].items[4].content}</h3>
              <h3>{data.sections[0].items[5].content}</h3>
              <SocialIcon url={data.sections[0].items[1].Cs50xlink} className="Logo" />
            </div>
            <img 
            src={aboutMeImage} 
            alt="About Me" 
            className="about-image"
            />
          </div>
        </div>

        <button className="scroll-button-2" onClick={scrollToBoxesth}>
          ⬇
        </button>
        <div className="Contactme">
          <h1>{data.sections[2].title}</h1>
          <h3>Email : {data.sections[2].items[0].Email}</h3>
          <h3>Phone no : {data.sections[2].items[0].Phone}</h3>
        </div>
        <h3>©2024 Farson Ca, Inc. All rights reserved.</h3>
      </div>
    </div>
  );
}

export default App;
