import { match } from "assert";
import type { ReactNode } from "react";
import { Stack } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";
import { getBasicFilters, intersect } from "../utilities/filtering";
import { Business } from "./Business";

type BusinessListProps = {
  businessList: BusinessEntry[];
  filterValues: string[];
};

export const BusinessList: React.FC<BusinessListProps> = ({
  businessList,
  filterValues,
}) => {
  const filteredBusinesses = businessList;

  const matchedBasicFilters = (business: BusinessEntry) => {
    if (filterValues === []) return 0;
    const basic = getBasicFilters(business);
    return intersect(basic, filterValues).length;
  };
  // prioritize businesses that fulfill the most selected BASIC filters
  // then sort by the number of advanced filters satisfied (regardless of the category)
  // get # basic filters satisfied
  // get # advanced filter satisfied
  // (x, y)
  filteredBusinesses.sort(
    (business1: BusinessEntry, business2: BusinessEntry) => {
      const basicFilters1 = matchedBasicFilters(business1);
      const basicFilters2 = matchedBasicFilters(business2);

      if (basicFilters1 < basicFilters2) return 1;
      if (basicFilters2 < basicFilters1) return -1;

      const initiatives1 = business1.Initiatives
        ? business1.Initiatives.length
        : 0;
      const initiatives2 = business2.Initiatives
        ? business2.Initiatives.length
        : 0;

      if (initiatives1 < initiatives2) return 1;
      if (initiatives2 < initiatives1) return -1;
      else return 1;
    }
  );

  return (
    <Stack direction="vertical">
      {Object.values(filteredBusinesses).map<ReactNode>(
        (business: BusinessEntry, key: number) => (
          <Business
            key={key}
            business={business}
            imgURL={business.Thumbnail || ""}
          />
        )
      )}
    </Stack>
  );
};
