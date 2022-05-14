import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { BasicFilter } from "../components/BasicFilter";
import { SearchBar } from "../components/SearchBar";
import { BusinessEntry } from "../types/BusinessTypes";

type SearchPageProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  filterValues: string[];
  setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  setBasicFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  searchText,
  setSearchText,
  advancedFilterValues,
  setAdvancedFilterValues,
  filterValues,
  setFilterValues,
  setBasicFilterValues
}) => {
  const [searchComponent, setSearchComponent] = useState<string>("basic");
  let navigate = useNavigate();

  return (
    <>
      <p
        className="my-4 mx-auto"
        style={{ width: "20rem", fontSize: "large", textAlign: "center" }}
      >
        Find small businesses near you that support your values
      </p>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <br />
      {searchComponent === "basic" ? (
        <BasicFilter
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          setAdvancedFilterValues={setAdvancedFilterValues}
          searchComponent={searchComponent}
          setSearchComponent={setSearchComponent}
        />
      ) : (
        <AdvancedSearch
          advancedFilterValues={advancedFilterValues}
          setAdvancedFilterValues={setAdvancedFilterValues}
          searchComponent={searchComponent}
          setSearchComponent={setSearchComponent}
          setBasicFilterValues={setBasicFilterValues}
        />
      )}
      <div className="text-center mt-3 mb-5">
        <Button
          className="mb-3"
          variant="secondary"
          size="lg"
          active
          onClick={() => {
            navigate("/results");
          }}
        >
          Let's go!
        </Button>
      </div>
    </>
  );
};
