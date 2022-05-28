import React from "react";
import { BusinessList } from "../components/BusinessList";
import { SearchBar } from "../components/SearchBar";
import { BiziMap } from "../components/BiziMap";
import { BusinessEntry } from "../types/BusinessTypes";

type ResultsProps = {
  businessList: BusinessEntry[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filterValues: string[];
  advancedFilterValues: string[];
};

export const Results: React.FC<ResultsProps> = ({
  businessList,
  searchText,
  setSearchText,
  filterValues,
  advancedFilterValues,
}) => {
  //const [text, setText] = useState(''); // for Let's Go
  return (
    <>
      <div
        className="my-3"
        style={{ position: "absolute", zIndex: "2", width: "100%" }}
      >
        <SearchBar setSearchText={setSearchText} searchText={searchText} />
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
    </>
  );
};
