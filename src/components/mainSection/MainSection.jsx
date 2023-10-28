import React, { Component, useContext } from "react"
import Item from "./Item.jsx"
import "./mainSection.css"
import { DataContext } from "../dataProvider.jsx";

export class MainSection extends Component {
    static contextType = DataContext;
    render() {
        const { items } = this.context;
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
                            <Item key={el._id} item={el} />
                        ))}
                    </div>
                    {/* <div className="main_section">
                        
                    </div> */}
                </div>
            </div>
        )

    }
}

export default MainSection