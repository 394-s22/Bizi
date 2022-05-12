import React from "react";
import { BusinessList } from "../components/BusinessList";
import { SearchBar } from "../components/SearchBar";
import { BusinessEntry } from "../types/BusinessTypes";

type ResultsProps = {
  businessList: BusinessEntry[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const Results: React.FC<ResultsProps> = ({
  businessList,
  searchText,
  setSearchText,
}) => {
  return (
    <>
      <div className="my-3">
        <SearchBar setSearchText={setSearchText} searchText={searchText} />
      </div>
      {businessList.length > 0 ? (
        <div className="mb-5">
          <BusinessList businessList={businessList} />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p style={{ color: "grey", fontSize: "large" }}>
            No results found . . .
          </p>
        </div>
      )}
    </>
  );
};
