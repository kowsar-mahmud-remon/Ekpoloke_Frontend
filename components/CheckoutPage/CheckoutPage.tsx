import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from "../../components/MaterialUI/MaterialUI";
import PriceDetails from "../../components/PriceDetails/PriceDetails";
import Card from "../../components/UI/Card/Card";
import AddressForm from "./AddressForm";
import styles from "./CheckoutPage.module.css";
import style from "../../pages/cart/cart.module.css";
import CartPage from "../../pages/cart/index";
import { log } from "console";
import { useRouter } from "next/router";
import { addOrder } from "../app/tools/addressSlice/addressSlice";

interface checkoutProps {
  active?: any;
  stepNumber?: any;
  title?: any;
  body?: any;
  onClick?: any;
}

const CheckoutStep = ({
  active,
  stepNumber,
  title,
  body,
  onClick,
}: checkoutProps) => {
  console.log(active, "isactive");
  return (
    <div className={styles.checkoutStep}>
      <div
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className={`${styles.checkoutHeader} ${active && `${styles.active}`}`}
      >
        <div>
          <span className={styles.stepNumber}>{stepNumber}</span>
          <span className={styles.stepTitle}>{title}</span>
        </div>
      </div>
      {body && body}
    </div>
  );
};

interface addressProps {
  adr?: any;
  selectAddress?: any;
  enableAddressEditForm?: any;
  confirmDeliveryAddress?: any;
  onAddressSubmit?: any;
  background?: any;
}

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
  background,
}: addressProps) => {
  return (
    <div
      className={`flex ${styles.addressContainer}`}
      style={{ background: "#f5faff" }}
    >
      <div style={{ marginLeft: "15px" }}>
        <input
          id="selectAddress"
          onClick={() => selectAddress(adr)}
          type="radio"
          name="address"
        />
      </div>
      <div
        className={`flex sb ${styles.addressInfo}`}
        style={{ marginLeft: "10px", width: "100%" }}
      >
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className={styles.addressDetail}>
              <div>
                <span className={styles.addressName}>{adr.name}</span>
                <span className={styles.addressType}>{adr.addressType}</span>
                <span className={styles.addressMobileNumber}>
                  {adr.mobileNumber}
                </span>
              </div>
              {adr.selected && (
                // <Anchor
                //   name="EDIT"
                //   onClick={() => enableAddressEditForm(adr)}
                //   style={{
                //     fontWeight: "500",
                //     color: "#2874f0",
                //   }}
                // />
                <Button
                  variant="text"
                  onClick={() => enableAddressEditForm(adr)}
                >
                  Edit
                </Button>
              )}
            </div>
            <div className={styles.fullAddress}>
              {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
            </div>
            {adr.selected && (
              <MaterialButton
                title="DELIVERY HERE"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{
                  width: "200px",
                  margin: "10px 0",
                }}
              />
            )}
          </div>
        ) : (
          <AddressForm
            initialData={adr}
            withoutLayout={true}
            onSubmitForm={onAddressSubmit}
            onCancel={() => {}}
          />
        )}
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const { addreess } = useSelector((state) => state?.addreess);

  const { cartItems } = useSelector((state) => state?.carts);

  console.log(cartItems, "cartitemsssssssss");
  

  const { user } = useSelector((state) => state?.user);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  

  const onAddressSubmit = (addr: any) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };
  useEffect(() => {
    user;
  }, []);
  useEffect(() => {
    const address = addreess?.map((adr: any) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [addreess]);
  const selectAddress = (addr: any) => {
    const updatedAddress = addreess.map((adr: any) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };
  const enableAddressEditForm = (addr: any) => {
    const updatedAddress = addreess?.map((adr: any) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };
  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };
  const confirmDeliveryAddress = (addr: any) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };
  const onConfirmOrder = () => {
    const totalPrice = Object.keys(cartItems).reduce((totalPrice, key) => {
      const { price, qty } = cartItems[key];
      return totalPrice + price * qty;
    }, 0);
    const totalPayable = totalPrice + 100;
    const items = cartItems;
    const payload = {
      addressId: selectedAddress._id,
      totalAmount: totalPayable,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };
   const order = dispatch(addOrder(payload));
   if(order){
    router.push("/account/orders");
   }
   
  };
  return (
    <>
      <div className={style.cartContainer} style={{ alignItems: "flex-start" }}>
        <div className={styles.checkoutContainer}>
          <CheckoutStep
            stepNumber={1}
            title="LOGIN"
            active={!user}
            body={
              user ? (
                <div className={styles.loggedInId}>
                  <span style={{ fontWeight: "500" }}>
                    <span>Name:</span>
                    {user.fullName}
                  </span>
                  <span style={{ margin: "0" }}>
                    <span>Email:</span>
                    {user.email}
                  </span>
                </div>
              ) : (
                <div style={{ padding: "0 50px 30px 50px" }}>
                  <MaterialInput label="Email" />
                  <MaterialInput label="Password" />
                  <MaterialButton title="LOGIN" style={{ marginTop: "20px" }} />
                </div>
              )
            }
          />

          <CheckoutStep
            stepNumber={2}
            title="DELIVERY ADDRESS"
            active={!confirmAddress}
            body={
              <>
                {confirmAddress ? (
                  <div
                    className={`flex ${styles.addressContainer} ${styles.stepCompleted}`}
                  >
                    <div>
                      <input
                        onClick={() => selectAddress(selectedAddress)}
                        type="radio"
                        name="address"
                      />
                    </div>
                    <div
                      className={`flex sb ${styles.addressInfo}`}
                      style={{ marginLeft: "20px" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className={styles.addressDetail}>
                          <span className={styles.addressName}>
                            {selectedAddress?.name}
                          </span>
                          <span className={styles.addressType}>
                            {selectedAddress?.addressType}
                          </span>
                          <span className={styles.addressMobileNumber}>
                            {selectedAddress?.mobileNumber}
                          </span>
                        </div>
                        <div>{selectedAddress?.address}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  address.map((adr, index) => (
                    <>
                      <Address
                        background={index % 2 === 0 ? "#f5faff" : "white"}
                        adr={adr}
                        selectAddress={selectAddress}
                        enableAddressEditForm={enableAddressEditForm}
                        confirmDeliveryAddress={confirmDeliveryAddress}
                        onAddressSubmit={onAddressSubmit}
                      />
                    </>
                  ))
                )}
              </>
            }
          />
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : (
            <CheckoutStep
              stepNumber="+"
              title="ADD NEW ADDRESS"
              active={false}
              onClick={() => setNewAddress(true)}
            />
          )}

          <CheckoutStep
            stepNumber={3}
            title={"ORDER SUMMARY"}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div className={styles.stepCompleted}>
                  {Object.keys(cartItems).length} Items
                </div>
              ) : null
            }
          />

          {orderSummary && (
            <Card style={{ margin: "10px 0" }}>
              <div
                className="flex justify-between"
                style={{ padding: "20px", alignItems: "center" }}
              >
                <p>
                  Order confirmation email will be sent to{" "}
                  <strong>{user?.email} {` `}</strong>
                </p>
                <MaterialButton
                  onClick={userOrderConfirmation}
                  title="CONTINUE"
                  style={{ width: "200px" }}
                />
              </div>
            </Card>
          )}

          <CheckoutStep
            stepNumber={4}
            title={"PAYMENT OPTIONS"}
            active={paymentOption}
            body={
              paymentOption && (
                <div className="flex items-center justify-between w-full p-5">
                  <div
                    className="flex"
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      className="mr-2"
                      name="paymentOption"
                      value="cod"
                    />
                    <div>Cash On Delivery</div>
                  </div>
                  <MaterialButton
                    onClick={onConfirmOrder}
                    title="CONFIRM ORDER"
                    style={{ width: "200px" }}
                  />
                </div>
              )
            }
          />
        </div>
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
    </>
  );
};

export default CheckoutPage;
