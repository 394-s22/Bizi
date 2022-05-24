import { Card } from "react-bootstrap";
import "../App.css";
import { BusinessEntry } from "../types/BusinessTypes";
import { getActiveColor, getCoreValue } from "../utilities/values";

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
  return (
    <Card>
      <div style={{ display: "flex" }}>
        <img
          src={props.imgURL}
          style={{
            margin: "auto",
            padding: "10px",
            borderRadius: "16px",
          }}
        />
        <Card.Body>
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
                justifyContent: "center",
                display: "flex",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {props.business.Initiatives?.map((val, idx) =>
                getFormattedInitiative(val, idx)
              )}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </div>
    </Card>
  );
};
