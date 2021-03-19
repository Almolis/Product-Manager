import {Link} from "react-router-dom"
 
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Product Manager</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/products"> Products </Link>
                <Link to="/signup"> Sign Up </Link>
                <Link to="/login"> Login </Link>
            </div>
        </nav>
    )
}

export default Navbar


