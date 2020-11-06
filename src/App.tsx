import React from 'react';

import './App.css';

import ProjectsMenu from './components/projects-menu/Projects-menu';

const App = () => (
  <div className='projects-container'>
    <p className='projects-header'>Welcome to your projects board</p>
    <ProjectsMenu />
  </div>
);

export default App;
