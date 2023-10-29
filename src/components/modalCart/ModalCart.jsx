import { Component } from "react";
import { useState } from "react";
import { DataContext } from "../dataProvider.jsx"
import ModalItem from "./ModalItem.jsx";
import "./modalCart.css"
import CloseIcon from '@rsuite/icons/Close';
class ModalCart extends Component {
    static contextType = DataContext;
    render() {

        if (!this.props.open) {
            return (null);
        }
        const { cart } = this.context
        const totalCost = cart.reduce((acc, item) => acc + parseFloat(item.cost), 0);
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
                        <div className="buttons">
                            <button className="white_btn"> <b>VIEIW CART</b></button>
                            <button className="black_btn"><b>CHECK OUT</b></button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}


function ModalCartWrapped(props, onClose) {
    const [ModalOpen, SetOpenModal] = useState(true)

    return (
        <div>
            <button onClick={() => SetOpenModal(!ModalOpen)}>CART</button>
            <ModalCart open={ModalOpen} onClose={() => SetOpenModal(false)} />
        </div>)
}

export default ModalCartWrapped;