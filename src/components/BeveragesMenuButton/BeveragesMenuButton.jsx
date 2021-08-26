import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./BeveragesMenuButton.css";

export class BeveragesMenuButton extends Component {
    render() {
        return (
            <Container fluid>
                <div className="beverages-menu-button">
                    <Button variant="outline-warning" size="lg">Beverages</Button>
                </div>
            </Container>
        );
    }
}