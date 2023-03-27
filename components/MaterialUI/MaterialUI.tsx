import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MaterialUi.module.css";

const Modal = (props:any) => {
  if (!props.visible) {
    return null;
  }
  return (
    <>
      <div className={styles.modalFixedBg}>
        <div style={{ position: "relative" }}>
          <div className={styles.modalClose} onClick={props.onClose}>
            X
          </div>
          <div className={styles.modalContainer}>{props.children}</div>
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
      <div className={styles.materialInput}>
        <label
          className={`label ${focus || props.value ? "focus" : ""}`}
          style={{
            top: 0,
            lineHeight: "none",
          }}
        >
          {props.label}
        </label>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            className="input"
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

const DropdownMenu = (props:any) => {
  return (
    <div className={styles.headerDropdownContainer}>
      {props.menu}
      <div className={styles.dropdown}>
        <div className={styles.upArrow}></div>
        {props.firstMenu}
        <ul className={styles.headerDropdownMenu}>
          {props.menus &&
            props.menus.map((item:any, index:any) => (
              <li key={index}>
                <Link
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick && item.onClick();
                    }
                  }}
                  style={{width: '100%'}}
                  to={item.href}
                >
                  <div className="flex items-center gap-3">
                  <span className="text-primary">{item.icon}</span> <span>{item.label}</span>
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
      <ul>
        {breed &&
          breed.map((item:any, index:any) => (
            <li key={index}>
              <Link to={item.href}>{item.name}</Link>
              {breedIcon}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Modal, MaterialInput, MaterialButton, DropdownMenu, Anchor, Breed };
