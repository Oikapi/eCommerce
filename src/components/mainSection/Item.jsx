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

            <div className="item">
                <Link to={itemLink}>
                    <img src={this.props.item.img} alt="" />
                    <span>{this.props.item.title}</span>
                    <span>{this.props.item.cost}$</span>
                </Link>
            </div >

        )

    }
}

export default Item