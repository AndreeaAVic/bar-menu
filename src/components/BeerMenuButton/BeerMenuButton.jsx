import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./BeerMenuButton.css";

export class BeerMenuButton extends Component {
    render() {
        return (
            <Container fluid>
                <div className="beer-menu-button">
                    <Button variant="outline-warning" size="lg">Beer</Button>
                </div>
            </Container>
        );
    }
}