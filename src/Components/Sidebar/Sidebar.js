import React from 'react';
import './Sidebar.scss';
import List from './List'

const Sidebar = props => {
  const examplePhotoCtgy = ['Weddings', 'Corporate', 'Portrait'];
  const exampleVideoCtgy = ['Weddings', 'Dance'];





  return (
    <nav className='sidebar'>
      <header className='header'>
        <h1>VISUALS BY DAVID HO</h1>
      </header>
      <section className='section'>
        <List title="Photo" options={examplePhotoCtgy} />
        <List title="Video" options={exampleVideoCtgy} />
      </section>
      <footer className='footer'>
        <a href="#">Contact</a>
      </footer>
    </nav>
  )
}

export default Sidebar;