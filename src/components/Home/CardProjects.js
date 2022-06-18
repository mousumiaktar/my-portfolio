import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CardProjects.css';

const CardProjects = ({ project }) => {
    const { id, name, img, technology, liveLink } = project;
    const navigate = useNavigate();

    const navigateProjectDetail = id => {
        navigate(`/cardprojects/${id}`);
    }

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
                            <div className='d-flex'>
                            <button>
                                <a href={liveLink} target="_blank" >Live-Link</a>
                            </button>
                            <button className='button-side' onClick={() => navigateProjectDetail(id)}>Details</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default CardProjects;