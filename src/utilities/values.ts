import valueData from "../data/values.json";
import { BusinessEntry } from "../types/BusinessTypes";

export const valueDictionary: { [key: string]: string[] } = valueData;

export const getActiveColor = (val: string) => {
  switch (val) {
    case "Diversity":
      return "#FDC269";
    case "Community":
      return "#8FC4EB";
    case "Sustainability":
      return "#78CC5B";
    case "Ethical":
      return "#F47369";
    default:
      return "#ddd";
  }
};

export const getCoreValue = (subvalue: string) => {
  return Object.keys(valueDictionary).find((key) =>
    valueDictionary[key].includes(subvalue)
  ) as string;
};

export const getBusinessCoreValues = (business: BusinessEntry) => {
  const result = new Set<string>();
  if (!business || !business.Initiatives) return result;

  business.Initiatives.forEach((value) => result.add(getCoreValue(value)));
  return result;
};
