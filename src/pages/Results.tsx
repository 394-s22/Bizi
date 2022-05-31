import React from "react";
import { useState } from "react";
import { BusinessList } from "../components/BusinessList";
import { SearchBar } from "../components/SearchBar";
import { BiziMap } from "../components/BiziMap";
import { BusinessEntry } from "../types/BusinessTypes";
import { Button } from "react-bootstrap";
import { ApplyFilters } from "../components/ApplyFilters";
import { BiFilter } from "react-icons/bi";

type ResultsProps = {
  businessList: BusinessEntry[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filterValues: string[];
  setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Results: React.FC<ResultsProps> = ({
  businessList,
  searchText,
  setSearchText,
  filterValues,
  setFilterValues,
  advancedFilterValues,
  setAdvancedFilterValues,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="my-3"
        style={{ position: "absolute", zIndex: "2", width: "100%" }}
      >
        <SearchBar setSearchText={setSearchText} searchText={searchText} />
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          style={{
            backgroundColor: "#ddd",
            borderColor: "gray",
            color: "black",
            padding: "5px 10px",
            textAlign: "center",
            margin: "2px 1px",
            marginLeft: "10%",
            borderRadius: "10px",
            fontSize: "small",
          }}
        >
          Values <BiFilter />
        </Button>
      </div>
      <BiziMap businessList={businessList} />
      <h1 className="mx-3 my-3">Results</h1>
      {businessList.length > 0 ? (
        <div className="mb-5">
          <BusinessList
            businessList={businessList}
            filterValues={filterValues}
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p style={{ color: "grey", fontSize: "large" }}>
            No results found . . .
          </p>
        </div>
      )}
      <ApplyFilters
        show={showModal}
        setShow={setShowModal}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        advancedFilterValues={advancedFilterValues}
        setAdvancedFilterValues={setAdvancedFilterValues}
      />
    </>
  );
};
