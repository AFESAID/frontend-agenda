import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap'

function Login() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Email:
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Your@Gmail" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Password:
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="your Password" />
                                </Form.Group>
                                <br />
                                <Button variant="primary">Login</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login