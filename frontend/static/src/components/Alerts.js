import React, { Component } from 'react';

import '../Alerts.css';

import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Alert extends Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            low_alert: '',
            high_alert: '',

        };

        this.handleClick = this.handleClick.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick(event) {
        let visible = this.state.visible;
        this.setState({visible: !visible});
        // event.target.nextElementSibling.toggleAttribute('hidden');
    }

    handleInput(event) {
        this.setState({[event.target.name]:event.target.value});
        // if(event.target.name === "low_alert") {
        //     this.setState({low_alert: event.target.value});
        // }else if(event.target.name === "high_alert"){
        //     this.setState({high_alert: event.target.value});
        // }
    }

    setAlert(event) {
        event.preventDefault();

        let alertData = {
            'low_alert': this.state.low_alert,
            'high_alert': this.state.high_alert,
            'currency_id': this.props.currencyId
        };

        console.log('i am firing', alert);
        this.props.setAlert(alertData);
    }

    render() {

        return (
            <div>
                <Button onClick={this.handleClick} className={'alerts-button'} variant="outline-dark">Alert</Button>
                {this.state.visible ? (
                    <form onSubmit={this.setAlert}>
                        <Form.Group className='forms'>
                          <Form.Row>
                            <Col>
                              <Form.Control
                                  value={this.state.low_alert}
                                  name="low_alert"
                                  placeholder="$ Low"
                                  onChange={this.handleInput}
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                  value={this.state.high_alert}
                                  name="high_alert"
                                  placeholder="$ High"
                                  onChange={this.handleInput}
                              />
                            </Col>
                          </Form.Row>
                          <Button variant="primary" type="submit">
                            Set
                          </Button>
                          <Button variant="primary" type="button">
                            Cancel
                          </Button>
                        </Form.Group>
                    </form>
                ) : null}

            </div>
        );
    }

}

export default Alert