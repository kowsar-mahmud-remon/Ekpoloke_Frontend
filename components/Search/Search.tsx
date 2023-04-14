import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import { getSearchUrl } from "../../urlConfig";
import { useRouter } from "next/router";
import { getSearchUrl } from "@/urlConfig";
import styles from "./Search.module.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [searchParams] = useSearchParams();
  const router = useRouter();
  const { s } = router.query;
  console.log("router2 router2 router2", s);
  console.log("router22222 router22222222 router222222", router?.asPath);
  console.log("router4444444 router4444444222 router44444442", searchValue);
  // const location = useLocation();
  // const navigate = useNavigate();
  useEffect(() => {
    if (router.asPath === "/search/product") {
      const searchValue = s;
      console.log("searchValue under useEffect", s);
      setSearchValue(searchValue);
    }
  }, [router?.asPath, s]);
  // [location.pathname, searchParams]);
  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    console.log("searchValue searchValue searchValue", searchValue);
    const newRouter = getSearchUrl(searchValue);
    console.log("newRouter newRouter newRouter", newRouter);
    router.push(getSearchUrl(searchValue));
  };
  return (
    <div className="flex-1 my-2 bg-white block md:hidden py-2 px-3">
      <form onSubmit={handleSubmitSearch} className={`${styles.search}`}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e?.target?.value)}
          placeholder="Search..."
        />
        <button className="py-0 px-3 lg:px- md:px-6 sm:px-2">
          <ImSearch /> Search
        </button>
      </form>
    </div>
  );
};

export default Search;
