import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item"><Link className="footer__link" to="/aboutus" >About Us</Link></li>
                                <li class="footer__item"><Link className="footer__link" to="/services" >Services</Link></li>
                                <li class="footer__item"><Link className="footer__link" to="/employment" >Employment</Link></li>
                                <li class="footer__item"><Link className="footer__link" to="/contactus" >Contact Us</Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col">
                            <div class="footer__contact">
                            <ul class="footer__ul__list">
                                <li class="footer__ul_item">Hue Home Care Co</li>
                                <li class="footer__ul_item">725 Parkway Drive, Saint Paul, MN 55106</li>
                                <li class="footer__ul_item">Office: 651-231-5709</li>
                                <li class="footer__ul_item">Email: info@huehomecare.com</li>
                                <li class="footer__ul_item">Fax: 651-705-7066</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p class="footer__copyright">
                                Copyright &copy; 2020 by Hue Home Care Co. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
