import { useRouter } from "next/router";
import React from "react";
import { BsSortDownAlt } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const SortWithModal = ({
  queries,
  className,
  sortModal,
  setSortModal,
}: any) => {
  const sortData = [
    { title: "Relevance", query: "relevance" },
    { title: "Popularity", query: "popularity" },
    { title: "Price - Low to High", query: "price-low-to-high" },
    { title: "Price - High to Low", query: "price-high-to-low" },
    { title: "Newest First", query: "newest-first" },
  ];
  const router = useRouter();
  // router.push({
  //   query: { ...router.query, category: "one" },
  // });

  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <label
        className={`flex items-center justify-center border-[1px] border-gray-200 py-3 w-full ${className}`}
        onClick={() => setSortModal(true)}
        htmlFor="sortModal"
      >
        <BsSortDownAlt /> Sort
      </label>
      <input type="checkbox" id="sortModal" className="modal-toggle" />
      {sortModal && (
        <>
          <label
            className="modal modal-bottom sm:modal-middle"
            htmlFor="sortModal"
          >
            <div className="modal-box rounded-none">
              <div className="font-bold border-b-[1px] border-gray-200">
                Sort By
              </div>
              {sortData.map((s, index) => (
                <label
                  htmlFor={`sort-${index + 1}`}
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <span>{s.title}</span>
                  <input
                    id={`sort-${index + 1}`}
                    type="radio"
                    onChange={() =>
                      // setSearchParams({ ...queries, sort: s.query })
                      router.push({ ...queries, sort: s.query })
                    }
                    checked={queries.sort === s.query ? true : false}
                  />
                </label>
              ))}
            </div>
          </label>
        </>
      )}
    </>
  );
};

export default SortWithModal;
