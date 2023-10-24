import React, { Component } from "react"
import "./item.css"
import { Link } from 'react-router-dom'

export class Item extends Component {
    render() {
        const { _id, img, title, cost } = this.props.item;
        console.log(this.props.item)
        const itemLink = `/product/${_id}`; // Генерируем URL для товара
        console.log(itemLink)
        return (
            <Link to={itemLink}>
                <div className="item">
                    <img src={this.props.item.img} alt="" />
                    <span>{this.props.item.title}</span>
                    <b>{this.props.item.cost}$</b>
                </div>
            </Link>
        )

    }
}

export default Item