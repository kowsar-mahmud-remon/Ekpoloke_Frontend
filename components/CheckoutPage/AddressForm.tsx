import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialButton } from "../../components/MaterialUI/MaterialUI";
import {
  useAddAddressMutation,
  useGetAddressMutation,
} from "../features/address/addressApi";
import style from "./CheckoutPage.module.css";
import { roboto } from "@/fonts/googlefonts";

/**
 * @author
 * @function AddressForm
 **/

const AddressForm = (props: any) => {
  const [addAddress, { data, isError, isLoading, isSuccess }] =
    useAddAddressMutation() || {};
  const { initialData, withoutLayout, onSubmitForm } = props;
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initialData ? initialData.mobileNumber : ""
  );
  const [pinCode, setPinCode] = useState(
    initialData ? initialData.pinCode : ""
  );
  const [locality, setLocality] = useState(
    initialData ? initialData.locality : ""
  );
  const [address, setAddress] = useState(
    initialData ? initialData.address : ""
  );
  const [cityDistrictTown, setCityDistrictTown] = useState(
    initialData ? initialData.cityDistrictTown : ""
  );
  const [state, setState] = useState(initialData ? initialData.state : "");
  const [landmark, setLandmark] = useState(
    initialData ? initialData.landmark : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initialData ? initialData.alternatePhone : ""
  );
  const [addressType, setAddressType] = useState(
    initialData ? initialData.addressType : ""
  );
  const [id, setId] = useState(initialData ? initialData._id : "");
  // const user = useSelector((state) => state.user);
  const [submitFlag, setSubmitFLag] = useState(false);
  const dispatch = useDispatch();

  const inputContainer = {
    width: "100%",
    marginRight: 10,
  };

  const onAddressSubmit = (e: any) => {
    const payload: any = {
      address: {
        name,
        mobileNumber,
        pinCode,
        locality,
        address,
        cityDistrictTown,
        state,
        landmark,
        alternatePhone,
        addressType,    
      },
    };
    if (id) {
      payload.address._id = id;
    }
    addAddress({ payload });
    setSubmitFLag(true);
  };

  // adAddress({payload:{address:addressObj}});

  useEffect(() => {
    console.log("addressCount", data?.address);
    if (submitFlag) {
      console.log("where we are", data);
      let _address = {};
      if (id) {
        _address = {
          _id: id,
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        };
      } else {
        _address = data?.address?.address?.slice(
          data?.address?.address?.length - 1
        )[0];
      }
      onSubmitForm(_address);
    }
  }, [data?.address?.address]);

  const renderAddressForm = () => {
    return (
      <>
        <div className={`flex ${roboto.className}`}>
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="10-digit mobile number"
              required
              value={mobileNumber}
              onChange={(e: any) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div style={inputContainer}>
            <input
              required
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="Pincode"
              value={pinCode}
              onChange={(e: any) => setPinCode(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <input
              required
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="Locality"
              value={locality}
              onChange={(e: any) => setLocality(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="Address"
              value={address}
              onChange={(e: any) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="flex">
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="City/District/Town"
              value={cityDistrictTown}
              onChange={(e: any) => setCityDistrictTown(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="State"
              value={state}
              onChange={(e: any) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="Landmark (Optional)"
              value={landmark}
              onChange={(e: any) => setLandmark(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <input
              className="w-full h-10 mb-5 px-3 rounded bg-white font-normal"
              placeholder="Alternate Phone (Optional)"
              value={alternatePhone}
              onChange={(e: any) => setAlternatePhone(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div
            className="flex"
            style={{
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <label>
              <b style={{ marginRight: "10px" }}>Address Type:</b>
            </label>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
                onClick={() => setAddressType("home")}
                name="addressType"
                value="home"
              />
              <span>Home</span>
            </div>
            <div>
              <input
                type="radio"
                onClick={() => setAddressType("work")}
                name="addressType"
                value="work"
              />
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <MaterialButton
            title="SAVE AND DELIVER HERE"
            onClick={onAddressSubmit}
            style={{
              width: "250px",
              margin: "20px 0",
              // d
            }}
          />
        </div>
      </>
    );
  };

  if (withoutLayout) {
    return <div>{renderAddressForm()}</div>;
  }

  return (
    <div className={style.checkoutStep} style={{ background: "#f5faff" }}>
      <div className={`${style.checkoutHeader}`}>
        <div>
          <span className={style.stepNumber}>+</span>
          <span className={style.stepTitle}>{"ADD NEW ADDRESS"}</span>
        </div>
      </div>
      <div
        style={{
          padding: "0 60px",
          paddingBottom: "20px",
          boxSizing: "border-box",
        }}
      >
        {renderAddressForm()}
      </div>
    </div>
  );
};

export default AddressForm;
