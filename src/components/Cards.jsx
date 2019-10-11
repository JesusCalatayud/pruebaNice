import React from 'react';
import { Card } from 'react-bootstrap';

export default class Cards extends React.Component{
  

    render(){

        let elementos = this.props.elementos;

        return(
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elementos.artworkUrl100} />
  <Card.Body>
    <Card.Title>{elementos.artistName}</Card.Title>
    <Card.Text>
    {elementos.collectionName}
    </Card.Text>
  </Card.Body>
</Card>
            </div>
        );
    }
}

