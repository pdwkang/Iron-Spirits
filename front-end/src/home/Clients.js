import React, { Component } from 'react';


var clientLogos = [
	require('./images/mellowMushroom.jpg'),
	require('./images/michelin.jpg'),
	require('./images/church.jpg')
]

class Clients extends Component{
	render(){
		return(
			<div className='client-wrapper'>
				<div className='section-header5'>Brands We Worked With</div>
				<div className='row' style={{width:'100%'}}>
					<div style={{width:'80%', margin:'auto', marginTop:50}}>
						<div>
							<div className='col-sm-4'> <img className='client-img' src={clientLogos[0]} /> </div>
							<div className='col-sm-4'> <img className='client-img' src={clientLogos[1]} /> </div>
							<div className='col-sm-4'> <img className='client-img' src={clientLogos[2]} /> </div>
						</div>
						<div className='client-name'>
							<div className='col-sm-4'>Mello Mushroom</div>
							<div className='col-sm-4'>Michelin Tires</div>
							<div className='col-sm-4'>North Point <br/>Community Church</div>
						</div>
					</div>
				</div>
				<div>&nbsp;</div><br/>
			</div>
		)
	}
}

export default Clients;