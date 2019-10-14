import React from 'react';
import '../css/cards.css';

export default class Cards extends React.Component {

  
  render() {

    let elementos = this.props.elementos;
    
    

    return (
      <div>

        <div className={this.props.cardOscuro} style={{ display: this.props.mGrid}}>
          <img style={{ objectFit: 'cover', width: '198px', height: '198px', overflow: 'hidden', backgroundImage: "black", opacity: this.props.opImagen, transition: 'all 0.8s'}} alt="artwork" src={elementos.artworkUrl100} />

          <p id="cancion">{elementos.trackName}</p>
          <p id="album">{elementos.collectionName}</p>
          <p id="artista">{elementos.artistName}</p>
          <div id="audioPlayer" style={{display: "block"}}>
          <audio style={{width: "180px", height: "20px", marginBottom: "0px", outline: "none"}}ref="audio_tag" src={elementos.previewUrl}  controls/>
          </div>
        </div>

       
        <div className={this.props.cardAux} style={{ display: this.props.mCol }}>
          <img style={{ objectFit: 'cover', width: '198px', height: '198px', overflow: 'hidden', backgroundImage: "black", float: "left", marginRight: "30px", opacity: this.props.opImagen, transition: 'all 0.8s'}} alt="artwork" src={elementos.artworkUrl100} />
          <p id="cancionVertical">{elementos.trackName}</p>
          <p id="albumVertical">{elementos.collectionName} </p>
           <p id="artistaVertical">{elementos.artistName}</p>

          <div id="audioPlayerVertical" style={{display: "block"}}>
          <audio style={{width: "280px", height: "20px", outline: "none" }}ref="audio_tag" src={elementos.previewUrl}  controls/>
          </div>
          
        </div>
      


      </div>
    );
  }
}

