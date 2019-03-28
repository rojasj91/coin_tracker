import React, {Component} from 'react';

import Alert from './Alerts'

import {Table} from "react-bootstrap";

import { Nav } from"react-bootstrap";

import { Navbar } from"react-bootstrap";

import { Form } from"react-bootstrap";

import { FormControl } from"react-bootstrap";

import { Button } from"react-bootstrap";


import '../App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading..."
        }

        this.setAlert = this.setAlert.bind(this);
    }

    componentDidMount() {
        try {
            fetch('/api/latest/').then((resp) => {
                return resp.json();
            }).then((coinMarket) => {
                console.log(coinMarket);

                this.setState({
                    data: coinMarket.data
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    setAlert(alertData){
        console.log('alert data', alertData);

        let headers ={
            "Content-Type": "application/json"
        };

        fetch('/api/alerts/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(alertData),
        }).then((response) => {
            return response.json()
        }).then((json) => {
            console.log(json);
        })

    }


    render() {
        return (
            <div className="App">
                {/*<h1 className={'heading'}>Coin Tracker</h1>*/}
                <div className={'backdrop'}>
                      <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">Coin Tracker</Navbar.Brand>
                        <Nav className="mr-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#features">Alerts</Nav.Link>
                          <Nav.Link href="#pricing">Log Out</Nav.Link>
                        </Nav>
                        <Form inline>
                          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                          <Button variant="outline-primary">Search</Button>
                        </Form>
                      </Navbar>
                    <h2 className={'username'}>Jeff Rojas</h2>
               </div>

                <div className={"crypto-data col-md-8"}>
                    {this.state.data.map((market) => {
                        // console.log('market', market.id)
                        return (



                            <Table size="sm" key={market.id}>
                                <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Circulating Supply</th>
                                    <th>% Change 1h</th>
                                    <th>% Change 24h</th>
                                    <th>% Change 7d</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>

                                    <td>{market.symbol}</td>
                                    <td>{market.name}</td>
                                    <td>{market.quote.USD.price}</td>
                                    <td>{market.circulating_supply}</td>
                                    <td>{market.quote.USD.percent_change_1h}</td>
                                    <td>{market.quote.USD.percent_change_24h}</td>
                                    <td>{market.quote.USD.percent_change_7d}</td>
                                    <td><Alert currencyId={market.id} setAlert={this.setAlert}/></td>
                                </tr>
                                </tbody>
                            </Table>

                        )
                    })}
                </div>


            </div>
        );
    }
}

export default App;
