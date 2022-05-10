import React from 'react'
import {Card} from 'react-bootstrap'
class GuideLines extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>GuideLines</Card.Title>
                        <p>
                            <b>You CAN donate plasma if:</b>
                        </p>

                        <ul>
                            <li>You were tested positive for COVID-19.</li>
                            <li>You are between 18-60 years old.</li>
                            <li>You have fully recovered.</li>
                            <li>You are free of symptoms for <strong>14 days</strong>.</li>
                            <li>You have tested positive before <strong>28 days</strong>.</li>
                            <li>In case you have already donated plasma, you are still eligible to <strong>donate again after every 14 days</strong> or as recommended by your doctor.</li>
                        </ul>   

                        <p>
                            <b>You CANNOT donate plasma if:</b>
                        </p> 
                            
                        <ul>
                            <li>Your weight is less than 50 kg.</li>
                            <li>You have ever been pregnant.</li>
                            <li>You are diabetic on insulin.</li>
                            <li>Your Blood Pressure is more than 140 and diastolic less than 60 or more than 90.</li>
                            <li>You have uncontrolled diabetes or hypertension with change in medication in last 28 days.</li>
                            <li>You are a Cancer Survivor.</li>
                            <li>You have chronic kidney/heart/lung or liver disease.</li>
                        </ul>
                        
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GuideLines