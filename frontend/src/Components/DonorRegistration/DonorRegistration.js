import React from 'react'
import DonorRegistrationForm from './DonorRegistrationForm'
import GuideLines from './GuideLines'

import {Container, Row, Col} from 'react-bootstrap'

class DonorRegistration extends React.Component {
   

    render() {
        return (
            <div>
                <br />
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6}>
                            <DonorRegistrationForm />
                        </Col>

                        <Col xs={12} md={6}>
                            <GuideLines />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DonorRegistration