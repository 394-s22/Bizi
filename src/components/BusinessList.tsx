import { Business } from "./Business";
import { Stack } from "react-bootstrap";

import { BusinessEntry } from "../types/BusinessTypes";

type BusinessListProps = {
    businessList: BusinessEntry[]
}

export const BusinessList = (props: BusinessListProps ) => {
    const filteredBusinesses = props.businessList;
    return (
        <Stack direction="vertical">
            {filteredBusinesses.map((business : BusinessEntry) => <Business business={business}/>)}
        </Stack>
    );
}