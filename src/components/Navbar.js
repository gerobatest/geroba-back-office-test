import React, {useState, useEffect}  from 'react'
import {Link} from 'react-scroll'
import '../style/Navbar.scss'
import './../style/Navbar.scss'
import {FaLinkedinIn, FaUserAlt} from 'react-icons/fa'
import {BsArrowUpCircleFill} from 'react-icons/bs'


const Navbar = () => {

    //ouvre un nouvel onglet 
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    //montre ou cache bouton haut de page 
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
    }, []);
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    //Navbar responsive
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLink = () => {
        setShowLinks(!showLinks)
    }

    return(
        <>
            <div className='header' id="header">
                <div className="nav-content">

                    <nav className={`nav ${showLinks? "show-nav" : "hide-nav"}`}>
                        <div className='logo'>
                            <Link to="/#" onClick={() => window.location.reload()} ><img src="/logo-geroba.avif" className="geroba" alt="logo"></img></Link>
                          
                            <button className='navbar_burger' onClick={handleShowLink}>
                                <span className='burger-bar'></span>
                            </button>

                        </div>

                        <ul className='navcont'>
                            <li>
                                <Link className='items' activeClass='active' to="home" spy={true} smooth={true} duration={1000} offset={-85}>ACCUEIL</Link>   
                            </li>
                            
                            <li>
                                <Link className='items' activeClass='active' to="about" spy={true} smooth={true} duration={1000} offset={-85}>À&nbsp;PROPOS</Link> 
                            </li>
                            
                            <li>
                                <Link className='items' activeClass='active' to="fonctions" spy={true}  smooth={true} duration={1000} offset={-85}>FONCTIONS</Link> 
                            </li>

                            <li>
                                <Link className='items' activeClass='active' to="téléchargement" spy={true} smooth={true} duration={1000} offset={-85}>TÉLÉCHARGEMENT</Link> 
                            </li>

                             <li>
                                <Link className='items' activeClass='active' to="demo" spy={true} smooth={true} duration={1000} offset={-55}>DÉMO</Link>
                            </li> 

                            <li>
                                <Link className='items' activeClass='active' to="contact" spy={true} smooth={true} duration={1000} offset={-80}>CONTACT</Link>
                            </li>
                            <li>
                            <Link className='items fill' activeClass='active' to="fill" spy={true} smooth={true} duration={1000} offset={0}>FILL</Link> 
                            </li>
                        </ul>

                        <div className='compte'>
                            <a href="https://www.linkedin.com/company/gds-groupe/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="linkedin"/></a> 
                            <button className="btn-login" onClick={() => openInNewTab('https://www.gerobamaster.fr/login')}><FaUserAlt className="user"/><span className="loginText"> SE CONNECTER</span></button>
                        </div>

                    </nav>
                </div>
        </div>

        {showButton && (
            <Link to="/#" onClick={scrollToTop} className="btn-top">
                <BsArrowUpCircleFill size="32px" color="#F15a22"/>
            </Link>
        )}
      </>
  )

}

export default Navbar;