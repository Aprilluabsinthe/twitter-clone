import React from 'react'
import { Card } from 'react-bootstrap'

const Tweet = ({text,author,date}) => {

    return <div> 
        <Card style={{ width: '36rem', marginBottom: '30px', border:'1px solid blue', backgroundColor:'cornily'}}>
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    </div>
        
}

export default Tweet