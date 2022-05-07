import { Business } from "./Business";
import type { ReactNode } from "react";
import { Stack } from "react-bootstrap";

import { BusinessEntry } from "../types/BusinessTypes";

type BusinessListProps = {
    businessList: BusinessEntry[]
}

export const BusinessList = (props: BusinessListProps ) => {
    const filteredBusinesses = props.businessList;
    console.log('filterbusniesses prop', filteredBusinesses);
    return (
        <Stack direction="vertical">
            {Object.values(filteredBusinesses).map<ReactNode>((business : BusinessEntry, key: number) => <Business key={key} business={business}/>)}
        </Stack>
    );
}