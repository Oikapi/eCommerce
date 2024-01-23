import React, { Component } from "react"
import "./item.css"
import { Link } from 'react-router-dom'


const Item = ({ el }) => {
    const { _id, img, title, cost } = el
    const itemLink = `/product/${_id}`;
    return (
        <div className="item">
            <Link to={itemLink}>
                <img src={img} alt="" />
                <div className="item_text">
                    <span>{title}</span>
                    <span>{cost}$</span>
                </div>

            </Link>
        </div >
    )
}



export default Item