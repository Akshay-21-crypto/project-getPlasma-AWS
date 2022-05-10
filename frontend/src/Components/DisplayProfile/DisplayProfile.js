import {useState,useEffect} from 'react'
import {Card,ListGroup,Container,Row,Col} from 'react-bootstrap'
import DonorDisplay from '../DonorDisplay/DonorDisplay'
import RecipientDisplay from '../RecipientDisplay/RecipientDisplay'
export default function DisplayProfile(props)
{
   
  
  console.log(props.history.location.state) //----> this is the data sent from the login page
  
  
  if(props.history.location.state.type==="donor")
  {
    return <DonorDisplay ></DonorDisplay>
  }
  return <RecipientDisplay></RecipientDisplay>
}
