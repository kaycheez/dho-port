import React, { Fragment } from 'react';
import './Sidebar.scss';

const Sidebar = props => {
  return (
    <nav className='sidebar'>
      <header>
        <h1>VISUAL BY DAVID HO</h1>
      </header>
      <section>
        <h2>Photos</h2>
        <h2>Videos</h2>
      </section>
      <footer>
        <p>Contact</p>
      </footer>
    </nav>
  )
}

export default Sidebar;