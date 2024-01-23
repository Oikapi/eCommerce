import { Component } from "react";
import "./cart.css"
import { IoMdClose } from "react-icons/io";
import { InputNumber } from 'rsuite';
import { DataContext } from "../dataProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Cart = () => {

    return (
        <div className="cart_container">
            <div className="cart_head">
                <p className="product_head">PRODUCT</p>
                <p className="price_head">PRICE</p>
                <p className="quant_head">QUANTITY</p>
                <p className="total_head">TOTAL</p>
            </div>
            <div className="cart_items_container">
                {
                    cart.map(el => {
                        return <CartItem key={el._id} item={el} cart={cart}
                            addCart={addCart} removeFromCart={removeFromCart} getChange={this.calculateTotalCost} />
                    })}
            </div>
            <div className="cart_footer">
                <div className="sub">Subtotal ${this.state.totalCost}.00 USD</div>
                <div className="footer_buttons">
                    <Link to="/" className="while_button_back"><MdKeyboardArrowLeft className="arrow_left" />Back to shoping</Link>
                    <Link className="black" to="/">CHECK OUT</Link>
                </div>
            </div>
        </div>)
}





class Cart extends Component {
    static contextType = DataContext;
    state = {
        totalCost: 0
    }

    componentDidMount() {
        this.calculateTotalCost()
        console.log(this.state)
    }
    componentDidUpdate(prevProps, prevState) {
        const { cart } = this.context
        const totalCost = cart.reduce((acc, item) => acc + parseFloat(item.cost) * parseFloat(item.count), 0);
        console.log(prevState.totalCost)
        if (prevState.totalCost !== this.state.totalCost) {
            console.log(prevState.totalCost === this.state.totalCost)
            this.calculateTotalCost();
        }
    }
    calculateTotalCost = () => {
        const { cart } = this.context
        const newCost = cart.reduce((acc, item) => acc + parseFloat(item.cost) * parseFloat(item.count), 0);
        this.setState({ totalCost: newCost }, () => console.log(this.state))
        console.log(cart)

    }
    changeProps = () => {
        console.log(this.context)
        const { cart } = this.context
        const totalCost = cart.reduce((acc, item) => acc + parseFloat(item.cost) * parseFloat(item.count), 0);
        this.setState({ totalCost: totalCost })
    }
    render() {
        const { cart, addCart, removeFromCart } = this.context
        console.log(cart)
        // const totalCost = cart.reduce((acc, item) => acc + parseFloat(item.cost) * parseFloat(item.count), 0);
        return (
            <div className="cart_container">
                <div className="cart_head">
                    <p className="product_head">PRODUCT</p>
                    <p className="price_head">PRICE</p>
                    <p className="quant_head">QUANTITY</p>
                    <p className="total_head">TOTAL</p>
                </div>
                <div className="cart_items_container">
                    {
                        cart.map(el => {
                            return <CartItem key={el._id} item={el} cart={cart}
                                addCart={addCart} removeFromCart={removeFromCart} getChange={this.calculateTotalCost} />
                        })}
                </div>
                <div className="cart_footer">
                    <div className="sub">Subtotal ${this.state.totalCost}.00 USD</div>
                    <div className="footer_buttons">
                        <Link to="/" className="while_button_back"><MdKeyboardArrowLeft className="arrow_left" />Back to shoping</Link>
                        <Link className="black" to="/">CHECK OUT</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart