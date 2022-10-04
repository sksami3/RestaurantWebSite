import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
    Card, CardBody, CardTitle, Row, CardImg, CardImgOverlay, CardText, Breadcrumb, BreadcrumbItem, Button,
    Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, Nav, NavItem, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form, Col
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderDish({ dish }) {
    if (dish == null || dish == undefined) {
        return (
            <div></div>
        );
    }
    else {
        return (
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        const cmnts = comments.map((comment) => {
            return (<li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- <b>{comment.author}</b>,
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>)
        })

        return (
            <div className="col-12">
                <h4> Comments </h4>
                <ul>
                    {cmnts}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-md-5">
                        <RenderComments comments={props.comments} />
                        <CommentForm />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const CommentForm = () => {

    const required = (val) => (val && val.length)
    const maxLength = (len) => (val) => (val && (val.length <= len))
    const minLength = (len) => (val) => (val && (val.length >= len))

    function hadnleSubmit(values) {
        toggleModal();
        alert('Submitted values: ' + JSON.stringify(values));

        // event.preventDefault();
        // console.log(values);
    }

    // isModalOpen: false
    const [isModalOpen, setModalState] = useState(false);
    const toggleModal = () => {
        setModalState(!isModalOpen);
    }

    return (
        <div>
            <Button outline color="secondary" onClick={toggleModal}><i className="fa fa-pencil" aria-hidden="true"></i>{' '}Submit Comment</Button>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => hadnleSubmit(values)}>
                        <Row className="form-group">
                            <Label for="rating" md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" name="rating" className="form-control"
                                    validators={{
                                        required
                                    }}>
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                            <Errors
                                className="text-danger"
                                model=".rating"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Author"
                                    className="form-control"
                                    validators={{
                                        required, maxLength: maxLength(15), minLength: minLength(3)
                                    }}
                                />
                            </Col>
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="feedback" md={12}>Your feedback</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    resize="none"
                                    rows="12"
                                    className="form-control"
                                    validators={{
                                        required, maxLength: maxLength(15), minLength: minLength(3)
                                    }}
                                />
                            </Col>
                        </Row>
                        <Errors
                            className="text-danger"
                            model=".comment"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 3 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>

                </ModalBody>
            </Modal>
        </div>
    );
}


export default DishDetail;