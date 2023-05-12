import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addOrder, getAddress, getCartItems } from "../../actions";
import Layout from "../../components/Layout/Layout";
import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from "../../components/MaterialUI/MaterialUI";
import PriceDetails from "../../components/PriceDetails/PriceDetails";
import Card from "../../components/UI/Card/Card";
import CartPage from "../../pages/cart/index";
import AddressForm from "./AddressForm";
import { useRouter } from "next/router";
import {
  useAddOrdersMutation,
  useGetAddressMutation,
} from "../features/address/addressApi";
import style from "./CheckoutPage.module.css";
import styles from "../../pages/cart/cart.module.css";
import { RootState } from "../app/store";

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
    <div className={style.checkoutStep}>
      <div
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className={`${style.checkoutHeader} ${active && `${style.active}`}`}
      >
        <div>
          <span className={style.stepNumber}>{stepNumber}</span>
          <span className={style.stepTitle}>{title}</span>
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
    <div className={`flex ${style.addressContainer}`} style={{background}}>
      <div style={{ marginLeft: "15px" }}>
        <input
          id="selectAddress"
          onClick={() => selectAddress(adr)}
          type="radio"
          name="address"
        />
      </div>
      <div
        className={`flex sb ${style.addressInfo}`}
        style={{ marginLeft: "10px", width: "100%" }}
      >
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className={style.addressDetail}>
              <div>
                <span className={style.addressName}>{adr.name}</span>
                <span className={style.addressType}>{adr.addressType}</span>
                <span className={style.addressMobileNumber}>
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
            <div className={style.fullAddress}>
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
  const [getAddress, { data }] = useGetAddressMutation() || {};

  const [addOrders] = useAddOrdersMutation() || {};
  // const { addreess } = useSelector((state) => state?.addreess);
  const { cartItems } = useSelector((state: RootState) => state?.carts);

  const { user, accessToken } = useSelector((state: RootState) => state?.user);

  console.log(user, "hellloooooooooooo userrrrrrrrr");

  // const user = useSelector((state) => state.user);
  // const cart = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState<any>([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(selectedAddress, "selectedAddressssssssss");

  const onAddressSubmit = (addr: any) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };
  useEffect(() => {
    user && getAddress();
    // user && cartItems();
  }, [user]);
  useEffect(() => {
    const address = data?.userAddress?.address?.map((adr: any) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [data?.userAddress?.address]);
  const selectAddress = (addr: any) => {
    const updatedAddress = address.map((adr: any) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };
  const enableAddressEditForm = (addr: any) => {
    const updatedAddress = address.map((adr: any) =>
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
      const keys = parseInt(key);
      const { price, qty } = cartItems[keys];
      return totalPrice + price * qty;
    }, 0);

    const totalPayable = totalPrice + 100;

    const items = Object.keys(cartItems).map((key) => ({
      productId: key,
      payablePrice: cartItems[key].price,
      purchasedQty: cartItems[key].qty,
    }));

    const payload = {
      addressId: selectedAddress._id,
      totalAmount: totalPayable,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };

    addOrders(payload);

    router.push("/account/orders");
  };
  return (
    <>
      <div
        className={styles.cartContainer}
        style={{ alignItems: "flex-start" }}
      >
        <div className={style.checkoutContainer}>
          <CheckoutStep
            stepNumber={1}
            title="LOGIN"
            active={!accessToken}
            body={
              user && accessToken ? (
                <div className={style.loggedInId}>
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
            active={!confirmAddress && accessToken}
            body={
              <>
                {confirmAddress ? (
                  <div
                    className={`flex ${style.addressContainer} ${style.stepCompleted}`}
                  >
                    <div>
                      <input
                        onClick={() => selectAddress(selectedAddress)}
                        type="radio"
                        name="address"
                      />
                    </div>
                    <div
                      className={`flex sb ${style.addressInfo}`}
                      style={{ marginLeft: "20px" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className={style.addressDetail}>
                          <span className={style.addressName}>
                            {selectedAddress?.name}
                          </span>
                          <span className={style.addressType}>
                            {selectedAddress?.addressType}
                          </span>
                          <span className={style.addressMobileNumber}>
                            {selectedAddress?.mobileNumber}
                          </span>
                        </div>
                        <div>{selectedAddress?.address}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  address?.map((adr: any, index: any) => (
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
                <div className={style.stepCompleted}>
                  {Object.keys(cartItems).length} Items
                </div>
              ) : null
            }
          />

          {orderSummary && (
            <Card style={{ margin: "10px 0" }}>
              <div
                className="flex justify-between sb"
                style={{ padding: "20px", alignItems: "center" }}
              >
                <p>
                  Order confirmation email will be sent to{" "}
                  <strong>{user.email}</strong>
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
