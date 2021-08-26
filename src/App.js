import { Component } from "react";
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';

import './App.css';
import { Container } from "react-bootstrap";

class App extends Component {
  state = {
    showMenuOptions: false,
  };

  changeShowMenuOptionsState = (event) => {
    console.log(this.state.showMenuOptions);
    this.setState({ showMenuOptions: !this.state.showMenuOptions });
  }

  render() {
    return (
      <Container fluid>
        <div className="App">
          <Header />
          <Menu />
        </div>
      </Container>
    );
  }
}

export default App;
