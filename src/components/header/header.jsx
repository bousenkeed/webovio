import './header.css';
import logoImage from '../../assets/images/Logo.svg';
import Container from '../container/container';
import { stack as Menu } from 'react-burger-menu';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const showSettings = (event) => {
        event.preventDefault();
        alert('Settings clicked');
    };

    return (
        <div id="outer-container">
            <header className='header'>
                <Container>
                    <div className="header__inner">
                        <a href='#' className='header__logo'>
                            <img src={logoImage} alt="Webovio Logo" />
                        </a>
                        <div
                            id="react-burger-menu-btn"
                            className={`custom-menu-button ${menuOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                        >
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </Container>
            </header>
            <Menu
                isOpen={menuOpen}
                onStateChange={handleStateChange}
                pageWrapId="page-wrap"
                outerContainerId="outer-container"
            >
                <a id="home" className="menu-item" href="/" onClick={closeMenu}>Home</a>
                <a id="about" className="menu-item" href="/about" onClick={closeMenu}>About</a>
                <a id="contact" className="menu-item" href="/contact" onClick={closeMenu}>Contact</a>
                <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
    );
}

export default Header;