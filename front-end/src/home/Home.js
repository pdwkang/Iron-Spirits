import React, { Component } from 'react';
var Carousel = require('nuka-carousel');

class HomeCarousel extends Component{
	render(){
		return(
			<Carousel autoplay={true}>
		        <img className='faded-carousel-image' src={require('./images/image.jpeg')} alt=' '/>
		        <img className='faded-carousel-image' src={require('./images/imag2.jpeg')} alt=' '/>
		        <img className='faded-carousel-image' src={require('./images/image.jpeg')} alt=' '/>
  			</Carousel>
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
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							THEMED ENIVRONMENTS
						</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							MURALS</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							ARCHITECTURAL SIGNAGE</div>
						
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							CUSTOM PROPS & SETS</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							CUSTOME FIXTURES</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							2D AND 3D SCULPTURE</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							ILLUSTRATION & DESIGN</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
							<img className='each-icon-offering' src={require('./images/orange-icon-example.png')} alt=' '/>
							<br/>
							DIGITAL MEDIA</div>
						<div className='each-offering col-md-3 col-sm-4 col-xs-6'>
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

class IronFooter extends Component{
	render(){
		return(
			<div className='width100vw home-footer'>
				<div className='footer-wrapper'>
					<div className='footer-connect'>CONNECT WITH IRON SPIRITS</div>

					<a target="_blank" href='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5162fff83017c0e0&source=men-300&lng=en&s=email&url=https%3A%2F%2Fwww.ironspirits.com%2Fhome.html&title=Iron%20Spirits%20-%20Children%20Themed%20Environments%2C%20Architectural%20Signage%2C%20Business%20Signs&ate=AT-ra-5162fff83017c0e0/-/-/58b2fdac2f4cb6ab/2&uid=589d13ce469a9531&description=Iron%20Spirits%20Children%20Themed%20Environments%20%E2%80%A2%20Ministry%20%26%20Corporate%20Themed%20Space%20Design%2C%20Signage%2C%20Design%20Planning%2C%20Custom%20Props%2C%20Fixtures%20%26%20Sets%2C%20Illustration%20%26%20Design&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fwww.ironspirits.com%2Fabout-us.html&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D1%26url%3Dhttps%253A%252F%252Fwww.ironspirits.com%252Fhome.html%26title%3DIron%2520Spirits%2520-%2520Children%2520Themed%2520Environments%252C%2520Architectural%2520Signage%252C%2520Business%2520Signs%26description%3DIron%2520Spirits%2520Children%2520Themed%2520Environments%2520%25E2%2580%25A2%2520Ministry%2520%2526%2520Corporate%2520Themed%2520Space%2520Design%252C%2520Signage%252C%2520Design%2520Planning%252C%2520Custom%2520Props%252C%2520Fixtures%2520%2526%2520Sets%252C%2520Illustration%2520%2526%2520Design%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fwww.ironspirits.com%25252Fabout-us.html%2526sta%253DAT-ra-5162fff83017c0e0%25252F-%25252F-%25252F58b2fdac2f4cb6ab%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=pubid%3Dra-5162fff83017c0e0%26product%3Dundefined%26widgetId%3Dundefined%26ui_pane%3Demail&rb=false'>
						<img className='each-logo' src={require('../../public/mail.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.facebook.com/IronSpirits/'>
						<img className='each-logo' src={require('../../public/facebook.png')} alt=' ' />
					</a>
					<a target="_blank" href='https://twitter.com/IronSpirits_llc'>
						<img className='each-logo' src={require('../../public/twitter.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.pinterest.com/ironspirits2/'>
						<img className='each-logo' src={require('../../public/pinterest.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.instagram.com/iron_spirits/'>
						<img className='each-logo' src={require('../../public/instagram.png')} alt=' ' />
					</a>
					<div className='rights'>Copyright 2016. Iron Spirits llc. All Rights Reserved.</div>
				</div>
			</div>
		)
	}
}


const Home = React.createClass({
	render() {
    	return (
    		<div>
    			<div className='carousel-and-text'>
      				<HomeCarousel />
      				<CarouselText />
      			</div>
      			<ProductOffering />
      			<Specialty />
      			<Difference />
      			<IronFooter />
      		</div>
		)
  	}
});

export default Home