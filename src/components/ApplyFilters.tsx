import { Modal, Button } from "react-bootstrap";
import { AdvancedSearch } from "./AdvancedSearch";

type ApplyFiltersProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  advancedFilterValues: string[];
  setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ApplyFilters: React.FC<ApplyFiltersProps> = ({
  show,
  setShow,
  advancedFilterValues,
  setAdvancedFilterValues,
}) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Header>
        <Button onClick={handleClose}>Back</Button>
      </Modal.Header>
      <Modal.Title className="mx-3 mt-3">Values</Modal.Title>
      <AdvancedSearch
        advancedFilterValues={advancedFilterValues}
        setAdvancedFilterValues={setAdvancedFilterValues}
      />
      <Button onClick={handleClose}>Apply Filters</Button>
    </Modal>
  );
};
