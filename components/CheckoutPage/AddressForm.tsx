import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MaterialButton,
  MaterialInput,
} from "../../components/MaterialUI/MaterialUI";
import styles from "./CheckoutPage.module.css"

/**
 * @author
 * @function AddressForm
 **/

const AddressForm = () => {
  // const { initialData, withoutLayout, onSubmitForm } = props;
  // const [name, setName] = useState(initialData ? initialData.name : "");
  // const [mobileNumber, setMobileNumber] = useState(
  //   initialData ? initialData.mobileNumber : ""
  // );
  // const [pinCode, setPinCode] = useState(
  //   initialData ? initialData.pinCode : ""
  // );
  // const [locality, setLocality] = useState(
  //   initialData ? initialData.locality : ""
  // );
  // const [address, setAddress] = useState(
  //   initialData ? initialData.address : ""
  // );
  // const [cityDistrictTown, setCityDistrictTown] = useState(
  //   initialData ? initialData.cityDistrictTown : ""
  // );
  // const [state, setState] = useState(initialData ? initialData.state : "");
  // const [landmark, setLandmark] = useState(
  //   initialData ? initialData.landmark : ""
  // );
  // const [alternatePhone, setAlternatePhone] = useState(
  //   initialData ? initialData.alternatePhone : ""
  // );
  // const [addressType, setAddressType] = useState(
  //   initialData ? initialData.addressType : ""
  // );
  // const [id, setId] = useState(initialData ? initialData._id : "");
  // const user = useSelector((state) => state.user);
  // const [submitFlag, setSubmitFLag] = useState(false);
  // const dispatch = useDispatch();

  // const inputContainer = {
  //   width: "100%",
  //   marginRight: 10,
  // };

  // const onAddressSubmit = (e) => {
  //   const payload = {
  //     address: {
  //       name,
  //       mobileNumber,
  //       pinCode,
  //       locality,
  //       address,
  //       cityDistrictTown,
  //       state,
  //       landmark,
  //       alternatePhone,
  //       addressType,
  //     },
  //   };
  //   if (id) {
  //     payload.address._id = id;
  //   }
  //   dispatch(addAddress(payload));
  //   setSubmitFLag(true);
  // };

  // useEffect(() => {
  //   console.log("addressCount", user.address);
  //   if (submitFlag) {
  //     console.log("where we are", user);
  //     let _address = {};
  //     if (id) {
  //       _address = {
  //         _id: id,
  //         name,
  //         mobileNumber,
  //         pinCode,
  //         locality,
  //         address,
  //         cityDistrictTown,
  //         state,
  //         landmark,
  //         alternatePhone,
  //         addressType,
  //       };
  //     } else {
  //       _address = user.address.slice(user.address.length - 1)[0];
  //     }
  //     onSubmitForm(_address);
  //   }
  // }, [user.address]);

  const renderAddressForm = () => {
    return (
      <>
        <div className="flex gap-[10px]">
          <div >
            <MaterialInput
              label="Name"
          
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <MaterialInput
              label="10-digit mobile number"
              
            />
          </div>
        </div>
        <div className="flex gap-[10px] ">
          <div>
            <MaterialInput
              label="Pincode"
            
            />
          </div>
          <div>
            <MaterialInput
              label="Locality"
      
            />
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div>
            <MaterialInput
              label="Address"

            />
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <MaterialInput
              label="City/District/Town"
     
            />
          </div>
          <div>
            <MaterialInput
              label="State"
  
            />
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div>
            <MaterialInput
              label="Landmark (Optional)"

            />
          </div>
          <div>
            <MaterialInput
              label="Alternate Phone (Optional)"
    
            />
          </div>
        </div>
        <div>
          <div
            className="flex"
            style={{
              alignItems: "center",
              marginTop: "15px"
            }}
          >
            <label>
              <b style={{ marginRight: "10px" }}>Address Type:</b>
            </label>
            <div style={{ marginRight: "10px" }}>
              <input
                type="radio"
             
                name="addressType"
                value="home"
              />
              <span>Home</span>
            </div>
            <div>
              <input
                type="radio"
             
                name="addressType"
                value="work"
              />
              <span>Work</span>
            </div>
          </div>
        </div>
        <div className="flex" style={{ justifyContent: 'flex-end' }}>
          <MaterialButton
            title="SAVE AND DELIVER HERE"
        
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

  // if (withoutLayout:any) {
  //   return <div>{renderAddressForm()}</div>;
  // }

  return (
    <div className={styles.checkoutStep} style={{ background: "#f5faff" }}>
      <div className={styles.checkoutHeader}>
        <div>
          <span className={styles.stepNumber}>+</span>
          <span className={styles.stepTitle}>{"ADD NEW ADDRESS"}</span>
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
