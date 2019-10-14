import React from 'react';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import { Row, Col } from 'reactstrap';
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
            mostrarCol: 'none',
            cardAuxiliar: 'cajaAuxiliar',
            gridIcon: 'fas fa-th',
            tipoBusqueda: 'song',
            placeHolder: 'Busca una canción...',
            opacidadCancion: 1,
            opacidadAlbum: 0.3,
            opacidadImagen: 1,
            NPAWcolor: 'black',
            niceColor: 'black',
            firma: 'block',
            estiloFooter: 'estiloFooter'
        }

        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.modoOscuro = this.modoOscuro.bind(this);
        this.cambiarGrid = this.cambiarGrid.bind(this);
        this.buscarAlbum = this.buscarAlbum.bind(this);
        this.buscarCancion = this.buscarCancion.bind(this);
        this.easterEgg = this.easterEgg.bind(this);
    }



    fetchData() {

        this.setState({
          firma: 'none'
        });

        fetch(`https://itunes.apple.com/search?term=${this.state.buscar}&entity=${this.state.tipoBusqueda}&limit=20`)
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

        if (this.state.gridSwitch === false) {
            this.setState({
                gridSwitch: true,
                grid: 'd-flex justify-content-center flex-column',
                widthCard: '100%',
                mostrarCol: 'block',
                mostrarGrid: 'none',
                gridIcon: 'fas fa-align-justify'
            });

        } else {
            this.setState({
                gridSwitch: false,
                grid: 'd-flex justify-content-center flex-wrap',
                widthCard: '198px',
                mostrarGrid: 'block',
                mostrarCol: 'none',
                gridIcon: 'fas fa-th'
            });
        }
    }

    buscarCancion() {
        this.setState({
            tipoBusqueda: 'song',
            placeHolder: 'Busca una canción...',
            opacidadCancion: 1,
            opacidadAlbum: 0.3
        });

    }

    buscarAlbum() {
        this.setState({
            tipoBusqueda: 'album',
            placeHolder: 'Busca un álbum...',
            opacidadCancion: 0.3,
            opacidadAlbum: 1
        });
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
                cardAuxiliar: 'cajaAuxiliarOscuro',
                opacidadImagen: 0.6,
                NPAWcolor: 'white',
                niceColor: 'white',
                estiloFooter: 'estiloFooterOscuro'
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
                moColor: '#626567',
                cardAuxiliar: 'cajaAuxiliar',
                opacidadImagen: 1,
                NPAWcolor: 'black',
                niceColor: 'black',
                estiloFooter: 'estiloFooter'


            });
        }
    }

    easterEgg(){
        alert("¡Muchas gracias por la oportunidad!");
    }


   
    render() {

        let lista = [];
        


        if (this.state.datos.length) {

            let i = 0;
            lista = this.state.datos.map(el => <Cards key={i++} elementos={el} cardOscuro={this.state.card} anchoCard={this.state.widthCard} mGrid={this.state.mostrarGrid} mCol={this.state.mostrarCol} cardAux={this.state.cardAuxiliar} opImagen={this.state.opacidadImagen} />);
        }

        return (
            <div>

<div className={this.state.searchbar}>
    <Row>               
                    <Col  lg="6">
                    <div>
                    <i className="fab fa-chrome" onClick={this.easterEgg} style={{ fontSize: "40px", color: "#1ABC9C", float: "left", marginLeft: "50px" }}></i> 
                    <span style={{float: "left", fontSize: "40px", fontWeight: "bold", marginTop: "-15px", marginLeft: "7px", color: this.state.NPAWcolor, transition: 'all 0.8s'}}>NPAW</span>
                    <span style={{float: "left", marginTop: "30px", marginLeft: "-115px", fontSize: "9px", color: this.state.niceColor, transition: 'all 0.8s'}}>NICE PROVE AT WEEKEND</span>
                    <i className={this.state.gridIcon} onClick={this.cambiarGrid} style={{ fontSize: "20px", color: "#1ABC9C", padding: "10px"}}></i>
                    <i className={this.state.luna} onClick={this.modoOscuro} style={{ fontSize: "20px", color: "#1ABC9C"}}></i>
                    </div>
                    </Col>
                    <Col lg="6">
                        <div style={{ paddingTop: "3px"}}>
                    <i className="fas fa-music" onClick={this.buscarCancion} style={{ fontSize: "20px", color: "#1ABC9C", marginRight: "11px", opacity: this.state.opacidadCancion }}></i>
                    <i className="fas fa-compact-disc" onClick={this.buscarAlbum} style={{ fontSize: "20px", color: "#1ABC9C", marginRight: "12px", opacity: this.state.opacidadAlbum }}></i>
                    <input id="searchbox" style={{ width: "280px", height: "35px", borderRadius: "20px", outline: 0, paddingLeft: "15px", border: this.state.borderSearch, opacity: this.state.opacitySearch, color: this.state.colorSearch, background: this.state.fondoSearch, transition: "all 0.8s" }}
                        type="text" placeholder={this.state.placeHolder} onChange={this.handleChange} value={this.state.buscar} />
                    <i className="fi-xnsuhl-search" onClick={this.fetchData} style={{ textAlign: "right", marginLeft: "-30px", marginTop: "6px", position: "absolute", color: "#B3B6B7" }}></i>
                    </div>
                    </Col>
    </Row>
  </div>

                <div className={this.state.pseudoBody}>

                    <p style={{textAlign: "center", opacity: "0.2", fontSize: "12px", display: this.state.firma, color: this.state.NPAWcolor, paddingTop:"20px"}}>Prueba Técnica para NicePeopleAtWork<br/>
                         <strong>Jesús Calatayud Moreno (2019)</strong></p>
                         <p style={{textAlign: "center", opacity: "0.5", fontSize: "20px", paddingTop: "100px", display: this.state.firma, color: this.state.NPAWcolor}}>¡Bienvenid@! Utiliza esta app para <br/> encontrar tu música favorita</p>
                    <div className={this.state.grid}>
                        {lista}

                    </div>
                </div>

                <Footer esFooter={this.state.estiloFooter}/>

            </div>

        );

        
    }

}