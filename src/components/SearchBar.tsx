import React from "react";
import { Form, Stack } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";
import { filterBusinesses } from "../utilities/filtering";

type SearchBarProps = {
  loadingBusinesses: boolean | null;
  businessData: BusinessEntry[] | undefined;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  advancedFilterValues: string[];
  setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  loadingBusinesses,
  businessData,
  searchText,
  setSearchText,
  advancedFilterValues,
  setFilteredData,
}) => {
  return (
    <Stack style={{ width: "80%", margin: "auto" }} direction="horizontal">
      <Form.Control
        className="me-auto"
        placeholder="Search Keywords"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === "Enter"
            ? filterBusinesses(
                loadingBusinesses,
                businessData,
                searchText,
                advancedFilterValues,
                setFilteredData
              )
            : null
        }
        style={{
          backgroundColor: "lightgrey",
          borderColor: "gray",
          borderRadius: "10px",
        }}
      />
    </Stack>
  );
};
