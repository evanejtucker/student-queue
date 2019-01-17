import React from "react";
import "./LoginV1.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function LoginV1(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={props.username}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={props.password}
                    onChange={props.inputChange}
                />
            </FormGroup>
            <Button
                onClick={props.submit}
            >
                Log In
            </Button>
        </Form>
    );
}

export default LoginV1;
