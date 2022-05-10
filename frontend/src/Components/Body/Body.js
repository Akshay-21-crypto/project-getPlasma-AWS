import {Button,Jumbotron,Container,Row,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './body.css'
export default function Body()
{
    const title = "</getPlasma>"
    return (
        <div>
            <Jumbotron fluid style={{textAlign:"center"}}>
                <Container>
                    <h1>{title}</h1>
                    <p>
                        This site connects current COVID patients with recovered COVID patients who wish to donate plasma.
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Card className="text-center">
                    <Card.Header><b>HOW IT WORKS</b></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h6>1. REGISTER YOUR DETAILS</h6>
                                    <p>
                                        Whether you are a donor or a recipient, first register here with few details - contact details, location, bloodgroup.
                                    </p>
                                </Col>
                                <Col xs={12} md={4} style={{backgroundColor:"#f5f5f5"}}>
                                    <h6>2. FIND POTENTIAL DONORS</h6>
                                    <p>
                                        If you are a recipient, on your login - you will find a list of potential donors from your city with the same bloodgroup as you. Contact them and confirm your donation.
                                    </p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <h6>3. SHARING DETAILS</h6>
                                    <p>
                                        Once the donation is confirmed, recipient details are shared with donor and vice-versa
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                </Card>
            </Container> 
            <Container className="buttonGroup">
                <div>
                    <h6>Ready to help save a life?</h6>
                    <Link to="/donorRegistration"><Button variant="secondary">REGISTER AS DONOR</Button></Link>
                </div>
                <div style={{marginLeft:"10px"}}>
                    <h6>Need Plasma?</h6>
                    <Link to="/recipientRegistration"><Button variant="secondary">REGISTER AS RECIPIENT</Button></Link>
                </div>
                <div style={{marginLeft:"10px"}}>
                    <h6>Already registered?</h6>
                    <Link to="/login"><Button variant="secondary">Login</Button></Link>
                </div>
            </Container>
            
        </div>
    )
} 