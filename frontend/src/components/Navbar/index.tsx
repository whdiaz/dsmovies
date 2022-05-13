import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>WHDIAZmovie</h1>
                    <a href="https://github.com/whdiaz" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/whdiaz</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;