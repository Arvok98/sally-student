import React from 'react';
import NavBar from './components/NavBar'
import Intro from './components/intro.js'
import Edu from './components/education.js'
import Works from './components/works.js'
import Contact from './components/contact-section.js'


function App() {
  return (
    <main className='App'>
      <NavBar />
      <Intro />
      <Edu />
      <Works />
      <Contact />

    </main>
  );
}

export default App;