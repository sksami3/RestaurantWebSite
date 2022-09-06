import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText } from "reactstrap";

function RenderMenu({ dish, onClk }) {
    return (
        <Card key={dish.id} onClick={() => onClk(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenu dish={dish} onClk={props.onClk}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu;