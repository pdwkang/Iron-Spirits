import React, { Component } from 'react';


class Philosophy extends Component{
	render(){
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<video src={require('./test.mp4')} type='video/mp4' controls autoplay loop id="theVid" width='100%'/>
			</div>
		)
	}
}

export default Philosophy;