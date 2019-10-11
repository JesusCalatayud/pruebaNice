import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Cards from './Cards.jsx';
import '../css/searchbar.css';


export default class Searchbar extends React.Component{
constructor(props){
    super(props);
    this.state = {
        modoOscuro: false,
        searchbar: "modoNormal",
        buscar: '',
        datos: ''
    }

    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.modoOscuro = this.modoOscuro.bind(this)
}

fetchData() {
    fetch(`https://itunes.apple.com/search?term=${this.state.buscar}&entity=album&limit=20`)
        .then(data => data.json())
        .then(data => {
            this.setState({ datos: data.results })
            console.log("¡Datos conseguidos!");
        })
        .catch(error => console.log('Algo ha ido mal...', error))
}

handleChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
        buscar: value
    });
}

modoOscuro(){
    if (this.state.modoOscuro === false){
        this.setState({
            modoOscuro: true,
            searchbar: "modoOscuro"
        });
    } else {
        this.setState({
            modoOscuro: false,
            searchbar: "modoNormal"
        });
    }
}

render(){

    let lista = [];

    if (this.state.datos.length) {
        let i = 0;
        lista = this.state.datos.map(el => <Cards  key={i++} elementos={el}  />);
    }

    return(
        <div>
            <div className={this.state.searchbar}>
            <InputGroup className="mb-3">
            <FormControl
      placeholder="Buscar..." onChange={this.handleChange} value={this.state.buscar} />
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><Button onClick={this.fetchData}>Buscar</Button></InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup>
   
        
            </div> 

            <div>
                {lista}
            </div>
         </div>
    )
}

}