import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdvancedSearch } from "../components/AdvancedSearch";
import { SearchBar } from "../components/SearchBar";

type SearchPageProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  filterValues: string[];
  setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  searchText,
  setSearchText,
  advancedFilterValues,
  setAdvancedFilterValues,
  filterValues,
  setFilterValues
}) => {
  const [text, setText] = useState(""); // for Let's Go
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
        text={text}
        setText={setText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <br />
      {
        <AdvancedSearch
          advancedFilterValues={advancedFilterValues}
          setAdvancedFilterValues={setAdvancedFilterValues}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
        />
      }
      <div className="text-center mt-3 mb-5">
        <Button
          className="mb-3"
          variant="secondary"
          size="lg"
          active
          onClick={() => {
            navigate("/results");
            setSearchText(text);
          }}
        >
          Let's go!
        </Button>
      </div>
    </>
  );
};
