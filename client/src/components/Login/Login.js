import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";

class Login extends Component {

    state = {
        username: "",
        password: "",
        loggedIn: false
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                if (res.data.loggedIn) {
                    this.setState({
                        loggedIn: true
                    });
                };
                console.log('logged in!')
            }).catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="username"
                        value= {this.state.username}
                        onChange= {this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="password"
                        value= {this.state.password}
                        onChange= {this.handleInputChange}
                    />
                </FormGroup>
                <Button
                    onClick={this.handleFormSubmit}
                >
                    Log In
                </Button>
            </Form>
        )
    }
}

export default Login;