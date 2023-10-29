import logo from './../../img/Participle+.svg';
import './header.css'
import { FaShoppingBag } from "react-icons/fa";
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'rsuite';
import ModalCartWrapped from "./../modalCart/ModalCart.jsx"

export class Header extends Component {
    render() {
        const project = 'Store';
        return (
            <header>
                <div className='container'>
                    <Link to='/'>
                        <div className='logo'>
                            <img src="/logo.svg" alt="" />
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>JEWELRY</li>
                            <li>CAMPAIGNS</li>
                            <li>PRESS</li>
                            <li>SEARCH</li>
                            <li > <ModalCartWrapped />

                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}


export default Header;