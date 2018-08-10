import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
    
    constructor (props) {
        super(props);
    }

    renderComments (comments) {
         return (  
                comments.map( (comment) =>
                        
                        <li key={comment.id}>
                            {comment.comment}<br />
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                        
               
                )
        )
    }

    renderDish (dish) {
        if (dish != null){
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
                        {this.renderComments(dish.comments)}
                     </ul>
                </div>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }

    render () {
        return (
            <div className="container">{this.renderDish(this.props.dish)}</div>
        )
    }
}

export default Dishdetail;