import React, {Component} from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor (props) {
        super (props);
        this.state=({isModalOpen: false});
   
        this.toggleModal=this.toggleModal.bind(this); 
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    toggleModal (){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit (values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.username, values.comment); 
    }

    render() {
        return (
            <React.Fragment>
            <Button type="button" className="btn btn-outline-secondary"
             onClick={this.toggleModal}> 
            <i className="fa fa-pencil"></i> Submit comment
            </Button> 
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
             <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
             <ModalBody>
                 <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={12}>Rating</Label>
                        <Col md={12}>
                            <Control.select model=".rating"  name="rating" defaultValue="1"
                                className="form-control">
                                <option  >1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="username" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".username" id="username" name="username" placeholder="Last Name"
                                className="form-control" 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                            <Errors 
                                className="text-danger"
                                model=".username"
                                show="touched"
                                messages={{
                                    required: "Required ",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                }}
                            />                
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment" 
                            rows={12}
                            className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col >
                            <Button type="submit" color="primary">Submit</Button>
                        </Col> 
                    </Row>
                 </LocalForm>
             </ModalBody>
         </Modal>       
        </React.Fragment>
        );

    }
}

export default CommentForm;