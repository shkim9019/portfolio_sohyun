import React, {useRef} from 'react';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Skill from './pages/Skill';
import Projects from './pages/Projects';

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projRef = useRef(null);
  const etcRef = useRef(null); 

  const onPageMove = (page) => {
    console.log(page)
    switch(page){
      case 'about':
      case 'home':
        aboutRef.current.scrollIntoView({behavior: "smooth"})
        break;
      case 'skill':
        skillRef.current.scrollIntoView({behavior: "smooth"})
        break;
      case 'project':
        projRef.current.scrollIntoView({behavior: "smooth"})
        break;
      case 'etc':
        etcRef.current.scrollIntoView({behavior: "smooth"})
        break;
      default:
        alert('잘못 선택하셨습니다.');
        return;
    }
  }

  return (
    <div className="App">
      <Header onPageMove={onPageMove} />
      <About ref={aboutRef}/>
      <Skill ref={skillRef}/>
      <Projects ref={projRef} />
    </div>
  );
}

export default App;
