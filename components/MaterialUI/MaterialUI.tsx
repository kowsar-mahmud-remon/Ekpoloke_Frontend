import Link from "next/link";
import React, { useState } from "react";


import styles from "./MaterialUi.module.css";

type DropdownMenuType = {
  menu: JSX.Element;
  menus: {
    label: string;
    href: string;
    icon: JSX.Element;
    onClick?: any;
  }[];
  firstMenu?: any;
};
const Modal = (props:any) => {
  if (!props.visible) {
    return null;
  }
  return (
    <>
      <div className={`${styles.modalFixedBg}`}>
        <div style={{ position: "relative" }}>
          <div className={`${styles.modalClose}`} onClick={props.onClose}>
            X
          </div>
          <div className={`${styles.modalContainer}`}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

const MaterialInput = (props:any) => {
  const [focus, setFocus] = useState(false);
  const [touch, setTouch] = useState(false);

  return (
    <div>
      <div className={`${styles.materialInput}`}>
      <label
          className={`${styles.materialInputlabel} ${focus || props.value ? `${styles.materialInputlabelfocus}` : ""}`}
          style={{
            top: 0,
            lineHeight: "none",
          }}
        >
          {props.label}
        </label>
        <div
          className="flex"
        >
          <input
            className={`${styles.materialInputinput} input`}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            autoComplete="new-password"
            onFocus={(e) => {
              setFocus(true);
              setTouch(true);
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                setFocus(false);
              } else {
                setTouch(false);
              }
            }}
          />
          {props.rightElement ? props.rightElement : null}
        </div>
      </div>
      {touch && (
        <div
          style={{
            fontSize: "10px",
            color: "red",
            fontWeight: 500,
          }}
        >
          {props.label} is Required
        </div>
      )}
    </div>
  );
};

const MaterialButton = (props:any) => {
  const onClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <div
      style={{
        width: "100%",
        ...props.style,
      }}
    >
      <button
        onClick={onClick}
        style={{
          backgroundColor: props.bgColor,
          color: props.textColor,
          fontWeight: "bold",
        }}
        className={styles.materialButton}
      >
        {props.icon && props.icon}
        {props.title && props.title}
      </button>
    </div>
  );
};

const DropdownMenu = ({ menu, menus, firstMenu }: DropdownMenuType) => {
  console.log("menu", menu.props);
  console.log("menus", menus);
  console.log("firstMenu", firstMenu);
  return (
    <div className={`${styles.headerDropdownContainer}`}>
      {menu}
      <div className={`${styles.dropdown}`}>
        <div className={`${styles.upArrow}`}></div>
        {firstMenu}
        <ul className={`${styles.headerDropdownMenu}`}>
          {menus &&
            menus.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick && item.onClick();
                    }
                  }}
                  style={{ width: "100%" }}
                  href={item.href}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{item.icon}</span>{" "}
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const Anchor = (props:any) => {
  return (
    <button {...props} className={styles.anchorButton}>
      {props.name}
    </button>
  );
};

const Breed = (props:any) => {
  const { breed, breedIcon } = props;
  return (
    <div className="breed">
      <ul className="flex items-center">
        {breed &&
          breed.map((item:any, index:any) => (
            <li className="flex items-center mr-[5px] text-xs" key={index}>
              <Link className="mx-[10px] text-xs text-[#777] font-medium" href={item.href}>{item.name}</Link>
              {breedIcon}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Modal, MaterialInput, MaterialButton, DropdownMenu, Anchor, Breed };
