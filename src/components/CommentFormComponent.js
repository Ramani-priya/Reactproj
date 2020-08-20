// JavaScript source code
import React, { Component } from 'react';
import { Button,  Form, FormGroup, FormFeedback, Modal, ModalHeader, ModalBody, Label, Input, Col } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            author: '',
            rating: 1,
            comment: '',
            isModalOpen: false,
            touched: {
                author: false,
                comment:false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    validate(author, comment) {
        const errors = {
            author: '',
            comment:''
        }
        if (this.state.touched.author && author.length < 3)
            errors.author = "Name should contain more than 3 characters";
        else if (this.state.touched.author && author.length > 10)
            errors.author = "Name cannot have more than 10 characters";
        if (this.state.touched.comment && comment.length < 1)
            errors.comment = "Comment contain atleast 1 character";
        
        return errors;
    }
    render() {
        const errors = this.validate(this.state.author, this.state.comment);
        
        return (
            <div className="col-12">
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                        <Form>
                            
                        <FormGroup>
                            <Label htmlFor="rating"> Your Rating </Label>
                            <Input type="select" name="rating"
                                value={this.state.rating}
                                onChange={this.handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                            </FormGroup>
                         
                        <FormGroup>
                            <Label htmlFor="author">Your Name</Label>
                                <Input type="text" name="author" id="author"
                                    placeholder="Your Name"
                                    value={this.state.author} 
                                    valid={errors.author === ''}
                                    invalid={errors.author !== ''}
                                    onBlur={this.handleBlur('author')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.author}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Your Comment</Label>
                                <Input type="textarea" name="comment" id="comment"
                                    rows="10"
                                    value={this.state.comment}
                                    valid={errors.comment === ''}
                                    invalid={errors.comment !== ''}
                                    onBlur={this.handleBlur('comment')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.comment}</FormFeedback>
                            </FormGroup>
                            <Button className="btn btn-primary" type="submit">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <button className="btn" color="secondary" onClick={this.toggleModal}>Submit comment</button>
            </div>
                );
    }
}
export default CommentForm;