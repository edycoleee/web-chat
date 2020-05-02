import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "./Home.css";
import image from "../../projectimages/ProjectImages";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="splash-container">
          <div class="splash">
            <h1 class="splash-head">WEB CHAT APP</h1>
            <p class="splash-subhead">Let's talk from anywhere during covid-19 pandemic</p>
            <div id="custom-button-wrapper">
              <Link to="/login">
                <a class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span className="buttoncooltext">Get Started</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h2 class="content-head is-center">
              Features of WebChat Application
            </h2>
            <div className="Appfeatures">
              <div className="containerhead">
                <h3 class="content-subhead">
                  <i class="fa fa-rocket"></i>
                  Get Started Quickly
                </h3>
                <p>
                  Just register yourself with this app and start chatting with
                  other
                </p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-sign-in"></i>
                  Firebase Autentication
                </h3>
                <p>Firebase Authentication has been implemented in this app</p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-th-large"></i>
                  Media
                </h3>
                <p>
                  You can share image with your friend for better experience
                </p>
              </div>
              <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                  <i class="fa fa-refresh"></i>
                  Updates
                </h3>
                <p>
                  We will working with new features for this app for better
                  experience in the feature
                </p>
              </div>
            </div>
          </div>
          <div class="AppfeaturesFounder">
              <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                  <img width="300" alt="File Icon" class="pure-img-responsive" src={image.edy} />                  
              </div>
              <div cls="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                  <h2 class="content-head content-head-ribbon">Edy Cole</h2>
                  <p style={{color:'white'}}>
                      The Founder of Kalijaga Coding
                  </p>
                  <p style={{color:'white'}}>
                      Curently Working at Kalijaga Coding and very budy to explore new ideas with new technologies being developed
                  </p>
              </div>
          </div>
          <div class="content">
              <h2 class="content-head is-center">Who We Are?</h2>
              <div class="Appfeatures">
                  <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
                      <form class="pure-form pure-form-stacked">
                          <fieldset>
                              <label for="name">Your Name</label>
                              <input id="name" type="text" placeholder="Your Name"/>
                              <label for="email">Your Email</label>
                              <input id="email" type="email" placeholder="Your email"/>
                              <label for="password">Your Password</label>
                              <input id="password" type="password" placeholder="Your Password"/>
                              <button type="submit" class="pure-button">Sign Up</button>
                          </fieldset>
                      </form>
                  </div>
                  <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                      <h4>Contact Us</h4>
                      <p>
                          For any question or suggestion you can directly contact us on our Facebook Page:
                          <a href="">https://web.facebook.com</a> 
                      </p>
                      <p>
                          Twitter: <a href="">https://twitter.com</a> 
                      </p>
                      <p>
                          Facebook: <a href="">https://web.facebook.com</a> 
                      </p>
                      <p>
                          Instagram: <a href="">https://instagram.com</a> 
                      </p>
                      <h4>More Information</h4>
                      <p>To whom it my concern
                      </p>
                      <p>
                          This app is developed for learning purpose - Developed by Edy Cole and Muh Ali and Muh Haris
                      </p>
                  </div>
              </div>
          </div>
          <Footer />
        </div>
        
      </div>
    );
  }
}
