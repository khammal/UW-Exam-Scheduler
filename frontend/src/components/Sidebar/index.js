import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faCalendar, faEnvelope, faClose, faBars, faHistory } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/UW-Scheduler-Logo.png"
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    const closeNav = () => {
        setShowNav(false);
    };

    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeClassName="active" to="/" onClick={closeNav}>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="search-link" to="/search" onClick={closeNav}>
                    <FontAwesomeIcon icon={faSearch} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="calendar-link" to="/calendar" onClick={closeNav}>
                    <FontAwesomeIcon icon={faCalendar} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="history-link" to="/historic" onClick={closeNav}>
                    <FontAwesomeIcon icon={faHistory} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact" onClick={closeNav}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
                <a href="https://uwaterloo.ca/the-centre/academics/final-examination-schedule" className="button-link" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    VIEW EXAMS
                </a>
                <FontAwesomeIcon icon={faClose} size="3x" className="close-icon" onClick={closeNav} />
            </nav>
            <FontAwesomeIcon onClick={() => setShowNav(!showNav)} icon={faBars} size="3x" className="hamburger-icon" />
        </div>
    )
}

export default Sidebar
