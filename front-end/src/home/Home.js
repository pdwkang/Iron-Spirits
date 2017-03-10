import React, { Component } from 'react';
import IronFooter from '../IronFooter.js'
import $ from 'jquery';
import { hashHistory } from 'react-router';

var Carousel = require('nuka-carousel');

class HomeCarousel extends Component{
	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
	}
	resize(){
		window.dispatchEvent(new Event('resize'));	
	}
	render(){
		var autoplay = true
		return(
			<div className='carousel-and-text'>
				<Carousel autoplay={autoplay}>
			        <img className='faded-carousel-image' onLoad={this.resize}  src={require('./images/image.jpeg')} alt=' '/>
			        <img className='faded-carousel-image' onLoad={this.resize}  src={require('./images/imag2.jpeg')} alt=' '/>
			        <img className='faded-carousel-image' onLoad={this.resize}  src={require('./images/image.jpeg')} alt=' '/>
	  			</Carousel>
  				<CarouselText />
  			</div>
		)
	}
}

class CarouselText extends Component{
	render(){
		return(
			<div className='carousel-text-wrapper'>
				<div className='carousel-text-header'>
					IRON SPIRITS
				</div>
				<div className='carousel-text-body'>
					<div className='carousel-slogan'>Inspired Creative</div>
					<div className='carousel-quote'>"Creating innovative and beautiful spaces<br/> with quality craftsmanship"</div>
				</div>
			</div>
		)
	}
}

class ProductOffering extends Component{
	render(){
		return(
			<div className='width100vw'>
				<div className='offering-header'>Our Product Offerings</div>
				<div className='offering-body'>
					<div className='each-offering-wrapper'>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							THEMED ENIVRONMENTS
						</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							MURALS</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							ARCHITECTURAL SIGNAGE</div>
						
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							CUSTOM PROPS & SETS</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							CUSTOME FIXTURES</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							2D AND 3D SCULPTURE</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							ILLUSTRATION & DESIGN</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							DIGITAL MEDIA</div>
						<div className='each-offering col-md-4 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							INTERACTIVE ELEMENTS</div>
					</div>
					<div className='after-bootstrap-placeholder'>&nbsp;</div>
				</div>
			</div>
		)
	}
}

class Video extends Component{
	render(){
		return(
			<div style={{width:'75%', margin:'auto'}}>
				<video src={require('./test.mp4')} type='video/mp4' controls autoplay loop id="theVid" width='100%'/>
			</div>
		)
	}
}

class SocialMedia extends Component{
	render(){
		return(
			<div style={{textAlign:'center'}}>
				<hr/>
				<h1>social media links</h1>
					<IronFooter />
			</div>
		)
	}
}

class RecentProjects extends Component{
	render(){
		return(
			<div style={{height:300, textAlign:'center'}}>
				<hr/>
				<h1>Recent Projects</h1>
			</div>
		)
	}
}

class Clients extends Component{
	render(){
		return(
			<div style={{textAlign:'center'}}>
				<hr/>
				<h1> Clients </h1>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
				<div className='col-sm-2'><img style={{width:'100%'}} src={require('./images/brand-logo.png')} alt='a'/></div>
			</div>
		)
	}
}

class Specialty extends Component{
	render(){
		return(
			<div className='width100vw'>
				<div className='specialty-header'>Areas of Specialty</div>
				<div className='specialty-body'>
					<div className='each-specialty-wrapper'>
						
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							RELIGIOUS ORGANIZATIONS</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							MEDICAL / DENTAL</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							RESTAURANTS / RETAIL</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							CORPORATE</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							MUSEUMS</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							EDUCATIONAL INSTITUTIONS</div>
						<div className='each-specialty col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/blue-icon-example.png')} alt=' '/>
							<br/>
							THEATER</div>
						{/*<div className='col-xs-12' style={{height:20, letterSpacing:.5, textAlign:'center'}}>Client list available upon request</div>*/}
						<div className='after-bootstrap-placeholder'>&nbsp;</div>
					</div>
				
				</div>
			</div>		
		)
	}
}
var differenceText1 = 'In the industry of environmental and identity theming, you have many companies to choose from spanning all sizes, price points, and product offerings.  For us, we want you to understand who we are and how we produce work. At Ironspirits, we are a full service company built upon several key principles:'
var freshArtistryText = 'With every project, the ideas you share are met with excitement and experience.  Your personality is incorporated into the design and the details are not rushed in production and installation.  Our team is constantly looking at new methods, new materials, new designs, and new technology to create memorable, meaningful and lasting environments that will engage and inspire people for years to come. Our work is original – you will not find it anywhere else!'
var stewardshipText = 'Whether your budget is small or large, we will provide the “fullest” deliverable possible.  We have built our company to be nimble enough to work with diverse budgets and industries.  We place our efforts in giving you a space that is balanced, functional, and long lasting where your monies can be applied in the most responsible way possible.  We have many creative elements at our disposal in producing your project – knowing how to discern and implement is where our experience makes a difference.'
var collaborationText = 'Joining Ironspirits as a client, you become part of our team.  The entire process of creating your ideas is based upon the dynamic between you and us.  We are here to serve you by making your dreams a reality.  We want your input and involvement throughout the process – we are not here to sell you a set of products.  And, in our history, our clients continue to come back even after the final punch list is signed with more ideas and even refreshers on their spaces.'

class Difference extends Component{
	render(){
		return(
			<div className='width100vw'>
				<div className='difference-header'>What Makes Us Different?</div>
				<div className='difference-wrapper'>
					<div className='difference-header-text'>{differenceText1}</div>
					<div className='each-difference-wrapper'>
						<div className='each-difference col-md-4 col-sm-6 col-xs-12'>
							<div className='each-difference-header'>
								Fresh Artistry & Impeccable Craftsmanship 
							</div>
							<div>{freshArtistryText}</div>
						</div>
						<div className='each-difference col-md-4 col-sm-6 col-xs-12'>
							<div className='each-difference-header'>
								Responsible Stewardship
							</div>
							<div>{stewardshipText}</div>
						</div>
						<div className='each-difference col-md-4 col-sm-6 col-xs-12'>
							<div className='each-difference-header'>
								Creative Collaboration
							</div>					
							<div>{collaborationText}</div>
						</div>
						<div className='after-bootstrap-placeholder'>&nbsp;</div>
					</div>
				</div>
			</div>			
		)
	}
}

class ContactForm extends Component {
	handleContact(event){
		event.preventDefault();
		$.ajax({
			url: 'http://pauldkang.com:3001/send/email',
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			method: 'POST',
			crossDomain: 'true',
			dataType: 'json',
			data: {'name': event.target[0].value,'email':event.target[1].value, 'message': event.target[2].value},
			success: (data)=>{
				hashHistory.push({pathname:'/',query:'1',state:{thanksSent:true}});
				console.log(this)
			}
		}).fail(function(jqXhr) {
			console.log('failed');
		});
	}

	render() {
		return (
			<div className="qwqweqweqweqwe" style={{textAlign:'center'}}>

				<div className="title">
				</div>
				<div className="someclassssss" style={{marginTop:150}}>
					<h1>Send a message</h1>
					<form onSubmit={this.handleContact}>
						<input className="textbox" type="text" placeholder="Name"/><br/>
						<input className="textbox" type="email" placeholder="Email" /><br/>
						<textarea className="textarea" type="text-area" placeholder="Message"></textarea><br/>
						<input className="submit-btn" type="submit" value="Submit"/>
					</form>
				</div>
				
			</div>
		)
	}
}

class Home extends Component{
	render(){
    	return (
    		<div>
      			<HomeCarousel />
      			<ProductOffering />
      			<Video/>
      			<SocialMedia/>
      			<RecentProjects/>
      			<Clients/>
      			
      			<ContactForm/>
      		
      		</div>
		)
  	}
};

export default Home

// <Specialty />
// <Difference />