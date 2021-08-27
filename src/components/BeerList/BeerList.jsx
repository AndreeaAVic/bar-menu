import { Component } from "react";
import { Container, Table } from "react-bootstrap";

import "./BeerList.css";

export class BeerList extends Component {
    render() {
        return (
            <Container fluid>
                <div className="beer-list">
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