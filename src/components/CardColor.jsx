import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardColor = ({color, borrarColor}) => {

    return (
        <>
            <Card className='col-lg-2 col-md-4 col-12 m-2'>
                <Card.Header>{color.colorNombre}</Card.Header>
                <Card.Body style={{backgroundColor: color.colorValorHex}}></Card.Body>
                <Card.Footer className='text-end'>
                    <Button variant='danger' onClick={()=> borrarColor(color)}>
                        <i className="bi-x-lg"></i>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default CardColor;