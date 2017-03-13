import React, { Component } from 'react';
import $ from 'jquery';
import { hashHistory } from 'react-router';

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
				<br/>
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


export default ContactForm