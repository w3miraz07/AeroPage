import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";

const About = () => {
    return (
        <>
            <Container className='about_main'>
                <Row>
                    <Col lg={4}>
                        <div className="about_item1">
                        <FaBaseballBall className='baseball' />
                            <h3>Immediate Deployment</h3>
                            <p>Et vero eos et accusamus et
                                iusto odio dignissimos</p>
                        </div>
                    </Col>

                    <Col lg={4}>
                    <div className="about_item2">
                        <FaBaseballBall className='baseball'/>
                            <h3>Immediate Deployment</h3>
                            <p>Et vero eos et accusamus et
                                iusto odio dignissimos</p>
                        </div>
                    </Col>

                    <Col lg={4}>
                    <div className="about_item3">
                        <FaBaseballBall className='baseball' />
                            <h3>Immediate Deployment</h3>
                            <p>Et vero eos et accusamus et
                                iusto odio dignissimos</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About