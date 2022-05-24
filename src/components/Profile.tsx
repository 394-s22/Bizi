import { BusinessEntry } from "../types/BusinessTypes";
import { Modal, Button } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

type ProfileProps = {
    business: BusinessEntry;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Profile: React.FC<ProfileProps> = (props) => {
    
    const handleClose = () => {
        //e.stopPropagation();
        // also clicking behind the modal (see: business.tsx console.log('hi')) 
        props.setShow(false);
        console.log('hiding');
        console.log(props.show);
    }

    return (
        <Modal show={props.show} fullscreen={props.show ? true : undefined} onClose={handleClose}>
            <Modal.Header>
                <Button variant="light" onClick={handleClose}>
                    <FaAngleLeft></FaAngleLeft>Results
                </Button>
            </Modal.Header>
            <Modal.Title className="mx-3">{props.business.Title}</Modal.Title>
            <Modal.Body>{props.business.Description}</Modal.Body>
        </Modal>
        
    )
};