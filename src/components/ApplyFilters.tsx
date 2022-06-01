import { Modal, Button } from "react-bootstrap";
import { AdvancedSearch } from "./AdvancedSearch";
import { BusinessEntry } from "../types/BusinessTypes";
import { filterBusinesses } from "../utilities/filtering";

type ApplyFiltersProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
  searchText: string;
  loadingBusinesses: boolean | null;
  businessData: BusinessEntry[] | undefined;
  setFilteredData: React.Dispatch<React.SetStateAction<BusinessEntry[]>>;
  advFilterValuesInitial: string[];
  setInitialState: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ApplyFilters: React.FC<ApplyFiltersProps> = ({
  show,
  setShow,
  advancedFilterValues,
  setAdvancedFilterValues,
  searchText,
  loadingBusinesses,
  businessData,
  setFilteredData,
  advFilterValuesInitial,
  setInitialState,
}) => {
  const handleClose = () => {
    setAdvancedFilterValues(advFilterValuesInitial);
    setShow(false);
  };

  const handleReset = () => {
    setAdvancedFilterValues([]);
  };

  const handleApply = () => {
    filterBusinesses(
      loadingBusinesses,
      businessData,
      searchText,
      advancedFilterValues,
      setFilteredData
    );
    setShow(false);
  };

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Header>
        <Button onClick={handleClose}>Back</Button>
        <Button style={{ float: "right" }} onClick={handleReset}>
          Reset
        </Button>
      </Modal.Header>
      <Modal.Title className="mx-3 mt-3">Values</Modal.Title>
      <AdvancedSearch
        advancedFilterValues={advancedFilterValues}
        setAdvancedFilterValues={setAdvancedFilterValues}
      />
      <Button onClick={handleApply}>Apply Filters</Button>
    </Modal>
  );
};
