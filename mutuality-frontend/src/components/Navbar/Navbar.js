import React, { Component } from 'react';
import logo from '../..//Logo.svg';

export default class Navbar extends Component {
    constructor() {
        super();   
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.myRef = React.createRef();
        this.state = {
          popupVisible: false,
        };

    }
    
    handleClick() {
        if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
            })
        );
    }
    
    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }   
        this.handleClick();
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark primary-color">
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <a href="https://mutualityapp.com" className="App-logo"><img src={logo}  alt="logo" /></a>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mutualityapp.com"> Mutuality
                            <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown" ref={node => { this.node = node; }}>
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" 
                                onClick={this.handleClick}>Explore
                            </a>
                            {this.state.popupVisible && (
                                <div>
                                    <a className="dropdown-item" href="https://www.google.com/">All</a>
                                    <a className="dropdown-item" href="https://www.google.com/">Sports</a>
                                    <a className="dropdown-item" href="https://www.google.com/">Entertainment</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Message</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <p style={{fontSize:'0.85rem',color:'white', align:'left', display:'inline-block'}}>Already have an account?</p>
                    <a className="nav-link" style={{color:'white',display:'inline-block'}}>Log in</a>
                </div>
            </nav>  
        )
    }
}


