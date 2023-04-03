import Image from 'next/image';
import React from 'react';
import styles from './CartItem.module.css'
interface ComponentBProps{
  cartItem:any
}
const CartItem: React.FC<ComponentBProps> = ({cartItem}) => {
  const { _id, name, img, price, qty } = cartItem;
    return (
        <div  className={styles.cartItemContainer}>
      <div className="flex">
        <div className={styles.cartProImgContainer}>
          <Image width={100} height={100} src={img} alt="" />
        </div>
        <div className={styles.cartItemDetails}>
          <div>
            <p>{name}</p>
            <p className={styles.SingleCartPrice}>
              Tk. 
              <span>{price}</span>
            </p>
            <p className={styles.SingleCartTotal}>
              Total - <span>
                {price * qty}
                </span>
            </p>
          </div>
          <div style={{ marginRight: "20px" }}>Deliver in 3 to 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        <div className={styles.quantityControl}>
          <button className="text-xl cursor-default" 
        //   onClick={onQuantityDecrement}
          >-</button>
          <input
           value={qty} 
           type="value" readOnly />
          <button className="text-xl" 
        //   onClick={onQuantityIncrement}
          >+</button>
        </div>
        <button className={`${styles.cartActionBtn} cursor-default`}>Save For Later</button>
        <button
        //  onClick={() => onRemoveCartItem(_id)} 
         className={styles.cartActionBtn}>
          Remove
        </button>
      </div>
    </div>
    );
};

export default CartItem;