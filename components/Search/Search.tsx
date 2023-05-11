import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useRouter } from "next/router";
import { getSearchUrl } from "@/urlConfig";
import styles from "./Search.module.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string | string[] | undefined>(
    ""
  );
  const router = useRouter();
  const { s } = router.query;

  useEffect(() => {
    if (router.asPath === "/search/product") {
      const searchValue = s;
      setSearchValue(searchValue);
    }
  }, [router?.asPath, s]);
  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    const newRouter = getSearchUrl(searchValue);
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
        <button className="py-0 px-3 lg:px- md:px-6 sm:px-2 sm:pb-[2px] font-medium">
          <ImSearch /> Search
        </button>
      </form>
    </div>
  );
};

export default Search;
