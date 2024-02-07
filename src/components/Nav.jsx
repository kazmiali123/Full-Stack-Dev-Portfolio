// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop

    // handles the tab-change by removing the 'active' from classlist of all tablinks and adding it to the clicked event
    const handleTabChange = (e) => {
        const { target } = e;

        document.getElementById('firstTab').classList.remove('active');
        document.getElementById('secondTab').classList.remove('active');
        document.getElementById('thirdTab').classList.remove('active');
        document.getElementById('fourthTab').classList.remove('active');

        let element = document.getElementById(target.id);
        element.classList.add('active');
    }

    return (
        // render navbar component by passing the react-links/endpoints to Navbar file, while handling onClick behaviour at parent level
        <Navbar
            links={[
                <Link key={1} id="firstTab" className="nav-link active" to="/" onClick={handleTabChange}>
                    About Me
                </Link>,
                <Link key={2} id="secondTab" className="nav-link" to="/portfolio" onClick={handleTabChange}>
                    Portfolio
                </Link>,
                <Link key={3} id="thirdTab" className="nav-link" to="/contact" onClick={handleTabChange}>
                    Contact
                </Link>,
                <Link key={4} id="fourthTab" className="nav-link" to="/resume" onClick={handleTabChange}>
                    Resume
                </Link>,
            ]}
        />
    );
}   