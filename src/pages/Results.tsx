import { BusinessList } from "../components/BusinessList";
import { BusinessEntry } from "../types/BusinessTypes";

type ResultsProps = {
    businessList: BusinessEntry[];
};

export const Results = ({ businessList }: ResultsProps) => {
    return (
        <BusinessList businessList={businessList} />
    );
};
