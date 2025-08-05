import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <img src="/images/my.JPG" alt="my" className="profile-img"/>
            <h2>KIRWA MAXWELL</h2>
            <div className="links">
                <Link to ="/">HOME</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </nav>
    );
}
export default Navbar;