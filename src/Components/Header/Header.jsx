import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="navbar-name">Knowledge Cafe</span>
                </div>
                <div className="navbar-right">
                    <img src={'https://img.freepik.com/free-photo/newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt-smiling-broadly-assuring-good-quality-product-gray-wall_176420-25024.jpg?w=740&t=st=1686585615~exp=1686586215~hmac=213922e1a0acace56005fee403ea65ab156074df8f5229d2bfa993cf04553425'} alt="Author Logo" className="navbar-author-image" />
                </div>
            </nav>

        </div>
    );
};

export default Header;