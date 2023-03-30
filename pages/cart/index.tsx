import React, { useState } from 'react';
import { MaterialButton } from '@/components/MaterialUI/MaterialUI';
import PriceDetails from '@/components/PriceDetails/PriceDetails';
import Card from '@/components/UI/Card/Card';
import styles from './cart.module.css'
import CartItem from '@/components/CartItem/CartItem';


interface ComponentBProps {
    totalPrice?:any,
    totalItem?:any
}
type cartItems = {
  [key:string]:{
    _id:string,
    name:string,
    price:number,
    qty:number,
    img:string
  }

}

const Cart = () => {
 
    const [cartItems, setCartItems] = useState<cartItems>({});
    return (
        <div className={styles.cartContainer} style={{ alignItems: "flex-start" }}>
        <Card
          headerLeft={"My Cart"}
          headerRight={<div>Deliver TO</div>}
          style={{
            width: "calc(100% - 400px)",
            overflow: "hidden",
          }}
        >
          <div className={styles.cartItemsContainer}>
            {Object.keys(cartItems).map((key:string, index) => (
              <CartItem
              
                // onQuantityInc={onQuantityIncrement}
                // onQuantityDec={onQuantityDecrement}
                key={index}
                cartItem={cartItems[key]}
                // onRemoveCartItem={onRemoveCartItem}
              />
            ))}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#ffffff",
              justifyContent: "flex-end",
              boxShadow: "0 0 3px 3px #eee",
              padding: "10px 0",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "250px", marginRight: "20px" }}>
              <MaterialButton
                title="Place Order"
                // onClick={() => navigate(`/checkout`)}
              />
            </div>
          </div>
        </Card>
        <PriceDetails
          totalPrice={Object.keys(cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
          totalItem={Object.keys(cartItems).reduce((qty, key) => {
            return qty + cartItems[key].qty;
          }, 0)}
        />
      </div>
    );
};

export default Cart;