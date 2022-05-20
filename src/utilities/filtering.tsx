import valueData from "../data/values.json";
import { BusinessEntry } from "../types/BusinessTypes";

const valueDictionary: { [key: string]: string[] } = valueData;

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
