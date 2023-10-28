import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../dataProvider';
import { useParams } from 'react-router-dom';
import "./eachPage.css"
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { InputNumber } from 'rsuite';

class EachPage extends React.Component {
    static contextType = DataContext;
    state = {
        item: [],
        data: [
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
        ],
        styles: {
            width: 250,
            display: "block",
            marginLeft: 56,
            border: '1px solid black'
        },
        styles2: {
            width: 56,
            // heigth: 30,
            // display: "block",
            // marginBottom: 23,
            marginLeft: 36,
            border: '1px solid black'
        },
        count: 0
    };

    getProduct = (productId) => {
        if (productId) {
            const { items } = this.context;
            const data = items.find((item) => {
                return item._id === parseInt(productId);
            });
            this.setState({ item: data });
        }
    };

    componentDidMount() {
        const id = this.props.id;
        console.log(typeof (id))
        this.getProduct(id);
    }

    render() {
        // this.componentDidMount()
        const id = this.state.item._id;
        const { addCart } = this.context
        console.log(id)
        return (
            <div className='container'>
                <div className='main-info'>
                    <div className='photo_cont'>
                        <img src={`/img/dress${this.state.item._id}.png`} alt="" />
                        <img src={`/img/dress${this.state.item._id}2.png`} alt="" />

                    </div>
                    <div className='information'>
                        <h>{this.state.item.title}</h>
                        <p>Collection fw'20</p>
                        <p>Black OAK</p>
                        <p>LARGE STATEMENT RING. BALL <br /> MEASURES 0.75 INCHES.</p>
                        <div className='size_picker'>

                            <p>size</p>
                            <SelectPicker size="md"
                                placeholder="XL"
                                data={this.state.data}
                                style={this.state.styles}
                                searchable={false}
                            />
                        </div>
                        <div className='quantity_picker'>
                            <p>Quantity</p>
                            <InputNumber size="md" style={this.state.styles2} min={0} />
                        </div>
                        <div className='cost'>$ {this.state.item.cost}</div>
                        <div className='bnt'>
                            <button onClick={() => addCart(id)}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Функциональный компонент-обертка для использования useParams
function EachPageWrapper(props) {
    const { id } = useParams();

    return <EachPage {...props} id={id} />;
}

export default EachPageWrapper;
