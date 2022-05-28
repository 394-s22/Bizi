import { BusinessEntry } from "../types/BusinessTypes";
import { valueDictionary } from "../utilities/values";

export function getBasicFilters(business: BusinessEntry) {
  const advancedFilters: string[] = business.Initiatives;
  let basicFilters: string[] = [];
  advancedFilters?.forEach((filter) => {
    for (const [key, value] of Object.entries(valueDictionary)) {
      // if filter in value, append key to basicFilters
      if (value.includes(filter) && !basicFilters.includes(key))
        basicFilters.push(key);
    }
  });
  return basicFilters;
}

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
  setFilteredData(finalFilteredBusinesses);
}
