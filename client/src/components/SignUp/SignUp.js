import React from "react";
import "./Signup.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function Signup(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="firstname">firstname</Label>
                <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="firstname"
                    value={props.firstname}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastname">lastname</Label>
                <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="lastname"
                    value={props.lastname}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <FormGroup>
            <FormGroup>
                <Label for="username">username</Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={props.username}
                    onChange={props.inputChange}
                />
            </FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={props.password}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">email</Label>
                <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={props.email}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <Button
                onClick={props.submit}
            >
                Signup
            </Button>
        </Form>
    );
}

export default Signup;
