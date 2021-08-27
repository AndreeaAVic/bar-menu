import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BeerList } from "../BeerList/BeerList";

import "./BeerMenuButton.css";

export class BeerMenuButton extends Component {
    state = {
        showOptions: false,
    }

    showBeers = () => {
        this.setState({ showOptions: !this.state.showOptions });
    }

    render() {
        return (
            <Container fluid>
                <div className="beer-menu-button">
                    <Button variant="outline-warning" size="lg" onClick={this.showBeers}>Beer</Button>
                    {this.state.showOptions ? <BeerList /> : null}
                </div>
            </Container>
        );
    }
}