import {Link} from 'react-router-dom'
import {React} from 'react'
import {CognitoUser , AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from '../UserPoolCognito';
import { Component } from 'react';
import { Form,Button,Card,Container} from 'react-bootstrap';
export default class Signin extends Component {
// export default function Signin(props)
// {
    
    //update these below values with states
    constructor(props)
    {
        super()
        this.state = {                     //---> this state object is from getrequest with password+Type to lambda function
        }
        this.handler = this.handler.bind(this)
    }
    
    handler=(e)=>{
    e.preventDefault();
    var email="akshaygogikar2609@gmail.com"
    var password="akshay"
    const user = new CognitoUser({
        Username:email,
        Pool :UserPool
    });
     
    const authDetails = new AuthenticationDetails({
        Username:email,
        Password:password
    });
    user.authenticateUser(authDetails,{
        onSuccess:data=>{
            // console.log("onSuccess",data.getIdToken().payload["custom:Type"]);
            console.log("onSuccess",data);
            
            const userData = data.getIdToken();
            console.log(userData.getJwtToken())
            

        },
        onFailure:err=>{
            console.error("onFailure",err);
        },
        newPasswordRequired:data=>{
            console.log("newPasswordRequired",data);
        }

    });

    // props.add(getObj);
    // this.props.add(this.state)
    // console.log(this.props)
    // this.props.history.location.state=this.state;
    this.props.history.push("/displayProfile",this.state);
   }

    render(){
        return  (
            <Container>
                <br />
                <Card style={{width:"30rem"}}>
                    <Card.Body>
                        <Form onSubmit={this.handler}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" />
                            </Form.Group>
                            <Form.Group controlId="formSubmit">
                                <Button variant="secondary" type="submit">Login</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>    
        )
    } 
}