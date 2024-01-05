import { Component } from "react"
import { IoMdClose } from "react-icons/io";
import { InputNumber } from 'rsuite';
import "./cartitem.css"
import { DataContext } from "../dataProvider";



// Вместо использования key, передайте нужные данные через пропсы
export class CartItem extends Component {
    static contextType = DataContext;

    state = {
        totalForEach: 0
    };

    componentDidMount() {
        this.calculateTotalForEach();
    }

    componentDidUpdate(prevProps) {
        const { cart } = this.context;
        const ourItem = cart.find(el => el._id === this.props.item._id);
        console.log(prevProps, ourItem);
        if (prevProps.item.count !== ourItem.count) {
            this.calculateTotalForEach();
        }
    }
    calculateTotalForEach = () => {
        const { cart } = this.context;
        const ourItem = cart.find(el => el._id === this.props.item._id);
        console.log(ourItem);

        // Создаем новый объект с обновленным count
        const updatedItem = { ...this.props.item, count: ourItem.count };

        const { cost, count } = updatedItem;
        const totalForEach = parseFloat(cost) * parseFloat(count);
        this.setState({ totalForEach });
    };
    changeCountAndReload = (value) => {
        const { cost, _id } = this.props.item
        const { getChange } = this.props
        const { addCart } = this.context
        addCart(_id, value)
        this.props.getChange()
        this.setState({ totalForEach: value * cost })
    }
    deleteItem = (_id) => {
        const { removeFromCart } = this.context
        const myPromise = new Promise((resolve, reject) => {
            removeFromCart(_id)
            resolve()
        });
        myPromise.finally(() => this.props.getChange())

    }
    render() {
        const { item, addCart, cart, removeFromCart } = this.props;
        const ourCart = cart.find(el => el._id === item._id);
        const { img, title, cost, count, _id } = ourCart;

        return (
            <div className="cart_item">
                <img src={img} alt="" />
                <div className="left_item">
                    <p>{title}</p>
                    <button className="btn_cart" onClick={() => (this.deleteItem(_id))}>
                        <IoMdClose className="delete_icon" /> <u>Remove</u>
                    </button>
                </div>

                <p className="price_each">{cost}</p>
                <InputNumber
                    className="input_number"
                    min={0}
                    defaultValue={count}
                    onChange={(value) => this.changeCountAndReload(value)}
                />
                <p className="total_for_each">{this.state.totalForEach}</p>
            </div>
        );
    }
}


export default CartItem