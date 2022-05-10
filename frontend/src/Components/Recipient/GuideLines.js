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
                            <b>You CAN request plasma if:</b>
                        </p>

                        <ul>
                            <li>A patient positive for COVID-19 has been prescribed for Plasma by the attending doctor.</li> 
                        </ul>   
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GuideLines