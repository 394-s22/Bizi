export type BusinessEntry = {
    Title: string,
    Description: string,
    BusinessType : string, 
    //Policies    : string[], //["", ..., ""] (optional field),
    Initiatives : string[], //["initiative 1", "initiative 2", "initiative 3"] (choose any, optional field),
    Website? : string, //"" (optional field),
    //Delivery?    : string, //(optional field),
    //Reservations?    : string, //"" //(optional field),
    PhoneNumber    : string, //"" ,//(required)
    Address : string, //(required),
    //PriceRange : 1 | 2 | 3 | 4,//1-4(required),
    Schedule : number[][],//[[open(decimal between 0 and 24, representing 24 - hour time OR - 1 if closed on that day), close(same)], [open, close], ..., [open, close]](Monday, Tuesday, Wednesday, ..., Sunday) (required),
    //Discounts?: ,//[[% discount, quantity available], ..., [% discount, quantity available]](optional field, keep blank since we don’t have this established yet),
    Subheading: string,//“Business Type such as Grocery Store, Liquor Shop...”
    SearchTags: string[], //(required),
    Approved: boolean   // 
}