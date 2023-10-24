import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../dataProvider';
import { useParams } from 'react-router-dom';

class EachPage extends React.Component {
    static contextType = DataContext;
    state = {
        item: []
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
        console.log(id)
        return (
            <div className='container'>
                <div className='proto_cont'>

                </div>
                <div className='information'></div>
                <div className='others_outfits'></div>
                <div className='footer'></div>
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
