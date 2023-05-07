import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { addToFavorite, removeFromFavorite } from "../../actions";
import styles from "./Favorite.module.css";
import {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useRemoveFromFavoriteMutation,
} from "../features/favourite/favouriteApi";

interface favProps {
  productId: any;
}

const Favorite = ({ productId }: any) => {
  const [addToFavorite, { isError, isLoading, isSuccess }] =
    useAddToFavoriteMutation() || {};
  const [removeFromFavorite] = useRemoveFromFavoriteMutation() || {};
  const { data } = useGetFavoritesQuery([]) || {};

  const isProductInFavorite = () => {
    const inFavorite = data?.favorites?.find(
      (f: any) => f.product === productId
    );
    if (inFavorite) {
      return true;
    } else {
      return false;
    }
  };
  const handleFavorite = () => {
    isProductInFavorite()
      ? removeFromFavorite(productId)
      : addToFavorite(productId);
  };
  return (
    <span className={styles.favorite} onClick={handleFavorite}>
      <AiFillHeart color={isProductInFavorite() ? "red" : "#c2c2c2"} />
    </span>
  );
};

export default Favorite;
