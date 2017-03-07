import React, {Component} from 'react';
import IronFooter from '../IronFooter.js'

//parent of all pages, the top navbar stays same and still on all pages
class Portfolio extends Component{
    render(){
        return(
            <div>
                Portfolio
                <IronFooter />    
            </div>
        );
    }
}


export default Portfolio;
