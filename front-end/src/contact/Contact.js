import React, { Component } from 'react';
import $ from 'jquery';
import { hashHistory } from 'react-router';



class Contact extends Component {
	handleContact(event){
		event.preventDefault();
		$.ajax({
			url: 'http://pauldkang.com:3000/send/email',
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
			<div className="qwqweqweqweqwe" >
				<div className="title">
					<h1>Contact Us!</h1>
				</div>
				<div className="someclassssss">
					<h2>Send a message</h2>
					<form onSubmit={this.handleContact}>
						<input className="textbox" type="text" placeholder="Your Name"/><br/>
						<input className="textbox" type="email" placeholder="Email" /><br/>
						<textarea className="textarea" type="text-area" placeholder="Your Message"></textarea><br/>
						<input className="submit-btn" type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default Contact;