import React, { Fragment } from 'react';

const Sidebar = props => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Sidebar;