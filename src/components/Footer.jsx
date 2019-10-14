import React from 'react';
import '../css/footer.css';
export default class Footer extends React.Component{

    render(){
        return(
            <div>
                <footer id={this.props.esFooter}>
                © 2019 Jesús Calatayud Moreno 
                </footer>
            </div>
        );
    }
}