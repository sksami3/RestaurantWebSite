import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";

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


export default DishDetail;