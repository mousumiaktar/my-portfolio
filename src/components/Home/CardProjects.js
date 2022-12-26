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
            <div className='single-cart shadow-md shadow-white rounded-md mb-5 md:mb-0 lg-mb-0'>
                <CardGroup>
                    <Card className='bg-black'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p></p>
                                <div className='d-flex'>
                                    <button className='border-1 px-1 rounded-md mr-5'>
                                        <a className='no-underline text-white' href={liveLink} target="_blank" >Live-Preview</a>
                                    </button>
                                    {/* <button className='button-side border-1 px-1 rounded-md text-white' onClick={() => navigateProjectDetail(id)}>Details</button> */}
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default CardProjects;