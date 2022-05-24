import { BusinessEntry } from '../types/BusinessTypes';

export const getImage = async (w: number, h: number) => {
  const fetchImage = async (w: number, h: number) => {
    const srcURL = `https://picsum.photos/${w}/${h}`;
    const response = await fetch(srcURL);
    const imgBlob = await response.blob();
    return URL.createObjectURL(imgBlob);
  };
  return await fetchImage(w, h);
};

export const setThumbnailImages = async (
  loadingBusinesses: boolean | null,
  businessData: BusinessEntry[] | undefined,
  setBusinessData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>
) => {
  if (loadingBusinesses || !businessData) return;
  let updatedBusinesses: BusinessEntry[] = [];
  Object.values(businessData).forEach((entry) =>
    updatedBusinesses.push(Object.assign({}, entry))
  );

  await Promise.all(
    Object.values(updatedBusinesses).map(async (business) => {
      return new Promise((resolve, reject) =>
        getImage(75, 75).then(
          (response: any) => {
            business.Thumbnail = response;
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            resolve(true);
          }
        )
      );
    })
  );
  setBusinessData(updatedBusinesses);
};
