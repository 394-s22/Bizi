import type { ReactNode } from "react";
import { Stack } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";
import { Business } from "./Business";

type BusinessListProps = {
  businessList: BusinessEntry[];
  filterValues: string[];
  advancedFilterValues: string[];
};

export const BusinessList: React.FC<BusinessListProps> = ({ businessList }) => {
  const filteredBusinesses = businessList;
  // need to pass in the list of basic/advanced filter values that were selected 
  // prioritize businesses that fulfill the most BASIC filters 
  // then sort by the number of advanced filters satisfied (regardless of the category)
  return (
    <Stack direction="vertical">
      {Object.values(filteredBusinesses).map<ReactNode>(
        (business: BusinessEntry, key: number) => (
          <Business key={key} business={business} />
        )
      )}
    </Stack>
  );
};
