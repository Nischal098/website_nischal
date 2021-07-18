import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mountain Soccer Club</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Lessons">Lessons</Link>
                <Link to="/Community">Community</Link>
                <Link to="/Book">Book</Link>
                <Link to="/Help">Help</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;