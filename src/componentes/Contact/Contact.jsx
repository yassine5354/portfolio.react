import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofju8ys','template_l5voy5n', form.current, 'dWb7udHyiWxjNNwyL')
    e.target.reset()
  };
  return (
    <section id="contact" className='hidden'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="hidden contact__option">
            <MdEmail className='hidden contact__option-icon'/>
            <h4>Email</h4>
            <h5>yass515bec@gmail.com</h5>
            <a href="mailto:yass515bec@gmail.com" target='_blanck'>Send me a message</a>
          </article>
          <article className="hidden contact__option">
            <IoLogoWhatsapp className='hidden contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+212 687756788</h5>
            <a href="https://wa.me/+212687756788" target='_blanck'>Send me a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='hidden'>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='name' placeholder="Your Email" required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
           
      </div>
    </section>
  )
}

export default Contact