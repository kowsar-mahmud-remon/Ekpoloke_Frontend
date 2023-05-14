import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/MenuHeader.module.css";
import { useGetAllCategoryQuery } from "../features/products/productsApi";
import { roboto } from "@/fonts/googlefonts";

const MenuHeader = () => {
  const { data: category } =
    useGetAllCategoryQuery("name,parentId,slug,type") || {};

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
    <div className={`${styles.menuHeader} ${roboto.className} hidden md:block border-[#cecece]`}>
      <ul>
        {category?.categoryList?.length > 0
          ? renderCategories(category.categoryList)
          : null}
      </ul>
    </div>
  );
};

export default MenuHeader;
