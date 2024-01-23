import { Component } from "react";
import "./footer.css"
import { Link } from "react-router-dom"


export class Footer extends Component {


    render() {
        return (
            <div className="container">
                <div className="footer-container">
                    <ul>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/values">VALUES</Link></li>
                        <li><Link to="/contacts">CONTACT</Link></li>
                        <li><Link to="">POLICIES</Link></li>
                        <li><Link to="./stocklist">STOCKLIST</Link></li>
                        <li><Link to="">INSTAGRAM</Link></li>
                    </ul>
                    <p className="copy_rights">© 2020 all rights reserved. </p>
                </div>

            </div>
        )
    }
}

export default Footer