import React from 'react';
import "./Sidenav.css";

function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav__logo' src='https://www.pngkey.com/png/full/828-8286178_mackey-work-needs-no-elaborate-presentation-or-distracting.png'
        alt=''/>
        <div className='sidenav__button'>
            <div  className='side__button'>
                {/* {icons} */}
                <span>Home</span>
            </div>
        </div>
    </div>
  )
}

export default Sidenav 