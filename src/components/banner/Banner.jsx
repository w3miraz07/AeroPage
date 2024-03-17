import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegBell } from "react-icons/fa";
import banimg from "../../assets/banner.png"

const Banner = () => {
    return (
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="banner_text">
                    <div className="banner_tex1">
                    <FaRegBell className='ban_icon' /> <span>Startup Business</span>
                    </div>

                        <div className="banner_text2">
                        <h3>Empowering startups to fuel
                            their business growth</h3>
                        <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                            velit
                            nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                        <a href="#">Get started now </a>
                        </div>
                    </div>
                </Col>
                <Col lg={{ span: 5, offset: 2,}}>
                    <div className="banner-img">
                    <img src={banimg} alt="banimg" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner