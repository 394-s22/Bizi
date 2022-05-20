import type { ReactNode } from "react";
import { Stack } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";
import { Business } from "./Business";
import { getBasicFilters } from "../utilities/filtering";

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
  // get # basic filters satisfied
  // get # advanced filter satisfied
  // (x, y)
  filteredBusinesses.sort(
    (business1: BusinessEntry, business2: BusinessEntry) => {
      const basicFilters1 = getBasicFilters(business1).length;
      const basicFilters2 = getBasicFilters(business2).length;

      if (basicFilters1 < basicFilters2) return 1;
      if (basicFilters2 < basicFilters1) return -1;

      if (business1.Initiatives?.length < business2.Initiatives?.length)
        return 1;
      if (business2.Initiatives?.length < business1.Initiatives?.length)
        return -1;
      else return 1;
    }
  );

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
