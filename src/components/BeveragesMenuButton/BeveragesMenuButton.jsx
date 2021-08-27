import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BeveragesList } from "../BeveragesList/BeveragesList";

import "./BeveragesMenuButton.css";

export class BeveragesMenuButton extends Component {
    state = {
        showOptions: false,
    }

    showBeverages = () => {
        this.setState({ showOptions: !this.state.showOptions });
    }

    render() {
        return (
            <Container fluid>
                <div className="beverages-menu-button">
                    <Button variant="outline-warning" size="lg" onClick={this.showBeverages}>Beverages</Button>
                    {this.state.showOptions ? <BeveragesList /> : null}
                </div>
            </Container>
        );
    }
}