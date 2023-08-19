import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
            <div class="contact-form">
                <form>
                    {/* <!-- <label for="name">Name:</label><br> --> */}
                    <input type="text" class="contact-form-input" placeholder="Name" id="name" name="name" /><br /><br />
                
                    {/* <!-- <label for="email">Email:</label><br> --> */}
                    <input type="email" class="contact-form-input" placeholder="Email" id="email" name="email" /><br /><br />
                
                    {/* <!-- <label for="message">Message:</label><br> --> */}
                    <textarea id="message" class="contact-form-input" name="message" placeholder="Message" rows="5" /><br /><br />

                    <input class="contact-form-button" type="submit" value="Send" />
                </form>
            </div>
    </section>
  );
};

export default Contact;
