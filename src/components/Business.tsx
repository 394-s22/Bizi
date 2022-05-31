import { Card } from "react-bootstrap";
import "../App.css";
import { BusinessEntry } from "../types/BusinessTypes";
import { getActiveColor, getCoreValue } from "../utilities/values";
import { Profile } from "./Profile";
import { useState } from "react";

const buttonStyle: React.CSSProperties = {
  border: "none",
  borderRadius: "16px",
  backgroundColor: "#ddd",
  color: "black",
  paddingLeft: "7px",
  paddingRight: "7px",
  paddingTop: "3px",
  paddingBottom: "3px",
  marginLeft: "5px",
  textAlign: "center",
  fontSize: "small",
};

const getFormattedInitiative = (val: string, idx: number) => {
  const coreValue = getCoreValue(val);
  const buttonColor = getActiveColor(coreValue);
  return (
    <span style={{ ...buttonStyle, backgroundColor: buttonColor }} key={idx}>
      {val}
    </span>
  );
};

type BusinessProps = {
  business: BusinessEntry;
  imgURL: string;
};

export const Business: React.FC<BusinessProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card
      onClick={() => {
        setShowModal(true);
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src={props.imgURL}
          style={{
            borderRadius: "16px",
          }}
        />
        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Card.Title>{props.business.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.business.Subheading}
          </Card.Subtitle>
          <Card.Subtitle
            style={{ alignItems: "center", display: "flex" }}
            className="mb-2 text-muted"
          >
            <span style={{ marginRight: "3px" }}>Values:</span>
            <div
              className="invisible-scrollbar"
              style={{
                alignItems: "center",
                display: "flex",
                whiteSpace: "nowrap",
                overflow: "scroll",
              }}
            >
              {props.business.Initiatives?.map((val, idx) =>
                getFormattedInitiative(val, idx)
              )}
            </div>
          </Card.Subtitle>
        </div>
      </Card.Body>
      <Profile
        business={props.business}
        show={showModal}
        setShow={setShowModal}
      />
    </Card>
  );
};
