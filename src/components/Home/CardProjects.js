import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CardProjects = ({ project }) => {
    const { name, img, technology, liveLink } = project;
    return (
        <div className='container'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h4>Technology Used: {technology}</h4>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button>
                            <a href={liveLink} target="_blank" >Live-Link</a> 
                        </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CardProjects;