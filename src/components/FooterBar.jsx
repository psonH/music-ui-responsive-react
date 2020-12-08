import React from 'react'
import { Row, Col, Footer, Input, Icon } from 'rsuite'
import gal1 from '../images/gallery-3.jpg'
import gal2 from '../images/gallery-4.jpg'
import gal3 from '../images/gallery-5.jpg'
import gal4 from '../images/gallery-6.jpg'

export const FooterBar = () => {
    return (
        <Footer>
            <div className="news-letter">
                <Row className="w-75 py-4 p-md-4 mx-auto">
                    <Col xs={24} md={20}>
                        <h4 className={window.innerWidth < 576 ? "text-center" : null}>Newsletter</h4>
                        <Input placeholder="Enter Your Email Address" type="email" />
                    </Col>
                    <Col xs={24} md={4} className="subscribe-div">
                        <button className="subscribe">Submit</button>
                    </Col>
                </Row>
            </div>
            <div className="footer-band">
                <Row className="w-75 py-4 p-md-4 mx-auto">
                    <Col xs={24} md={8} lg={7} className="py-3 p-md-4"> 
                        <h4>Contact Us</h4> 
                        <address>
                            <Icon icon="map-marker" size="2x" /> 5087, Ontario, Toronto, CA <br />
                            <Icon icon="phone" size="2x" /> ( +71 5896547 ) <br />
                            <Icon icon="envelope" size="2x" /> name@domain.com
                        </address>
                    </Col>
                    <Col xs={24} md={8} lg={11} className="py-3 p-md-4">
                        <h4>Get in Touch</h4>
                        <Input placeholder="Enter Your Name" type="text" /><br />
                        <Input placeholder="Enter Your Email" type="email" /><br />
                        <Input placeholder="Enter Your Message" type="text" componentClass="textarea" rows={3} />
                        <button className="get-in-touch">Submit</button>
                    </Col>
                    <Col xs={24} md={8} lg={6} className="py-3 p-md-4">
                        <h4>Check Out!</h4>
                        <Row className="footer-gal">
                            <Col xs={12}>  
                                <img src={gal1} alt={gal1} width="100%"/>
                            </Col>
                            <Col xs={12}>
                                <img src={gal2} alt={gal2}  width="100%"/>
                            </Col>
                            <Col xs={12}>
                                <img src={gal3} alt={gal3}  width="100%"/>
                            </Col>
                            <Col xs={12}>
                                <img src={gal4} alt={gal4}  width="100%"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Footer>
    )
}
