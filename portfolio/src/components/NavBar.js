import { Navbar, Container } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/navIcon1.svg';
import navIcon2 from '../assets/navIcon2.svg';
import navIcon3 from '../assets/navIcon3.svg';

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scalled, seScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUptdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">DevAeterne
                    <img src={'pp.png'} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUptdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/about"className={activeLink === 'about' ? 'active navbar-link':'navbar-link'}onClick={() => onUptdateActiveLink('about')}>About Me</Nav.Link>
                        <Nav.Link href="/projects"className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'}onClick={() => onUptdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="/articles"className={activeLink === 'articles' ? 'active navbar-link':'navbar-link'}onClick={() => onUptdateActiveLink('articles')}>Articles</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={'navIcon1'} alt="Github"/></a>
                            <a href='#'><img src={'navIcon2'} alt="Instagram"/></a>
                            <a href='#'><img src={'navIcon3'} alt="Medium"/></a>
                            <a href='#'><img src={'navIcon4'} alt="Linkedin"/></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}