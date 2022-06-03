import { BusinessEntry } from "../types/BusinessTypes";
export const getImage = async (width: number, height: number) => {
  const srcURL = `https://picsum.photos/${width}/${height}`;
  const response = await fetch(srcURL);
  const imgBlob = await response.blob();
  const reader = new FileReader();
  return new Promise<string>((resolve, reject) => {
    reader.onloadend = (_e) => resolve(reader.result as string);
    reader.readAsDataURL(imgBlob);
  });
};

export const getImageArray = async (
  width: number,
  height: number,
  count: number
) => {
  const result: string[] = [];
  while (count > 0) {
    const imgURL = await getImage(width, height);
    result.push(imgURL);
    count--;
  }
  return result;
};

export const setThumbnailImages = async (
  loadingBusinesses: boolean | null,
  businessData: BusinessEntry[] | undefined,
  setBusinessData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>
) => {
  if (loadingBusinesses || !businessData) return;
  const imgArray = await getImageArray(
    75,
    75,
    Object.keys(businessData).length
  );

  setBusinessData((data) => {
    return Object.values(data).map((business, idx) => {
      business.Thumbnail = imgArray[idx];
      return business;
    });
  });
};
