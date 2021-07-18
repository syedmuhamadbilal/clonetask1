import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "../CSS/Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={{ size: 2, offset: 3 }}>
                        <a href="" className="footerlink1">
                            &copy; Sky Mavis
                        </a>
                    </Col>

                    <Col sm="2">
                        <a href="" className="footerlink2">
                            Discord
                        </a>
                    </Col>

                    <Col sm="2">
                        <a href="" className="footerlink3">
                            Terms of use
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
