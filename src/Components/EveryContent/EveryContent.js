import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                <Button variant="primary">Start Quiz</Button>
                </Card.Body>
                </Card>
                </div>
            
   
    );
};

export default EveryContent;