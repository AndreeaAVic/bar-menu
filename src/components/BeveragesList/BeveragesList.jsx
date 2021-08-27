import { Component } from "react";
import { Container, Table } from "react-bootstrap";

import "./BeveragesList.css";

export class BeveragesList extends Component {
    render() {
        return (
            <Container fluid>
                <div className="beverages-list">
                    <Table borderless hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Currency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                </tr>
                            </tbody>
                    </Table>
                </div>
            </Container>
        );
    }
}