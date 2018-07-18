
import React from 'react';

const Footer = () => {
    return (
        <footer className="col-12 page-footer font-small stylish-color-dark pt-4">
            <div className="container text-center text-md-left">
                {/* <!-- Grid row --> */}
                <div className="row">
                    {/* <!-- Grid column --> */}
                    <div className="col-md-4 mx-auto">

                        {/* <!-- Content --> */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                            <a href='https:mutualityapp.com'>Mutuality</a>
                        </h5>

                        <a title="By Google Play (developer.android.com)" href="https://mutualityapp.com">
                            <img width="160" height="55" alt="Get it on Google play" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Get_it_on_Google_play.svg/512px-Get_it_on_Google_play.svg.png" />
                        </a>
                        <a title="By Apple Inc. (App Store Marketing (file)) [Public domain], via Wikimedia Commons" href="https://mutualityapp.com">
                            <img width="160" height="55" alt="Download on iTunes" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Download_on_iTunes.svg/512px-Download_on_iTunes.svg.png" />
                        </a>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none" />

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 mx-auto">

                        {/* <!-- Links --> */}
                        <h5 className="font-weight-bold mt-3 mb-4">Account</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Sign Up</a>
                            </li>
                            <li>
                                <a href="#!">Log In</a>
                            </li>
                            <li>
                                <a href="#!">Tutorials</a>
                            </li>
                            <li>
                                <a href="#!">FAQ</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none" />

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 mx-auto">

                        {/* <!-- Links --> */}
                        <h5 className="font-weight-bold  mt-3 mb-4">Discover</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Places</a>
                            </li>
                            <li>
                                <a href="#!">Events</a>
                            </li>
                            <li>
                                <a href="#!">Topics</a>
                            </li>
                            <li>
                                <a href="#!">Moments</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none" />

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 mx-auto">

                        {/* <!-- Links --> */}
                        <h5 className="font-weight-bold  mt-3 mb-4">About Mutuality</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">About Us</a>
                            </li>
                            <li>
                                <a href="#!">Mutuality Leadership</a>
                            </li>
                            <li>
                                <a href="#!">Job Opportunities</a>
                            </li>
                            <li>
                                <a href="#!">Investers</a>
                            </li>
                            <li>
                                <a href="#!">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}

            <hr />

            {/* <!-- Call to action --> */}
            <div className="row">
                <div className="col-6">
                    <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
                        </li>
                    </ul>
                </div>


                {/* <!-- Social buttons --> */}
                <div className="col-6" >
                    <ul className="list-unstyled list-inline text-center py-2" style={{ fontSize: '1.2rem' }}>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fa fa-facebook"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fa fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fa fa-google-plus"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fa fa-linkedin"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fa fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Social buttons --> */}

            {/* <!-- Copyright --> */}
            <div className="row">
                <div className="col-12 footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https:mutualityapp.com"> Mutualityapp.com</a>
                </div>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    )
}

export default Footer;
