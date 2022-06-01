import { BusinessEntry } from "../types/BusinessTypes";
import { valueDictionary } from "../utilities/values";

export const getCoreValue = (subvalue: string) => {
  return Object.keys(valueDictionary).find((key) =>
    valueDictionary[key].includes(subvalue)
  ) as string;
};

export const getBasicFilters = (business: BusinessEntry) => {
  const result = new Set<string>();
  if (!business || !business.Initiatives) return Array.from(result);

  business.Initiatives.forEach((value) => result.add(getCoreValue(value)));
  return Array.from(result);
};

export function intersect(keywords: Array<string>, tags: Array<string>) {
  return keywords.filter((keyword) =>
    tags.some((tag) => tag?.includes(keyword))
  );
}

export function filterBusinesses(
  loadingBusinesses: boolean | null,
  businessData: BusinessEntry[] | undefined,
  searchText: string,
  advancedFilterValues: string[],
  setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>
) {
  // app page selection
  if (loadingBusinesses || !businessData) return;
  const advancedFilteredBusinesses = Object.values(businessData).filter(
    (business) => {
      for (const value of advancedFilterValues) {
        if (business.Initiatives?.includes(value)) {
          return true;
        }
      }
      return false;
    }
  );

  const filteredText = searchText.split(" ");

  const finalFilteredBusinesses = Object.values(
    advancedFilterValues.length > 0 ? advancedFilteredBusinesses : businessData
  ).filter(
    (business) =>
      intersect(
        filteredText.map((text) => text.toLowerCase()),
        business["Search Tags"] !== undefined
          ? business["Search Tags"]
              .concat([business.Title, business.Description])
              .map((text) => text?.toLowerCase())
          : []
      ).length > 0
  );

  // prioritize businesses that fulfill the most selected BASIC filters
  // then sort by the number of advanced filters satisfied (regardless of the category)
  // get # basic filters satisfied
  // get # advanced filter satisfied
  // (x, y)

  finalFilteredBusinesses.sort(
    (business1: BusinessEntry, business2: BusinessEntry) => {
      const basicFilters1 = matchedBasicFilters(business1, advancedFilterValues);
      const basicFilters2 = matchedBasicFilters(business2, advancedFilterValues);

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

  setFilteredData(finalFilteredBusinesses);
}

export const matchedBasicFilters = (business: BusinessEntry, advancedFilterValues: string[]) => {
  const filterValues = Array.from(
    new Set(advancedFilterValues
      .map(value => getCoreValue(value))));
  if (filterValues === []) return 0;
  const basic = getBasicFilters(business);
  return intersect(basic, filterValues).length;
};