import React from 'react';

const Footer = props => (<React.Fragment>
    <div className="row text-center border-top p-3 " style={{
        backgroundColor: "rgba(0,0,0,0.9)"
    }}>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="w-50 m-auto">
                <p className="h3 text-light">Contact us</p>
                <hr />
                <div>
                    <ul className="list-unstyled">

                        <li className="list-item">
                            <p className="text-muted "> <i className="fa fa-map-marker mr-2 text-success"></i> Suite F2B, AMB Plaza, plot 23 A.E. Ekukinam street Utako, F.c.t Abuja</p>
                        </li>
                        <li className="list-item my-2">
                            <p className="text-muted "> <i className="fa fa-phone mr-2 text-success"></i>
                   +234 08182825996</p>
                        </li>
                        <li className="list-item my-2">
                            <p className="text-muted "> <i className="fa fa-mobile mr-2 text-success"></i> +234 9029878482</p>
                        </li>
                        <li className="list-item my-2">
                            <p className="text-muted "> <i className="fa fa-envelope mr-2 text-success"></i> info@petjoaglobal.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">

            <div className="w-50 m-auto">
                <p className="h3 text-light">Recent Posts</p>
                <hr />
                <div>
                    <ul className="list-unstyled">

                        <li className="list-item my-2">
                           <i className="fa fa-pencil mr-2 text-danger"></i> <a className="text-muted" href="https://petjoaglobal.com/2018/06/08/5-reasons-you-should-become-an-entrepreneur/">5 Reasons You Should Become an Entrepreneur</a>
                        </li>
                        <li className="list-item my-2">
                           <i className="fa fa-pencil mr-2 text-danger"></i> <a className="text-muted" href="https://petjoaglobal.com/2018/06/04/our-commitment/">Our Commitment</a>
                        </li>
                        <li className="list-item my-2">
                           <i className="fa fa-pencil mr-2 text-danger"></i> <a className="text-muted" href="https://petjoaglobal.com/2018/05/29/happy-democracy-day/">Happy Democracy Day</a>
                        </li>
                        <li className="list-item my-2">
                           <i className="fa fa-pencil mr-2 text-danger"></i> <a className="text-muted" href="https://petjoaglobal.com/2018/05/21/7-profit-making-business-in-nigeria/">7 Profit Making Business in Nigeria</a>
                        </li>
                        <li className="list-item my-2">
                           <i className="fa fa-pencil mr-2 text-danger"></i> <a className="text-muted" href="https://petjoaglobal.com/2018/05/12/get-in-touch/">Get in touch</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div className="col-12 col-md-6 col-lg-4">

            <div className="w-50 m-auto">
                <p className="h3 text-light">Social Media</p>
                <hr />
                <div>
                    <ul className="list-unstyled">

                        <li className="list-item">
                            <a href="https://web.facebook.com/petjoaglobalnvestmentlimited/?notif_t=fbpage_fan_invite&notif_id=1488112795638048" className="text-muted "> <i className="fa fa-facebook mr-2 text-primary"></i> Facebook</a>
                        </li>
                        <li className="list-item my-2">
                            <a href="https://twitter.com/PetjoaGlobal" className="text-muted "> <i className="fa fa-twitter mr-2 text-info"></i>Twitter</a>
                        </li>
                        <li className="list-item my-2">
                            <a href="https://www.instagram.com/petjoaglobalinvltd/" className="text-muted "> <i className="fa fa-instagram mr-2 text-danger"></i> Instagram </a>
                        </li>
                        <li className="list-item my-2">
                            <a href="https://plus.google.com/u/0/101450511538919077416" className="text-muted "> <i className="fa fa-google mr-2 text-success"></i> Google Plus</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

</React.Fragment>);

export default Footer; 