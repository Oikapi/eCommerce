import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../dataProvider';
import { useParams } from 'react-router-dom';
import "./eachPage.css"
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { InputNumber } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../store/marketCartSlice';


const EachPage = ({ }) => {
    const data = [
        {
            label: "XS",
            value: 1
        },
        {
            label: "S",
            value: 2
        },
        {
            label: "M",
            value: 3
        },
        {
            label: "L",
            value: 4
        },
        {
            label: "XL",
            value: 5
        },
        {
            label: "XXL",
            value: 6
        },
    ]
    const cart = useSelector(state => state.marketCart.cart)
    console.log(cart)
    const { id } = useParams();
    const item = useSelector(state => state.marketItems.find((el) => el._id === Number(id)))//Хуйня
    const dispatch = useDispatch()
    // console.log(item)
    const [count, setCount] = useState(1)
    return (
        <div className='container'>
            <div className='main-info'>
                <div className='photo_cont'>
                    <img src={`/img/dress${item._id}.png`} alt="" />
                    <img src={`/img/dress${item._id}2.png`} alt="" />

                </div>
                <div className='information'>
                    <h1>{item.title}</h1>
                    <p>Collection fw'20</p>
                    <p>Black OAK</p>
                    <p>LARGE STATEMENT RING. BALL <br /> MEASURES 0.75 INCHES.</p>
                    <div className='size_picker'>

                        <p>size</p>
                        <SelectPicker size="md"
                            placeholder="XL"
                            data={data}
                            // style={this.state.styles}
                            searchable={false}
                        />
                    </div>
                    <div className='quantity_picker'>
                        <p>Quantity</p>
                        <InputNumber
                            size="md"
                            // style={this.state.styles2}
                            min={1}
                            defaultValue={count}
                            onChange={(value) => setCount(value)}
                        />
                    </div>
                    <div className='cost'>$ {item.cost}</div>
                    <button className='btn' onClick={() => dispatch(addCart({ item, count }))} >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div >

    )
}


// class EachPage extends React.Component {
//     static contextType = DataContext;
//     state = {
//         item: [],
//         data: [
//             {
//                 label: "XS",
//                 value: 1
//             },
//             {
//                 label: "S",
//                 value: 2
//             },
//             {
//                 label: "M",
//                 value: 3
//             },
//             {
//                 label: "L",
//                 value: 4
//             },
//             {
//                 label: "XL",
//                 value: 5
//             },
//             {
//                 label: "XXL",
//                 value: 6
//             },
//         ],
//         styles: {
//             width: 250,
//             display: "block",
//             marginLeft: 56,
//             border: '1px solid black'
//         },
//         styles2: {
//             width: 56,
//             // heigth: 30,
//             // display: "block",
//             // marginBottom: 23,
//             marginLeft: 36,
//             border: '1px solid black'
//         },
//         count: 1
//     };

//     getProduct = (productId) => {
//         if (productId) {
//             const { items } = this.context;
//             const data = items.find((item) => {
//                 return item._id === parseInt(productId);
//             });
//             this.setState({ item: data });
//         }
//     };

//     componentDidMount() {
//         const id = this.props.id;
//         console.log(id)
//         this.getProduct(id);
//     }

//     changeQua(qua) {
//         this.setState({ count: qua });
//         console.log(this.state.count)

//     }

//     render() {
//         const id = this.state.item._id;
//         const { addCart } = this.context
//         const qua = 0;
//         return (
//             <div className='container'>
//                 <div className='main-info'>
//                     <div className='photo_cont'>
//                         <img src={`/img/dress${this.state.item._id}.png`} alt="" />
//                         <img src={`/img/dress${this.state.item._id}2.png`} alt="" />

//                     </div>
//                     <div className='information'>
//                         <h>{this.state.item.title}</h>
//                         <p>Collection fw'20</p>
//                         <p>Black OAK</p>
//                         <p>LARGE STATEMENT RING. BALL <br /> MEASURES 0.75 INCHES.</p>
//                         <div className='size_picker'>

//                             <p>size</p>
//                             <SelectPicker size="md"
//                                 placeholder="XL"
//                                 data={this.state.data}
//                                 style={this.state.styles}
//                                 searchable={false}
//                             />
//                         </div>
//                         <div className='quantity_picker'>
//                             <p>Quantity</p>
//                             <InputNumber
//                                 size="md"
//                                 style={this.state.styles2}
//                                 min={1}
//                                 defaultValue={1}
//                                 onChange={(value) => this.changeQua(value)}
//                             />
//                         </div>
//                         <div className='cost'>$ {this.state.item.cost}</div>
//                         <button className='btn' onClick={() => addCart(id, this.state.count)} >
//                             ADD TO CART
//                         </button>
//                     </div>
//                 </div>
//             </div >
//         );
//     }
// }

// Функциональный компонент-обертка для использования useParams
// function EachPageWrapper(props) {
//     const { id } = useParams();

//     return <EachPage {...props} id={id} />;
// }

export default EachPage;
