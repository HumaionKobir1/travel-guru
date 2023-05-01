import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slider from './slider/Slider';
const Home = () => {
    return (
        <div style={{minHeight:'100%'}}>
            <Container className='mt-5 mb-5'>
                <Row className=''>
                    <Col lg={4} className='mt-auto mb-auto'>
                        <h1 style={{fontSize: '53px'}}>COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Button variant="warning">Booking</Button>
                    </Col>

                    <Col lg={8}>
                        <Slider></Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;