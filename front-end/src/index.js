import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheets/styles.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.js';
import Home from './home/Home.js'
import About from './about/About.js'
import Portfolio from './portfolio/Portfolio.js'
import Contact from './contact/Contact.js'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="portfolio" component={Portfolio} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>,	
  document.getElementById('root')
);

