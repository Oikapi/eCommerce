import { Component } from "react";
import { useState } from "react";
import { DataContext } from "../dataProvider.jsx"
import ModalItem from "./ModalItem.jsx";
import "./modalCart.css"
import CloseIcon from '@rsuite/icons/Close';
import { Link } from "react-router-dom";
class ModalCart extends Component {
    static contextType = DataContext;
    render() {

        if (!this.props.open) {
            return (null);
        }
        const { cart } = this.context
        const totalCost = cart.reduce((acc, item) => acc + parseFloat(item.cost) * parseFloat(item.count), 0);
        console.log(cart)
        return (
            <div className="modal_overlay">

                <div className="modal_container">
                    <div className="close_btn">
                        <button onClick={this.props.onClose}><CloseIcon /></button>
                    </div>
                    <div className="modal_content">
                        {cart.map((item) => {
                            return <ModalItem item={item} />
                        })
                        }
                        <div className="total">
                            <p>Total </p>
                            <p>${totalCost} USD</p>
                        </div>
                        <div className="modal-buttons">
                            <Link to="/cart" className="white_btn" > <b>VIEIW CART</b></Link>
                            <button className="black_btn"><b>CHECK OUT</b></button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}


function ModalCartWrapped(props, onClose) {
    const [ModalOpen, SetOpenModal] = useState(false);
    return (
        <div >
            <button className="cart_button" onClick={() => SetOpenModal(!ModalOpen)}>CART</button>
            <ModalCart open={ModalOpen} onClose={() => SetOpenModal(false)} />
        </div>)
}

export default ModalCartWrapped;