import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./AlcoholMenuButton.css";

export class AlcoholMenuButton extends Component {
    render() {
        return (
            <Container fluid>
                <div className="alcohol-menu-button">
                    <Button variant="outline-warning" size="lg">+18 Drinks</Button>
                </div>
            </Container>
        ); 
    }
}