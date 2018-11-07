import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentForm';
 
    function RenderComments ({comments}) {
         return (
            <div className="col-12 col-md-5">
                <h4>Comments</h4>  
                {comments.map( (comment) =>
                        
                        <li key={comment.id}>
                            {comment.comment}<br />
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>  
                )}
                <Comment />
            </div>
        )
    }

    function RenderDish ({dish}) {
        return (
            <div className="row">
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            </div>
        )
        
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className='row'>
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );}
            else {
                return (
                    <div></div>
                )
            }
    }

        


export default DishDetail;