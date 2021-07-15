import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./Menu.css";

export class Menu extends Component {
    handleClickedElement = () => {
        console.log("clicked");
    }

    render() {
        return (
            <Container fluid>
                <div className="menu-container">
                    <Button variant="dark" size="lg" onClick={this.handleClickedElement}>Menu</Button>
                </div>
            </Container>
        );
    }
}