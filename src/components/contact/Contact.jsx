import React, { useRef, useState } from 'react'
import "./Contact.css"
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40x1gg2', 'template_pawhkws', form.current, 'SFcBqOt1Hxyjbb3Gk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
    setMessage(true);
  };

  return (
    <section id="contact">
      
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* Multiple Contact Options Section */}

        <div className="contact__options">

          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>imam.hilmi253@gmail.com</h5>
            <a href="mailto:imam.hilmi253@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>imamhilmi222</h5>
            <a href="https://m.me/imamhilmi222" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 851 5745 5371</h5>
            <a href="https://api.whatsapp.com/send?phone=+6285157455371" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>

        {/* End of Multiple Contact Options Section */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" id="name" placeholder="Your Name . . ." required />
          <input type="email" name="email" id="email" placeholder="Your Email . . ." required />
          <textarea name="message" id="message" rows="7" required>

          </textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>

          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

      </div>

    </section>
  )
}

export default Contact