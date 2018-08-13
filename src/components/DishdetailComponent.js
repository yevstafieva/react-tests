import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

    function RenderComments ({comments}) {
         return (  
                comments.map( (comment) =>
                        
                        <li key={comment.id}>
                            {comment.comment}<br />
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                        
               
                )
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
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                     <ul className="list-unstyled">
                        <RenderComments comments={dish.comments}/>
                     </ul>
                </div>
            </div>
        )
        
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <RenderDish dish={props.dish}/>
                </div>
            );}
            else {
                return (
                    <div></div>
                )
            }
    }

        


export default DishDetail;