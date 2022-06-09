import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './CardProjects.css';

const CardProjects = ({ project }) => {
    const { name, img, technology, liveLink } = project;
    return (
        <div className='container'>
            <div className='single-cart'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>Technology Used: {technology}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='link-button'>
                            <button>
                                <a href={liveLink} target="_blank" >Live-Link</a>
                            </button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default CardProjects;