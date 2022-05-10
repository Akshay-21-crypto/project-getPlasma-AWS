import { Card,ListGroup,Col,Row,Container,Button } from "react-bootstrap"
import { AiOutlinePhone,AiOutlineMail } from "react-icons/ai"
import {BsFillPersonFill,BsDropletHalf} from "react-icons/bs"

export default function RecipientDisplay(props)
{

    
    const obj = {

      myDetails:{
          name:"chaitanya",
          age:21,
          bloodGroup:"O+",
          email:"c@gmail.com",
          phoneNumber:78899,
          requestStatus:1
      },
      donors:[
          {name:"akshay",
          age:21,
          phoneNumber:78899},
          {name:"akshay",
          age:21,
          phoneNumber:78899},
          {name:"akshay",
          age:21,
          phoneNumber:78899},
          {name:"akshay",
          age:21,
          phoneNumber:78899}
      ]
    }

      const reqStatus = obj.myDetails.requestStatus === 1 ? "Active" : "Donor Found"
      const dispTitle = obj.myDetails.requestStatus === 1 ? "Potential Donors" : "Your Donor"
      const list = obj.myDetails.requestStatus === 1 ? obj.donors.map((donor) => {
        return (
          <div style={{marginTop:"10px"}}>
              <Card>
                <Card.Body>
                  <Card.Title><BsFillPersonFill /> {donor.name}</Card.Title>
                  <Card.Text>
                    <BsDropletHalf /> Blood Group : {donor.bloodGroup} <br />
                    <AiOutlinePhone /> <b>Phone Number : {donor.phoneNumber}</b> <br />
                    Pincode : {donor.pincode} <br />
                    City : {donor.phone} <br />
                    State : {donor.state} <br />
                  </Card.Text>
                <Button variant="outline-success">Confirm</Button>
                </Card.Body>
              </Card>
            </div>
        ) 
      }) : (() => {
        return (
            <div style={{marginTop:"10px"}}>
              <Card>
                <Card.Body>
                  <Card.Title><BsFillPersonFill /> {obj.donors[0].name}</Card.Title>
                  <Card.Text>
                    <BsDropletHalf /> Blood Group : {obj.donors[0].bloodGroup} <br />
                    <AiOutlinePhone /> <b>Phone Number : {obj.donors[0].phoneNumber}</b> <br />
                    Pincode : {obj.donors[0].pincode} <br />
                    City : {obj.donors[0].phone} <br />
                    State : {obj.donors[0].state} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        )
      })()
      
      return (
        <Container fluid>
          <br />
          <Row>
            <Col md={3}>
              <h3>Your Details</h3>
              <Card>
                <Card.Body>
                  <Card.Title><BsFillPersonFill /> {obj.myDetails.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Recipient</Card.Subtitle>
                  <Card.Text>
                    <BsDropletHalf /> Blood Group : {obj.myDetails.bloodGroup} <br />
                    <AiOutlineMail /> Email : {obj.myDetails.email} <br />
                    <AiOutlinePhone /> Phone : {obj.myDetails.phoneNumber} <br />
                    Request Status : {reqStatus}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header><h3>Potential Donors</h3></Card.Header>
                <Card.Body>
                  {list}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )
      
}