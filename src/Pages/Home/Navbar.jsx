import { useState, useEffect} from "react"; 
import {Link} from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState(false); 

    const toggleNav = () => {
        setNavActive(!navActive)
    };

    const closeMenu = () => {
        setNavActive(false)
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu; 
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}> 
            <div>
                <img 
                    height={100}
                    width={100}
                    src="./img/leaf_favicon.svg" 
                    alt="Logo" />
            </div>
            <a 
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}> 
                {/* Hamburger menu lines */}
                <span className="nav__hamburger__line">
                </span>
                <span className="nav__hamburger__line">
                </span>
                <span className="nav__hamburger__line">
                </span>                
            </a> 

            <div className={`navbar--items ${navActive ?
                "active" : ""}`}>
               <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
               </ul>

            </div>
        </nav>
    )
}

export default Navbar; 