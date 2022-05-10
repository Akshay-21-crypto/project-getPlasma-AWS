import React from 'react'

import RecipientRegistrationForm from './RecipientRegistrationForm';

import {Container, Row, Col} from 'react-bootstrap'
import GuideLines from './GuideLines';

class RecipientRegistration extends React.Component {
   

    render() {
        return (
            <div>
                <br />
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6}>
                            <RecipientRegistrationForm />
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

export default RecipientRegistration