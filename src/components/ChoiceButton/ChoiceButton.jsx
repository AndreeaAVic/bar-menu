import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./ChoiceButton.css";

const ChoiceButton = (props) => {
    return (
        <Container fluid>
            <div className="choice-button">
                <Button variant="outline-warning" size="lg" onClick={() => props.onClick(props.name)}>{props.name}</Button>
            </div>
        </Container>
    );
}

export default ChoiceButton;