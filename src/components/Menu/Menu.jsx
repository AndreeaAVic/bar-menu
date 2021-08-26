import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AlcoholMenuButton } from "../AlcoholMenuButton/AlcoholMenuButton";
import { BeerMenuButton } from "../BeerMenuButton/BeerMenuButton";
import { BeveragesMenuButton } from "../BeveragesMenuButton/BeveragesMenuButton";
import { CoffeeMenuButton } from "../CoffeeMenuButton/CoffeeMenuButton";

import "./Menu.css";

export class Menu extends Component {
    state = {
        showHideMenu: false,
    };

    changeShowHideMenuState = () => {
        console.log(this.state.showHideMenu);
        this.setState({ showHideMenu: !this.state.showHideMenu });
    }

    render() {
        return (
            <Container fluid>
                <div className="menu-container">
                    <Button variant="dark" size="lg" onClick={this.changeShowHideMenuState}>Menu</Button>
                    {this.state.showHideMenu ? <CoffeeMenuButton /> : null}
                    {this.state.showHideMenu ? <BeveragesMenuButton /> : null}
                    {this.state.showHideMenu ? <BeerMenuButton /> : null}
                    {this.state.showHideMenu ? <AlcoholMenuButton /> : null}
                </div>
            </Container>
        );
    }
}