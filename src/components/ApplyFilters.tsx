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
    <Modal show={show} onClose={handleClose} centered>
      <Modal.Header style={{ borderBottom: "none" }}>
        <a
          style={{ color: "#304FF9", fontWeight: "bold" }}
          onClick={handleClose}
        >
          Back
        </a>
        <a
          style={{ color: "#304FF9", fontWeight: "bold", float: "right" }}
          onClick={handleReset}
        >
          Reset
        </a>
      </Modal.Header>
      <Modal.Title className="mx-4 mb-3">Values</Modal.Title>
      <AdvancedSearch
        advancedFilterValues={advancedFilterValues}
        setAdvancedFilterValues={setAdvancedFilterValues}
      />
      <div className="text-center">
        <Button
          className="py-2 m-3"
          style={{
            borderRadius: "14px",
            fontSize: "larger",
            fontWeight: "bold",
            backgroundColor: "#1539FA",
            width: "80%",
          }}
          onClick={handleApply}
        >
          Apply Filters
        </Button>
      </div>
    </Modal>
  );
};
