import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        
    }
    renderDish(dish) {
        console.log(dish);
        // var dish = this.props.dish;
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(comments) {
        const comment = comments.map((eachcomment) => {
            return (
                <li key={eachcomment.id}>
                    <div className="row">
                        <p>{eachcomment.comment}</p>
                    </div>
                    <div className="row">
                        <p>--{eachcomment.author}</p>
                        <p>,&nbsp;{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(eachcomment.date)))}</p>
                    </div>
                </li>
            );
        });
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            );
      
         else
            return (
                <div></div>
            );
    }
    
    render() {
        var commentSec;
        var dishSec;
        return (
                <div className="row">
                    
                        {dishSec = this.renderDish(this.props.dish)}
                   
                        {commentSec = this.renderComments(this.props.dish.comments)}
                 </div>
            );
    }
}
export default DishDetail;