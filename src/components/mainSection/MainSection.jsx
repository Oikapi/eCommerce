import React, { Component, useContext } from "react"
import Item from "./Item.jsx"
import "./mainSection.css"
import { useSelector } from "react-redux";



const MainSection = () => {
    const items = useSelector(state => state.marketItems)
    return (
        <div className="container">
            <div className="main_section">
                <div className="left_nav">
                    <ul>
                        <li>Collection</li>
                        <li>Size</li>
                    </ul>
                </div>
                <div className="examples">
                    {items.map(el => (
                        <Item key={el._id} el={el} />
                    ))}
                </div>

                {/* <div className="main_section">
                    
                </div> */}
            </div>
        </div >
    )
}

export default MainSection