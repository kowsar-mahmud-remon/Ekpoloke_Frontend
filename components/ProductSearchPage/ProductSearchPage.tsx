import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import Error from "../Error/Error";
import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import noResultSearchError from "../../assets/images/noResultSearchError.png";
import styles from "./ProductSearchPage.module.css";
import ProductCard1 from "../ProductCard1/ProductCard1";
import SortWithModal from "../SortWithModal/SortWithModal";
import Filter from "../Filter/Filter";
import { useRouter } from "next/router";
import { useGetSearchProductQuery } from "../features/search/searchApi";

const ProductSearchPage = () => {
  const [sortModal, setSortModal] = useState(false);

  const router = useRouter();
  const { s } = router.query;
  const { sort } = router.query;
  const { page } = router.query;
  const { limit } = router.query;
  const searchText = s;

  let sortBy = "";
  switch (sort) {
    case "relevance":
      sortBy = "";
      break;
    case "popularity":
      sortBy = "-views";
      break;
    case "price-low-to-high":
      sortBy = "price";
      break;
    case "price-high-to-low":
      sortBy = "-price";
      break;
    case "newest-first":
      sortBy = "-createdBy";
      break;
    default:
      sortBy = "";
  }

  const searchSlug = {
    searchText,
    sortBy,
    page,
    limit,
    fields: "name,productPictures,price,ratings,slug",
  };

  const {
    data: searchProduct,
    isError,
    isSuccess,
    isLoading,
    error,
  } = useGetSearchProductQuery(searchSlug);

  const sliceSearchProduct = searchProduct?.products?.slice(0, 4);

  console.log("searchProduct searchProduct searchProduct", searchProduct);
  console.log(
    "searchProductproducts searchProductproducts searchProductproducts",
    searchProduct?.products
  );

  const queries = {
    s: searchText,
    sort,
    page,
    limit,
  };
  let paginationPages = [];
  for (let i = 0; i < searchProduct?.pageNeeded; i++) {
    paginationPages.push(i + 1);
  }
  return (
    <>
      <Helmet>
        <title>
          {` ${searchText}
          ${searchText && " - Search - "}Ekpoloke`}
        </title>
      </Helmet>
      {!isLoading ? (
        !isError ? (
          <div className={`${styles.searchPage}`}>
            <div className="flex items-center w-full">
              <SortWithModal
                sortModal={sortModal}
                setSortModal={setSortModal}
                className="md:hidden"
                queries={queries}
              />
              <Filter className="md:hidden" />
            </div>
            <div className="container px-2 mx-auto md:px-4">
              <div className="pt-10 font-bold text-center md:ml-10">
                <h5 className="text-xl">
                  Showing {searchProduct?.showingFrom} -{" "}
                  {/* {searchProduct?.showingTo} */}
                  {sliceSearchProduct?.length} of {searchProduct?.matchCount}{" "}
                  results for {`"${searchText}"`}
                </h5>
                <div className={`${styles.sortTabs}`}>
                  <p>Sort By</p>
                  <span
                    className={`${sort === "relevance" && styles.active}`}
                    onClick={() =>
                      router.push({
                        query: { ...router.query, sort: "relevance" },
                      })
                    }
                  >
                    Relevance
                  </span>
                  <span
                    className={`${sort === "popularity" && styles.active}`}
                    onClick={() =>
                      router.push({
                        query: { ...router.query, sort: "popularity" },
                      })
                    }
                  >
                    Popularity
                  </span>
                  <span
                    className={`${
                      sort === "price-low-to-high" && styles.active
                    }`}
                    onClick={() =>
                      router.push({
                        query: { ...router.query, sort: "price-low-to-high" },
                      })
                    }
                  >
                    Price - Low to High
                  </span>
                  <span
                    className={`${
                      sort === "price-high-to-low" && styles.active
                    }`}
                    onClick={() =>
                      router.push({
                        query: { ...router.query, sort: "price-high-to-low" },
                      })
                    }
                  >
                    Price - Hgh to Low
                  </span>
                  <span
                    className={`${sort === "newest-first" && styles.active}`}
                    onClick={() =>
                      router.push({
                        query: { ...router.query, sort: "newest-first" },
                      })
                    }
                  >
                    Newest first
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 md:gap-5">
                {sliceSearchProduct.map((product: any, index: any) => {
                  return <ProductCard1 key={index} product={product} />;
                })}
              </div>
              <div
                className={`${styles.pagination} md:py-2 py-1 md:px-6 px-2 shadow-lg border-t-2 border-gray-300`}
              >
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className="text-[12px] md:text-[16px]"
                >
                  Page {page} of {searchProduct?.pageNeeded}
                </span>
                <div className={`${styles.pages}`}>
                  {Number(page) > 1 && (
                    <div className="flex items-center text-secondary justify-center md:mr-5 mr-1 md:gap-x-6 gap-x-1 text-[12px] md:text-[14px]">
                      <span
                        onClick={() => {
                          router.push({
                            query: {
                              ...router.query,
                              s: searchText,
                              sort: sort,
                              page: 1,
                              limit: limit,
                            },
                          });
                        }}
                        className="hidden font-bold uppercase w-fit md:block"
                      >
                        First
                      </span>
                      <span
                        onClick={() => {
                          router.push({
                            query: {
                              ...router.query,
                              s: searchText,
                              sort: sort,
                              page: Number(page) - 1,
                              limit: limit,
                            },
                          });
                        }}
                      >
                        Previous
                      </span>
                    </div>
                  )}

                  {paginationPages
                    ?.slice(
                      Number(page) > 4 ? Number(page) - 5 : 0,
                      Number(page) + 5
                    )
                    ?.map((p, index) => {
                      console.log("pppppp ppppp ppppp", p, "page", page);
                      return (
                        <span
                          className={`${
                            Number(p) === Number(page) && styles.active
                          } ${styles.page}`}
                          key={index}
                          onClick={() =>
                            router.push({
                              query: {
                                ...router.query,
                                s: searchText,
                                sort: sort,
                                page: p,
                                limit: limit,
                              },
                            })
                          }
                        >
                          {p}
                        </span>
                      );
                    })}

                  {page && page < searchProduct?.pageNeeded && (
                    <div className="flex items-center justify-center ml-5 text-secondary gap-x-6">
                      <span
                        onClick={() =>
                          router.push({
                            query: {
                              ...router.query,
                              s: searchText,
                              sort: sort,
                              page: Number(page) + 1,
                              limit: limit,
                            },
                          })
                        }
                      >
                        Next
                      </span>
                      <span
                        onClick={() =>
                          router.push({
                            query: {
                              ...router.query,
                              s: searchText,
                              sort: sort,
                              page: searchProduct?.pageNeeded,
                              limit: limit,
                            },
                          })
                        }
                        className="hidden font-bold uppercase bg-none w-fit md:block"
                      >
                        Last
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Error
            title={searchProduct?.error}
            description={
              "Please check the spelling or try searching for something else"
            }
            image={noResultSearchError}
          />
        )
      ) : (
        <Loading width="80%" className="mx-auto" />
      )}
    </>
  );
};

export default ProductSearchPage;
