import { Component } from "react";
import CloseIcon from '@rsuite/icons/Close';
import "./modalItem.css"
import { DataContext } from "../dataProvider";

class ModalItem extends Component {
    static contextType = DataContext;
    render() {
        const { cart, removeFromCart } = this.context
        const { img, title, cost, _id } = this.props.item
        return (
            <div>
                <div className="item_container">
                    <img src={`/img/dress${_id}.png`} alt="" />
                    <div className="title_cost">
                        <ul>
                            <li>
                                {title}
                            </li>
                            <li>
                                ${cost}
                            </li>
                        </ul>
                    </div>

                    <div className="del_btn">
                        <button onClick={() => removeFromCart(_id)}><CloseIcon /></button>
                    </div>


                </div>
            </div>

        )
    }
}


export default ModalItem