import React from 'react';
// import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';

import vr from '../videos/Vr.mp4';
import foosball from '../videos/Foosball.mp4';
import diving from '../videos/Scuba Diving.mp4';
import wineTasting from '../videos/Wine Tasting.mp4';
import rockClimbing from '../videos/rockclimbing-trimmed1.mp4';

var index=1;

setInterval(
    ()=> {  
        let i;
        let videoArray = document.getElementsByClassName("videoslide")
        console.log(videoArray);
        for (i = 0; i < videoArray.length; i++) {
            videoArray[i].style.display = "none";
        }
        if (index >= videoArray.length) {
            index=0;
        }
        videoArray[index].style.display = "block";
        index++;    
    },7000
);



class Homepage extends React.Component {

    render() {
        return (
            <div style={{minWidth:'100% !important'}}>
                <Navbar />
                <div className="view" id ='main-bg' >
                    <video autoPlay loop muted id="myVideo" className="videoslide" style={{display:'block'}}>                       
                        <source  src={diving} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted id="myVideo" className="videoslide" style={{display:'none'}}>                       
                        <source  src={rockClimbing} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted id="myVideo" className="videoslide" style={{display:'none'}}>                       
                        <source  src={wineTasting} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted id="myVideo" className="videoslide" style={{display:'none'}}>                       
                        <source  src={foosball} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted id="myVideo" className="videoslide" style={{display:'none'}}>                       
                        <source  src={vr} type="video/mp4" />
                    </video>

                    <div  className="mask rgba-gradient d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                                    <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                                    <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                                        <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Find companions right now to do things you don't
                                            want to do alone
                                        </h6>
                                        <a className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                                </div>

                                <div className="col-md-6 col-xl-5 mb-4">
                                    <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <h3 >
                                                    <i className="fa fa-user"></i> Register:</h3>
                                                <hr className="hr-light" />
                                            </div>
                                            <div className="md-form">
                                                <i className="fa fa-user prefix active"></i>
                                                <input type="text" id="form3" className=" form-control" />
                                                <label htmlFor="form3" className="active">Name</label>
                                            </div>
                                            <div className="md-form">
                                                <i className="fa fa-envelope prefix active"></i>
                                                <input type="email" id="form2" className="form-control" />
                                                <label htmlFor="form2" className="active">Email address</label>
                                            </div>
                                            <div className="md-form">
                                                <i className="fa fa-lock prefix  active"></i>
                                                <input type="password" id="form4" className="form-control" />
                                                <label htmlFor="form4" className="active">Password</label>
                                            </div>
                                            <div className="text-center mt-4">
                                                <button className="btn btn-indigo">Sign up</button>
                                             
                                                <div className="inline-ul text-center d-flex justify-content-center">
                                                    <p className="p-2 m-2 follow-us">Follow Us</p>
                                                    <a className="p-2 m-2 tw-ic">
                                                        <i className="fa fa-twitter white-text"></i>
                                                    </a>
                                                    <a className="p-2 m-2 li-ic">
                                                        <i className="fa fa-linkedin white-text"> </i>
                                                    </a>
                                                    <a className="p-2 m-2 ins-ic">
                                                        <i className="fa fa-instagram white-text"> </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

             </div>
        )
    }
}
        
export default Homepage;