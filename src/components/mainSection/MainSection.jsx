import React, { Component, useContext } from "react"
import Item from "./Item.jsx"
import "./mainSection.css"
import { DataContext } from "../dataProvider.jsx";

export class MainSection extends Component {
    static contextType = DataContext;
    render() {
        const { items } = this.context;
        console.log(items)
        console.log("HEllo")
        return (
            <div className="container">
                <div className="main_section">
                    {items.map(el => (
                        <Item key={el._id} item={el} />
                    ))}
                </div>
            </div>
        )

    }
}

export default MainSection