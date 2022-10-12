import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Everycontent.css';
const EveryContent = ({content}) => {
    const {id, name,logo,total} = content;
    return (
                <div>
                <Card id='content-item' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                 Total quiz {total}
                 </Card.Text>
                 <Link to={`content/${id}`}><Button variant="primary">Start Quiz</Button></Link>
                </Card.Body>
                </Card>
                
                </div>
            
   
    );
};

export default EveryContent;