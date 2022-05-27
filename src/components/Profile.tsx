import { BusinessEntry } from "../types/BusinessTypes";
import { Modal, Button } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import diversityLogo from "../logos/diversity.png";
import communityLogo from "../logos/community.png";
import sustainabilityLogo from "../logos/sustainability.png";
import ethicalLogo from "../logos/ethical.png";
import { getBusinessCoreValues } from "../utilities/values";

type ProfileProps = {
  business: BusinessEntry;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const getLogo = (value: string) => {
  switch (value) {
    case "Diversity":
      return diversityLogo;
    case "Community":
      return communityLogo;
    case "Sustainability":
      return sustainabilityLogo;
    case "Ethical":
      return ethicalLogo;
    default:
      return;
  }
};

export const Profile: React.FC<ProfileProps> = (props) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.setShow(false);
  };

  const coreValues = getBusinessCoreValues(props.business);

  return (
    <Modal show={props.show} fullscreen={true} onClose={handleClose}>
      <Modal.Header>
        <Button variant="light" onClick={handleClose}>
          <FaAngleLeft></FaAngleLeft>Results
        </Button>
      </Modal.Header>
      <Modal.Title className="mx-3 mt-3" style={{fontSize: 'x-large'}}>{props.business.Title}</Modal.Title>
      <Modal.Title className="mx-3 text-muted" style={{fontSize: 'medium'}}>{props.business['Business Type']}</Modal.Title>
      <Modal.Body>
        <>
          <div>
            {Array.from(coreValues).map((value: string) => {
            const logo = getLogo(value);
            console.log(logo);
            return <img width="100px" height="100px" src={logo} alt={value}/>
            })}
          </div>
          {props.business.Description}
        </>
      </Modal.Body>
    </Modal>
  );
};
