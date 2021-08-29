import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ChoiceButton from "../ChoiceButton/ChoiceButton";
import { BeerList } from "../BeerList/BeerList";
import { BeveragesList } from "../BeveragesList/BeveragesList";
import { CoffeeList } from "../CoffeeList/CoffeeList";
import { AlcoholList } from "../AlcoholList/AlcoholList";

import "./Menu.css";

const EmptyComponent = () => <></>;
const list = {
    none: EmptyComponent,
    beer: BeerList,
    beverages: BeveragesList,
    coffee: CoffeeList,
    alcohol: AlcoholList
}
export class Menu extends Component {
    state = {
        showHideMenu: false,
        listName: 'none',
    };

    changeShowHideMenuState = () => {
        this.setState({ showHideMenu: !this.state.showHideMenu });
    }
    
    handleOnClick = (btnName) => {
        this.setState({ listName: btnName, showHideMenu: false });

    }
    
    render() {
        console.log(this.state.listName);
        const ListComponent = list[this.state.listName];
        return (
            <Container fluid>
                <div className="menu-container">
                    <Button variant="dark" size="lg" onClick={this.changeShowHideMenuState}>Menu</Button>
                    { this.state.showHideMenu && <> 
                        <ChoiceButton name={'coffee'} onClick={this.handleOnClick}/>
                        <ChoiceButton name={'beverages'} onClick={this.handleOnClick}/>
                        <ChoiceButton name={'beer'} onClick={this.handleOnClick}/>
                        <ChoiceButton name={'alcohol'} onClick={this.handleOnClick}/>
                    </> }
                    <ListComponent />
                </div>
            </Container>
        );
    }
}