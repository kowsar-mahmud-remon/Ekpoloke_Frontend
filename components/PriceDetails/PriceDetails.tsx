import React from 'react';
import Card from '../UI/Card/Card';

interface ComponentBProps {
    totalPrice:any,
    totalItem:any
}
const PriceDetails: React.FC<ComponentBProps> = ({totalPrice, totalItem}) => {
    return (
        <Card
        headerLeft="Price Details"
        style={{ maxWidth: '380px' }}
        >
            <div
            style={{
                padding: '20px',
                boxSizing: 'border-box'
            }}
            >
                <div className='flex_items sb' style={{ margin: '10px 0' }}>
                    <div>Price ({totalItem} items)</div>
                    <div>{totalPrice}</div>
                </div>
                <div className='flex_items sb' style={{ margin: '10px 0' }}>
                    <div>Delivery Charges</div>
                    <div>100</div>
                </div>
                <div className='flex_items sb' style={{ margin: '10px 0' }}>
                    <div>Total Amount</div>
                    <div>{totalPrice + 100}</div>
                </div>
            </div>
        </Card>
    );
};

export default PriceDetails;