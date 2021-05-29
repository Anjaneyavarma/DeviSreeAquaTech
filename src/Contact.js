import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div class='contact-container'>
            <div class='locate-container'>
                <div class='locate-header'>
                    <h2><span>Locate Us</span></h2>
                </div>
                <div class='locate-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15241.811415698881!2d82.5264375!3d17.2453125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f8d3d0811d47d92!2sDevi%20Sree%20Aquatech!5e0!3m2!1sen!2sin!4v1622280885323!5m2!1sen!2sin" 
                    width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            
            <div class="contact-details">
                <div class='phone-container'>
                    <h1><span>Contact</span></h1>
                    <a><button>Contact</button></a>
                    <p>9949425678</p>
                </div>
                <div class='address-container'>
                    <h1><span>Address</span></h1>
                    <a><button>Get directions</button></a>
                    <p>6GWG+4H Kona Forest, Andhra Pradesh<br></br>
                        Kona Forest, Andhra Pradesh<br></br>
                        533401<br></br>
                        India
                    </p>
                </div>
                <div class='bussiness-container'>
                    <h1><span>Bussiness Hours</span></h1>
                    <p><strong><i>Mon:</i></strong> Open 24 hours<br></br>
                    <strong><i>Tue:</i></strong> Open 24 hours<br></br>
                    <strong><i>Wed:</i></strong> Open 24 hours<br></br>
                    <strong><i>Thur:</i></strong> Open 24 hours<br></br>
                    <strong><i>Fri:</i></strong> Open 24 hours<br></br>
                    <strong><i>sat:</i></strong> Open 24 hours<br></br>
                    <strong><i>Sun:</i></strong> Open 24 hours
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;