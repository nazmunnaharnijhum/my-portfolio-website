import { useRef } from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kleia3o', 'template_o04shsl', form.current, 'B0E9NeGkSwb-7itF7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section>
            <div className="contact-container">
                <div className="heading">
                <h2>Contact <span>Me</span></h2>
                </div>
                <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" className="" value="Send" />
    </form>
            </div>
        </section>
    );
};

export default Contact;