import React, { useState, useEffect } from 'react';
import './Sidebar.scss';

const Sidebar = props => {
  const examplePhotoCtgy = ['Weddings', 'Corporate', 'Portrait'];
  const exampleVideoCtgy = ['Weddings', 'Dance'];


  const [isExpanded, setIsExpanded] = useState(false);

  const expandOptions = (options) => {
    return options.map((option, i) => {
      return (
        <div key={i}>{option}</div>
      )
    })
  }

  // onClick={setIsExpanded(!isExpanded)}

  return (
    <nav className='sidebar'>
      <header className='header'>
        <h1>VISUALS BY DAVID HO</h1>
      </header>
      <section className='section'>
        <button >Photos</button>
        {
          isExpanded
          ? expandOptions(examplePhotoCtgy)
          : null
        }
        <div>Videos</div>
      </section>
      <footer className='footer'>
        <p>Contact</p>
      </footer>
    </nav>
  )
}

export default Sidebar;