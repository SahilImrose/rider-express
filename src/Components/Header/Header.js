import React, { useContext } from 'react';
import { Link } from '../../../node_modules/react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div style={{marginBottom:'30px', width:'100vw'}} className="d-flex container div">
            <div className="col-md-5"><h1><span>R</span><span>i</span><span>d</span><span>e</span><span>r</span>  <span>E</span><span>x</span><span>p</span><span>r</span><span>e</span><span>s</span><span>s</span></h1></div>
            <nav className="navbar navbar-expand-lg col-md-7 d-flex p-3"><Link to="/"><h6 class="active">Home</h6></Link><Link to="/location"><h6>Location</h6></Link><Link to="/"><h6>Blog</h6></Link><Link to="/"><h6>Contact</h6></Link><Link to="/login"><button type="button" class="btn btn-danger">Login</button></Link><h6>{loggedInUser.email}</h6></nav>
        </div>
    );
};

export default Header;