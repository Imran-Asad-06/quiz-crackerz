import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
       
           
             <div>
                <nav className='header'>
                <Link className='logo' to='/'>Quiz Hunters</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/content'>Content</Link>
                <Link to='/statistics'>Statistics</Link>
                
            </nav>
            <div>
                
            </div>
                
             </div>
            
           
    );
};

export default Header;