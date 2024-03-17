import { useState } from 'react';
import './App.css';
import Animation from './animate';
import ToggleSwitch from './switch/switch';

function App() {
  const [hidden, setHidden] = useState(true)
  const [work, setWork] = useState(true)
  const [contact, setContact] = useState(true)
  return (
    <div className="app">
      <Animation />
      <div className='main-conatiner'>
        <div className='text-conatiner'>
          <a href='www.facebook.com' className='white-text' onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)} >
            {hidden ? "Hey." : "About"}
          </a>
          <a href='www.facebook.com' className='iam-section' onMouseEnter={() => setWork(false)} onMouseLeave={() => setWork(true)} >
            {work ? "I am" : "Projects"}
          </a>
          <a href='www.facebook.com' className='name-section' onMouseEnter={() => setContact(false)} onMouseLeave={() => setContact(true)}>
            {contact ? "Praveen" : "Contact"}
          </a>
        </div>
        <img className="img-" src='' alt='' />
        <div className='theme'>
          <h1>
            Light
          </h1>
          <ToggleSwitch className="switch" />
          <h1>
            Dark
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
