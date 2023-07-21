import React, {useRef,useState} from 'react';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Skill from './pages/Skill';
import Projects from './pages/Projects';

function App() {

  const [click, setClick] = useState('about');

  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projRef = useRef(null);

  const onPageMove = (page) => {
    switch(page){
      case 'about':
      case 'home':
        aboutRef.current.scrollIntoView({behavior: "smooth"});
        setClick('about');
        break;
      case 'skill':
        skillRef.current.scrollIntoView({behavior: "smooth"});
        setClick('skill');
        break;
      case 'project':
        projRef.current.scrollIntoView({behavior: "smooth"});
        setClick('project');
        break;
      case 'gitHub':
        window.open("https://github.com/shkim9019");
        break;
      default:
        alert('잘못 선택하셨습니다.');
        return;
    }
  }

  return (
    <div className="App">
      <Header click={click} onPageMove={onPageMove} />
      <About ref={aboutRef}/>
      <Skill ref={skillRef}/>
      <Projects ref={projRef} />
    </div>
  );
}

export default App;
