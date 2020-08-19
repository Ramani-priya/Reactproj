import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button,  
    Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        //console.log(this);
        this.props.addComment(this.props.dishId, values.rating, values.authorname, values.comment);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }         
    render() {
        return (
            <div className="col-12">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label className="ml-3" htmlFor="rating"> <strong>Rating</strong> </Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
        
                            <Row className="form-group">
                                <Label className="ml-3" htmlFor="authorname"><strong>Your Name</strong></Label>
                                <Col md={12}>
                                    <Control.text model=".authorname" name="authorname" id="authorname"
                                        placeholder="Your Name" className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".authorname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="ml-3" htmlFor="comment"><strong>Your Comment</strong></Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" id="comment"
                                        rows="10" className="form-control"
                                        validators={{ required, minLength: minLength(1) }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be atleast 1 character'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Button color="primary" type="submit">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <button className="btn" color="secondary" onClick={this.toggleModal}><i className="fa fa-pencil" aria-hidden="true"></i> Submit comment</button>
            </div>
        );
    }
}
function RenderDish({ dish, isLoading, errMess, comments, addComment }) {
    // var dish = this.props.dish;
    console.log(dish);
    console.log(isLoading);
    console.log(errMess);

        if (isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (dish != null) 
            return (
               
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return (
                <div></div>
            );
    }
function RenderComments({ comments, addComment, dishId }) {
       
        if (comments != null)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((eachcomment) => {
                        return (
                            <li key={eachcomment.id}>
                                <p>{eachcomment.comment}</p>
                                <p>--{eachcomment.author},&nbsp;{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(eachcomment.date)))}</p>
                            </li>
                        );
                        })}  
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment} />
                </div>

            );
      
         else
            return (
                <div></div>
            );
    }
    
const DishDetail = (props) => {
    console.log(props);
    //var dishSec;
    //var commentSec;
    if (props.dish!=null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
               
            </div>
    );

}
export default DishDetail;


/*
class CommentForm extends Component {



function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({ comments }) {

    if (comments != null) {
        const comm = comments.map((comment) => {
            return (
                <div className="list-unstyled">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>

            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <div>{comm}</div>
                <CommentForm />
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
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else return (
        <div></div>
    );

}
export default DishDetail;
*/