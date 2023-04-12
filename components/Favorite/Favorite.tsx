import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { addToFavorite, removeFromFavorite } from "../../actions";
import styles from "./Favorite.module.css"

interface favProps{
  productId:any
}

const Favorite = ({ productId }:favProps) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state?.favorite);
  const isProductInFavorite = () => {
    const inFavorite = favorite?.favorites?.find((f:any) => f.product === productId);
    if (inFavorite) {
      return true;
    } else {
      return false;
    }
  };
  const handleFavorite = () => {
    isProductInFavorite()
      ? dispatch(removeFromFavorite(productId))
      : dispatch(addToFavorite(productId));
  };
  return (
    <span className={styles.favorite} onClick={handleFavorite}>
      <AiFillHeart color={isProductInFavorite() ? "red" : "#c2c2c2"} />
    </span>
  );
};

export default Favorite;
