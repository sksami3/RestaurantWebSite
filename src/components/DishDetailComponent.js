import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText } from "reactstrap";

function RenderDish({ dish }) {
    if (dish == null || dish == undefined) {
        return (
            <div></div>
        );
    }
    else {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
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
            <div className="col-12 col-md-5 m-1">
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
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    {RenderDish(props.dish)}
                    {RenderComments(props.dish.Comment)}
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