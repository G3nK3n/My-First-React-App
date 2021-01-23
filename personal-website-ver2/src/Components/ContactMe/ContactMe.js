import React from 'react';
import classes from '../ContactMe/ContactMe.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const contactme = () => (
    <div className={classes.FormBorder}>
        <Container className={classes.ContactMeContainer}>
            <Row>
                <Col>
                    <div className={classes.ContactMe}>
                        <div className={classes.ContactMeInsideDiv}>
                            <h1>Contact Me</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <div className={classes.ContactText}>
                            <p>
                                Hello! To contact me, please fill out the form on the right and I will try to respond as soon as possible.
                                You can also message me on my LinkedIn profile or message me directly to my email with the above links. Thank you!
                            </p>
                        </div>
                        <Form className={classes.Form}>
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={7} size="sm" type="text" placeholder="Enter Message"/>
                            </Form.Group>
                            <div className={classes.FormButton}>
                                <Button variant="secondary" type="button">
                                    Send
                                </Button>
                            </div>
                        </Form>            
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default contactme;