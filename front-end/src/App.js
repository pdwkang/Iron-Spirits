import React from 'react';
import { IndexLink, Link } from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

//Routing Links
class IronSpiritsNavBar extends React.Component {
    render(){
        return(
            <div>
                <div className='navbar-wrapper-xs visible-xs'>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem href="/">
                                    <Link to="/">Home</Link>
                                </NavItem>
                                <NavItem href="/about">
                                    <Link to="about">About Us</Link>
                                </NavItem>
                                <NavItem href="/">
                                    <Link to="portfolio">Portfolio</Link>
                                </NavItem>                          
                                <NavItem ref="/">
                                    <Link to="contact">Contact Us</Link>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>       
                <div className='navbar-wrapper hidden-xs'>
                    <div className='navbar-inside-wrapper'>
                        <div className='each-nav-item'><IndexLink to="/">Home</IndexLink></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="about">About Us</Link></div>
                        <div className='ironspirits-logo'>
                            <div className='logo-tilt'></div>
                            <Link to="/"><img src={require('../public/logo.png')} alt=' '/></Link>
                        </div>
                        <div className='each-nav-item'><Link activeClassName='active' to="portfolio">Portfolio</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="contact">Contact Us</Link></div>
                    </div>
                </div>   
            </div>             
        )
    }
};

//parent of all pages, the top navbar stays same and still on all pages
class App extends React.Component{
    render(){
        return(
            <div>
                <IronSpiritsNavBar />
                {this.props.children}       
            </div>
        );
    }
}


export default App;
