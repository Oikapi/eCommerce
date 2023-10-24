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
                <div className='header_row'>
                    <div className='header_nav'>
                        <ul>
                            <li>New Arrivals</li>
                            <li>Shop</li>
                            <li>About U</li>
                        </ul>



                    </div>
                    <div className='header_logo'>
                        <img src={logo} alt="hello" />
                    </div>
                    <div className='header_nav'>
                        <ul>
                            <li><span className="lens_icon">
                                Search
                            </span></li>
                            <span>Sign In</span>
                            <li><FaShoppingBag onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop_card_button ${cardOpen && 'active'}`} /></li>
                        </ul>
                        {cardOpen && (
                            < div className="shop_card">
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header >
    );
}


export default Header;