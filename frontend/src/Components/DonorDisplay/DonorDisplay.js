import { Card,ListGroup,Col,Row,Container } from "react-bootstrap"
import { AiOutlinePhone,AiOutlineMail } from "react-icons/ai"
import {BsFillPersonFill,BsDropletHalf} from "react-icons/bs"
import {FaHospitalAlt} from "react-icons/fa"
import {MdDateRange} from "react-icons/md"

export default function DonorDisplay(props)
{

  const obj = {

    myDetails:{
        name:"chaitanya",
        age:21,
        phoneNumber:78899,
        bloodGroup:"O+",
        email:"c@gmail.com"
    },
    recipients:[{
      name:"akshay",
      bloodGroup:"O+",
      age:21,
      phoneNumber:78899
  }]

  }

    const list = obj.recipients.length == 0 ? "No Donations Yet." : obj.recipients.map((recipient) => {
      return (
        <div style={{marginTop:"5px"}}>
          <Card>
            <Card.Body>
              <Card.Title><BsFillPersonFill /> {recipient.name}</Card.Title>
              <Card.Text>
                <BsDropletHalf /> Blood Group : {recipient.bloodGroup} <br />
                <FaHospitalAlt /> Hospital Address : {recipient.hospitalAddress} <br />
                <AiOutlinePhone /> Phone : {recipient.phoneNumber} <br />
                 Pincode : {recipient.pincode} <br /> City : {recipient.city} <br /> State : {recipient.state} <br />
                <MdDateRange /> Dated : {recipient.dateOfFulfilment}
              </Card.Text>
            </Card.Body>
         </Card>
        </div>
      )
    })

  return (
    <Container fluid>
      <br />
      <Row>
        <Col md={3}>
          <h3>Your Details</h3>
          <Card>
            <Card.Body>
              <Card.Title><BsFillPersonFill /> {obj.myDetails.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Donor</Card.Subtitle>
              <Card.Text>
                <BsDropletHalf /> Blood Group : {obj.myDetails.bloodGroup} <br />
                <AiOutlineMail /> Email : {obj.myDetails.email} <br />
                <AiOutlinePhone /> Phone : {obj.myDetails.phoneNumber}
              </Card.Text>
            </Card.Body>
         </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h3>Donations</h3></Card.Header>
            <Card.Body>
              {list}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
   
}