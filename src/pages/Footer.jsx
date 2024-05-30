import React from 'react';
import "../css/Footer.css"
const Footer = () => {

    return (
    <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <section id="footer">
                    <div className="container">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">

                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="/how"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="/contactus"><i className="fa fa-angle-double-right"></i>Contact us</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Contact us</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="https://www.instagram.com/camellia.naturals?igsh=NWZzcDd5bmFiaTZn"><i className="fa fa-angle-double-right"></i>Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/company/camellianaturals/"><i className="fa fa-angle-double-right"></i>LinkedIn</a></li>
                                    <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=xQTrnnXjqmwZJtdfVBkmRxPwBRcgpTHhNndNlDtMdKDWftLpDphfMXZcZTbsnLgWkCgwZMZHzlvLSMTWRvltqMkjHGnpzdZwKXMTJScfqxzhhwrlVmvjq"><i className="fa fa-angle-double-right"></i>camellianaturalsherbs@gmail.com</a></li>
   
                                </ul>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a href="https://www.instagram.com/camellia.naturals?igsh=NWZzcDd5bmFiaTZn"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/camellianaturals/"><i className="fa fa-brands fa-linkedin"></i></a></li>
                                    <li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=xQTrnnXjqmwZJtdfVBkmRxPwBRcgpTHhNndNlDtMdKDWftLpDphfMXZcZTbsnLgWkCgwZMZHzlvLSMTWRvltqMkjHGnpzdZwKXMTJScfqxzhhwrlVmvjq"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p className="h6"><a className='rights'>© All right Reversed.</a><a className="text-green ml-2"  >Camellia Naturals </a></p>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Footer;