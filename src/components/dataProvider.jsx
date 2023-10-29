import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        items: [
            {
                _id: 1,
                img: "./img/dress1.png",
                title: "Flowers on Sleeves Dress ",
                cost: "115"
            },
            {
                _id: 2,
                img: "./img/dress2.png",
                title: "Cat-Eye Resin Sunglasses in Clear",
                cost: "11"
            },
            {
                _id: 3,
                img: "./img/dress3.png",
                title: "Notte Dot Dress",
                cost: "123"
            },
            {
                _id: 4,
                img: "./img/dress4.png",
                title: "Marigold Trouser",
                cost: "89"
            },
            {
                _id: 5,
                img: "./img/dress5.png",
                title: "Flowers on Sleeves Dress ",
                cost: "222"
            },
            {
                _id: 6,
                img: "./img/dress6.png",
                title: "Flowers on Sleeves Dress ",
                cost: "189"
            },
            {
                _id: 7,
                img: "./img/dress7.png",
                title: "Dress for  my Love ",
                cost: "30"
            }
        ],

        cart: []
    }

    addCart = (id) => {
        const { cart, items } = this.state
        const check = cart.every((item) => {
            return item._id !== id
        })
        if (check) {
            const item = items.filter((item) => {
                return id === item._id
            })
            this.setState({ cart: [...cart, ...item] })
        } else {
            alert('Already added')
        }

    }

    removeFromCart = (id) => {
        const { cart } = this.state;
        const updatedCart = cart.filter(item => item._id !== id);
        this.setState({ cart: updatedCart });
    };
    render() {
        const { items, cart } = this.state;
        const { addCart, removeFromCart } = this
        return (
            <DataContext.Provider
                value={{ items, cart, addCart, removeFromCart }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}




