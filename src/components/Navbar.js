import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>KIRWA MARK</h2>
            <div className="links">
                <Link to ="/">HOME</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </nav>
    );
}
export default Navbar;