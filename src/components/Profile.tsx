import { BusinessEntry } from "../types/BusinessTypes";
import { Modal, Button } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

type ProfileProps = {
  business: BusinessEntry;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Profile: React.FC<ProfileProps> = (props) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.setShow(false);
  };

  return (
    <Modal show={props.show} fullscreen={true} onClose={handleClose}>
      <Modal.Header>
        <Button variant="light" onClick={handleClose}>
          <FaAngleLeft></FaAngleLeft>Results
        </Button>
      </Modal.Header>
      <Modal.Title className="mx-3">{props.business.Title}</Modal.Title>
      <Modal.Body>{props.business.Description}</Modal.Body>
    </Modal>
  );
};
