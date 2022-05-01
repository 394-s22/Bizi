import { Card } from "react-bootstrap";
import { BusinessEntry } from "../types/BusinessTypes";

type BusinessProps = {
    business : BusinessEntry
}

export const Business = (props: BusinessProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.business.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.business.Subheading}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Values: {props.business.Initiatives.join(", ")}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Distance</Card.Subtitle>
            </Card.Body>
            
        </Card>
    )
}