import { React } from "react";
import { Link } from "react-router-dom";
import "../CSS/Nav.css"

const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="blg">✧ℬ𝓁ℴℊℬ𝒾𝓏✧</div>
            </div>
            <div className="lst">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/posts">POSTS</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav;
