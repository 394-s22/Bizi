// @ts-ignore
import Geocode from "react-geocode";
import { BusinessEntry } from "../types/BusinessTypes";
import { setData } from "./firebase";


export async function setLocations(
  loadingBusinesses: boolean | null,
  businessData: BusinessEntry[] | undefined,
  setBusinessData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>
) {
  if (loadingBusinesses || !businessData) return;
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY!);
  let updatedBusinesses: BusinessEntry[] = [];
  Object.values(businessData).forEach((entry) =>
    updatedBusinesses.push(Object.assign({}, entry))
  );

  await Promise.all(
    Object.entries(updatedBusinesses).map(async (business) => {
      console.log("geocoding: " + business[1].Title);
      return new Promise((resolve, reject) =>
        Geocode.fromAddress(business[1].Address).then(
          (response: any) => {
            business[1].GeoLocation = response.results[0].geometry.location;
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
  setData('/', updatedBusinesses);
}
