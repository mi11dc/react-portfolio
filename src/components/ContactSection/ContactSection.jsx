import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
            <div className="contact-form">
                <form>
                    {/* <!-- <label for="name">Name:</label><br> --> */}
                    <input type="text" className="contact-form-input" placeholder="Name" id="name" name="name" /><br /><br />
                
                    {/* <!-- <label for="email">Email:</label><br> --> */}
                    <input type="email" className="contact-form-input" placeholder="Email" id="email" name="email" /><br /><br />
                
                    {/* <!-- <label for="message">Message:</label><br> --> */}
                    <textarea id="message" className="contact-form-input" name="message" placeholder="Message" rows="5" /><br /><br />

                    <input className="contact-form-button" type="submit" value="Send" />
                </form>
            </div>
    </section>
  );
};

export default ContactSection;
