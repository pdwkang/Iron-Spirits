import React, { Component } from 'react';


var clientLogos = [
	require('./images/mellowMushroom.jpg'),
	require('./images/michelin.jpg'),
	require('./images/church.jpg')
]

class Clients extends Component{
	render(){
		return(
			<div style={{width:'80%', margin:'auto'}}>
				<div className='section-header'>Brands We Worked With</div>
				<div className='col-sm-4' style={{padding:20}}> <img src={clientLogos[0]} /> </div>
				<div className='col-sm-4'> <img src={clientLogos[1]} /> </div>
				<div className='col-sm-4'> <img src={clientLogos[2]} /> </div>
				<div>&nbsp;</div>
			</div>
		)
	}
}

export default Clients;