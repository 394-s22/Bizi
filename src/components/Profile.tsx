import { BusinessEntry } from "../types/BusinessTypes";
import { Modal, Button, Carousel, ButtonGroup, Row, Col } from "react-bootstrap";
import { FaAngleLeft, FaPhoneAlt, FaMapMarkedAlt, FaClipboard } from "react-icons/fa";
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

      <Modal.Title>
        <Carousel style={{height: "20%", width: "100%" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://i.picsum.photos/id/549/390/200.jpg?hmac=DebyxWg4u0tOmsYNHOSvyiFpbw_dASsJBggIb7pZhKE"}
              style={{objectFit: "cover"}}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://i.picsum.photos/id/882/390/200.jpg?hmac=J0QEyauZvH5lwY422twsEif1bRI6FRvaxBXNueUKIpc"}
              style={{objectFit: "cover"}}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Title>

      <Modal.Title className="mx-3 mt-3" style={{fontSize: 'x-large'}}>{props.business.Title}</Modal.Title>
      <Modal.Title className="mx-3 text-muted" style={{fontSize: 'medium'}}>{props.business['Business Type']}</Modal.Title>
      <Modal.Title className="mx-3">
        <div>
            {Array.from(coreValues).map((value: string) => {
            const logo = getLogo(value);
            console.log(logo);
            return <img width="50px" height="50px" src={logo} alt={value}/>
            })}
        </div>
      </Modal.Title>
      <Modal.Title className="d-flex mx-3 justify-content-center">
        <Row>
          <Col>
            <Button style={{borderRadius: "50%"}} className="mx-2" variant="outline-secondary">
                <FaPhoneAlt></FaPhoneAlt>
            </Button>
            <p style={{textAlign: "center", fontSize: "small"}}>Call</p>
          </Col>
          <Col>
            <Button style={{borderRadius: "50%"}} className="mx-2" variant="outline-secondary">
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </Button>
            <p style={{fontSize: "small"}}>Directions</p>
          </Col>
          <Col>
              <form action={props.business.Website || ""} target="_blank">
                <Button type="submit" style={{borderRadius: "50%"}} className="mx-2" variant="outline-secondary">
                  <FaClipboard ></FaClipboard></Button>
              </form>
              <p style={{textAlign: "center", fontSize: "small"}}>Website</p>
          </Col>
        </Row>
      </Modal.Title>
      <Modal.Body>
          {props.business.Description}
      </Modal.Body>
    </Modal>
  );
};
