import type { MouseEvent } from 'react';

const Navbar = () => {
    // Prevent default behavior to control the page reload
    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = url;
        }, 0); 
    };

    return (
        <div className="top-container">
            <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">shrimpware.net</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav w-100">
                            {/* <li className="nav-item">
                                <a href="/" className="nav-link" onClick={(e) => handleLinkClick(e, "/")}>Home</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
