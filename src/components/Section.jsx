import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom"
import EachPageWrapper from './eachPage/EachPage'
import MainSection from './mainSection/MainSection'
// import Cart from './section/Cart'
// import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                <Routes>
                    <Route path="/" element={<MainSection />} />
                    <Route path="/product" element={MainSection} exact />
                    <Route path="/product/:id" Component={EachPageWrapper} exact />
                    {/* <Route path="/cart" component={Cart}  exact/> */}
                    {/* <Route path="/payment" component={Payment} exact /> */}
                </Routes>
            </section>
        )
    }
}

export default Section