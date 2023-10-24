import logo from './../../img/Participle+.svg';
import './header.css'
import { FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';


function Header() {
    const project = 'Store';
    let [cardOpen, setCardOpen] = useState(false);
    console.log(cardOpen);
    console.log(setCardOpen);
    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <img src="./logo.svg" alt="" />
                </div>
                <nav>
                    <ul>
                        <li>JEWELRY</li>
                        <li>CAMPAIGNS</li>
                        <li>PRESS</li>
                        <li>SEARCH</li>
                        <li>CART</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;