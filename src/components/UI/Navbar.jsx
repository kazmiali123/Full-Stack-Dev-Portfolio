export default function Navbar({ links }) {
    return (
        // renders the navbar tabs
        <div id="myNavBar" className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4"><h1>Syed Kazmi</h1></span>
                </a>

                <ul className="nav nav-pills">
                    {links.map((link) => <li key={link.key} className="nav-item">{link}</li>)}
                </ul>
            </header>
        </div>
    );
}



