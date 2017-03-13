import React, { Component } from 'react';

class WhatWeDo extends Component{
	render(){
		return(
			<div style={{width:'80%', margin:'auto'}}>
				<div className='section-header'>What Do We Do?</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>THEMED ENVIRONMENTS</div>
					<div className='home1-body'>From fun and whimsical themes for children's areas to more mature and elegant solutions for older audiences.</div>
				</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>ARCHITECTURAL SIGNAGE</div>
					<div className='home1-body'>From ADA compliant signage for wayfinding needs, brands and logos, and the outdoors to specialty designed signs for your space.</div>
				</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>CUSTOM PROPS & SETS</div>
					<div className='home1-body'>From a simple puppet theatre or stage set to a conference-style prop that highlights your brand and makes a bold statement.</div>
				</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>MURALS & ILLUSTRATION</div>
					<div className='home1-body'>From paint-by-number mural templates that engage your volunteer base to uniquely, hand-painted designs by our own artisans.</div>
				</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>2D AND 3D SCULPTURE</div>
					<div className='home1-body'>From wall stick-on's that add some depth and playful sculptures to grab attention to life-sized oak trees and larger-than-life animals.</div>
				</div>
				<div className='col-sm-4 col-xs-12 home1-wrapper'>
					<div className='home1-header'>DESIGN CONSULTATION</div>
					<div className='home1-body'>From a discussion to spark ideas for your space to an extensive design consultation with renderings and personal meetings with our Creative Director.</div>
				</div>																				
			</div>
		)
	}
}

export default WhatWeDo