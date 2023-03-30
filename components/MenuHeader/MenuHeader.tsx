import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getAllCategories } from "../../actions";
import { useGetAllCategoryQuery } from "../rtkQuery/productApi";
// import "./MenuHeader.css";
import styles from "../../styles/MenuHeader.module.css";

const MenuHeader = () => {
  const { data: category } =
    useGetAllCategoryQuery("name,parentId,slug,type") || {};
  console.log("categoryyyyyyy", category?.categoryList);

  // const category = useSelector(state => state.category);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(getAllCategories());
  // }, []);

  const renderCategories = (categoryList: any) => {
    let myCategories = [];
    for (let category of categoryList) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <Link
              href={`/${category.slug}?category=${category._id}&type=${category.type}`}
            >
              {category.name}
            </Link>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };
  return (
    <div className={`${styles.menuHeader} hidden md:block`}>
      <ul>
        {category?.categoryList?.length > 0
          ? renderCategories(category.categoryList)
          : null}
      </ul>
    </div>
  );
};

export default MenuHeader;
