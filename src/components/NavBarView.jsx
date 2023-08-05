import React from 'react'
import '../App.css';

///////////////////////////////////////////////////
//  NAVIGATION BAR COMPONENT
///////////////////////////////////////////////////

const NavBarView = () => {
    return (
        <header>
            <div className='navbar navbar-dark bg-navbar-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <h2 >📃🏡<strong className='text-white'> Honey Do List</strong></h2>
                    {/* **** Link to The Root of the Site ******** */}
                        <a 
                            className='btn btn-sm round-btn bg-nav-button'
                            href='/' >
                            <strong className='text-white'>🏡 Home</strong>
                        </a>
                </div>
            </div>
        </header>
    )
}

export default NavBarView;