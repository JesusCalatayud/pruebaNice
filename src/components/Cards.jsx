import React from 'react';
import '../css/cards.css';

export default class Cards extends React.Component {


  render() {

    let elementos = this.props.elementos;

    return (
      <div>

        <div className={this.props.cardOscuro} style={{ display: this.props.mGrid }}>
          <img style={{ objectFit: 'cover', width: '198px', height: '198px', overflow: 'hidden', backgroundImage: "black" }} alt="artwork" src={elementos.artworkUrl100} />

          <p id="album">{elementos.collectionName}</p>

          <p id="artista">{elementos.artistName}</p>
        </div>


        <div className="cajaAuxiliar" style={{ display: this.props.mCol }}>
          <img style={{ objectFit: 'cover', width: '198px', height: '198px', overflow: 'hidden', backgroundImage: "black", float: "left", marginRight: "30px"}} alt="artwork" src={elementos.artworkUrl100} />
          
          <p id="albumVertical">{elementos.collectionName} </p>
          
          <p id="artistaVertical">{elementos.artistName}</p>
          
        </div>
      


      </div>
    );
  }
}

