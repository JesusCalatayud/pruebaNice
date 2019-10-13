import React from 'react';
import Cards from './Cards.jsx';
import '../css/searchbar.css';

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modoOscuro: false,
            searchbar: "modoNormal",
            buscar: '',
            datos: '',
            pseudoBody: 'pseudoBody',
            card: 'card',
            fondoSearch: '',
            colorSearch: '#1ABC9C',
            opacitySearch: 0.5,
            borderSearch: "1px solid #1ABC9C",
            luna: "far fa-moon",
            moColor: '#626567',
            grid: 'd-flex justify-content-center flex-wrap',
            gridSwitch: false,
            widthCard: '198px',
            mostrarGrid: 'block',
            mostrarCol: 'none'
        }

        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.modoOscuro = this.modoOscuro.bind(this)
        this.cambiarGrid = this.cambiarGrid.bind(this)
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

    cambiarGrid() {

        if(this.state.gridSwitch === false ){ 
        this.setState({
            gridSwitch: true,
            grid: 'd-flex justify-content-center flex-column',
            widthCard: '100%',
            mostrarCol: 'block',
            mostrarGrid: 'none'
        }); 
    
    } else {
        this.setState({
            gridSwitch: false,
            grid: 'd-flex justify-content-center flex-wrap',
            widthCard: '198px',
            mostrarGrid: 'block',
            mostrarCol: 'none'
        }); 
        }
    }


    modoOscuro() {

        if (this.state.modoOscuro === false) {
            this.setState({
                modoOscuro: true,
                searchbar: "modoOscuro",
                pseudoBody: "pseudoBodyDark",
                card: "cardDark",
                fondoSearch: "#1c1c1e",
                opacitySearch: 0.5,
                luna: "fas fa-moon",
                moColor: '#1ABC9C',
                

            });
        } else {
            this.setState({
                modoOscuro: false,
                searchbar: "modoNormal",
                pseudoBody: "pseudoBody",
                card: "card",
                fondoSearch: "",
                colorSearch: '#1ABC9C',
                opacitySearch: 0.5,
                luna: "far fa-moon",
                moColor: '#626567'


            });
        }
    }

    render() {

        let lista = [];

        if (this.state.datos.length) {
            let i = 0;
            lista = this.state.datos.map(el => <Cards key={i++} elementos={el} cardOscuro={this.state.card} anchoCard={this.state.widthCard} mGrid={this.state.mostrarGrid} mCol={this.state.mostrarCol}/>);
        }

        return (
            <div>


                <navbar className={this.state.searchbar}>
                    <button onClick={this.cambiarGrid} style={{marginRight: "20px"}}>Grid</button>
                    <span style={{ marginRight: "2px", color: this.state.moColor }}>Modo oscuro</span> <i class={this.state.luna} onClick={this.modoOscuro} style={{ fontSize: "20px", color: "#1ABC9C", marginRight: "60px" }}></i>
                    <input id="searchbox" style={{ width: "280px", height: "35px", borderRadius: "20px", outline: 0, paddingLeft: "15px", border: this.state.borderSearch, opacity: this.state.opacitySearch, color: this.state.colorSearch, background: this.state.fondoSearch, transition: "all 0.8s" }}
                        type="text" placeholder="Buscar..." onChange={this.handleChange} value={this.state.buscar} />
                    <i class="fi-xnsuhl-search" onClick={this.fetchData} style={{ textAlign: "right", marginLeft: "-30px", marginTop: "6px", position: "absolute", color: "#B3B6B7" }}></i>
                </navbar>

                <div className={this.state.pseudoBody}>

                    <div className={this.state.grid}>
                        {lista}
                    </div>
                </div>

            </div>

        )
    }

}