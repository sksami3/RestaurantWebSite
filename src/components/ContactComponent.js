import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        150/3, Road No# 2/1, Mirpur, Dhaka<br />
                        Bangladesh<br />
                        <i className="fa fa-phone"></i>: +88 01765459060<br />
                        <i className="fa fa-fax"></i>: +88 01622689262<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:sksami4456@gmail.com">sksami4456@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+8801765459060"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;