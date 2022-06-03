import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { SearchBar } from "../components/SearchBar";
import { BusinessEntry } from "../types/BusinessTypes";
import { filterBusinesses } from "../utilities/filtering";

type SearchPageProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  loadingBusinesses: boolean | null;
  businessData: BusinessEntry[] | undefined;
  setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  searchText,
  setSearchText,
  advancedFilterValues,
  setAdvancedFilterValues,
  loadingBusinesses,
  businessData,
  setFilteredData,
}) => {
  let navigate = useNavigate();

  return (
    <>
      <p
        className="my-4 mx-auto"
        style={{ width: "20rem", fontSize: "large", textAlign: "center" }}
      >
        Find small businesses near you that support your values
      </p>
      <SearchBar
        loadingBusinesses={loadingBusinesses}
        businessData={businessData}
        searchText={searchText}
        setSearchText={setSearchText}
        advancedFilterValues={advancedFilterValues}
        setFilteredData={setFilteredData}

      />
      <br />
      {
        <div style={{ marginBottom: '9em' }}>
          <AdvancedSearch
            advancedFilterValues={advancedFilterValues}
            setAdvancedFilterValues={setAdvancedFilterValues}
          />
        </div>
      }
      <div
        className="text-center mt-3 mb-5"
        style={{
          position: "fixed",
          bottom: 5,
          width: "100%",
          background: "#ffffff",
          zIndex: 3,
        }}
      >
        <Button
          className="mb-3"
          variant="secondary"
          style={{ margin: "1em" }}
          size="lg"
          active
          onClick={() => {
            navigate("/results");
            filterBusinesses(
              loadingBusinesses,
              businessData,
              searchText,
              advancedFilterValues,
              setFilteredData
            );
          }}
        >
          Let's go!
        </Button>
      </div>
    </>
  );
};
