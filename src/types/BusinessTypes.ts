export type coordinate = { lat: number; lng: number };

export type BusinessEntry = {
  Title: string;
  Description: string;
  BusinessType: string;
  Initiatives: string[]; //["initiative 1", "initiative 2", "initiative 3"] (choose any, optional field),
  Website?: string; //"" (optional field),
  PhoneNumber: string; //"" ,//(required)
  Address: string; //(required),
  GeoLocation?: coordinate;
  Schedule: number[][]; //[[open(decimal between 0 and 24, representing 24 - hour time OR - 1 if closed on that day), close(same)], [open, close], ..., [open, close]](Monday, Tuesday, Wednesday, ..., Sunday) (required),
  Subheading: string; //“Business Type such as Grocery Store, Liquor Shop...”
  'Search Tags': string[]; //(required),
  Approved: boolean; //
};
