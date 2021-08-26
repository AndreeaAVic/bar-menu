import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./CoffeeMenuButton.css";

export class CoffeeMenuButton extends Component {
    render() {
        return (
            <Container fluid>
                <div className="coffee-menu-button">
                    <Button variant="outline-warning" size="lg">Coffee</Button>
                </div>
            </Container>
        );
    }
}