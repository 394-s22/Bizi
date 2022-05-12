import type { ReactNode } from "react";
import { Stack } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";
import { Business } from "./Business";

type BusinessListProps = {
  businessList: BusinessEntry[];
};

export const BusinessList: React.FC<BusinessListProps> = ({ businessList }) => {
  const filteredBusinesses = businessList;
  return (
    <Stack direction="vertical">
      {Object.values(filteredBusinesses).map<ReactNode>(
        (business: BusinessEntry, key: number) => (
          <Business key={key} business={business} />
        )
      )}
    </Stack>
  );
};
