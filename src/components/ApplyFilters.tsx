import { Modal, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { AdvancedSearch } from "./AdvancedSearch"


type ApplyFiltersProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    filterValues: string[];
    setFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
    advancedFilterValues: string[];
    setAdvancedFilterValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ApplyFilters: React.FC<ApplyFiltersProps> = ({
    show,
    setShow,
    filterValues,
    setFilterValues,
    advancedFilterValues,
    setAdvancedFilterValues
}) => {
    const handleClose = () => {
        setShow(false);
    }

    return (
        <Modal show={show} onClose={handleClose}>
            <Modal.Header>
                <Button onClick={handleClose}>Back</Button>
            </Modal.Header>
            <Modal.Title className='mx-3 mt-3'>Values</Modal.Title>
            <AdvancedSearch
                advancedFilterValues={advancedFilterValues}
                setAdvancedFilterValues={setAdvancedFilterValues}
                filterValues={filterValues}
                setFilterValues={setFilterValues}
            />
            <Button>Apply Filters</Button>
        </Modal>
    )
}