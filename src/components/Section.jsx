import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom"
import EachPageWrapper from './eachPage/EachPage'
import MainSection from './mainSection/MainSection'
import Cart from './cart/Cart'
import Values from './values/Values'
import About from "./about/About"
import Stocklist from './Stocklist/Stocklist'
import ContactUs from './ContactUs/ContactUs'
// import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                <Routes>
                    <Route path="/" element={<MainSection />} />
                    <Route path="/product" element={MainSection} exact />
                    <Route path="/product/:id" Component={EachPageWrapper} exact />
                    <Route path="/cart" element={<Cart />} exact />
                    <Route path="/values" Component={Values} exact />
                    <Route path="/about" Component={About} exact />
                    <Route path="/stocklist" Component={Stocklist} exact />
                    <Route path="contacts" Component={ContactUs} exact />

                    {/* <Route path="/payment" component={Payment} exact /> */}
                </Routes>
            </section>
        )
    }
}

export default Section