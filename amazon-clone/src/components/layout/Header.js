import React from 'react';
import { Link } from 'react-router-dom'; // Use this so that the page doesn't reload the entire page when navigating to different view of the page.

const Header = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
