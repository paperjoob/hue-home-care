import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import transparentLogo from "../images/logo_transparent.png";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
        }
        toggleNavbar() {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }
    
    render() {

        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* Logo Box */}
                    <div className="logo-box">
                        <a className="navbar-brand" href="/">
                            <img src={transparentLogo} alt="Hue Home Care Logo" className="logo-box__transparent" />
                        </a>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>

                    <div className="navbar-links">
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul class="navbar-nav text-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus" onClick={this.toggleNavbar}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services" onClick={this.toggleNavbar}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/employment" onClick={this.toggleNavbar}>Employment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contactus" onClick={this.toggleNavbar}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
