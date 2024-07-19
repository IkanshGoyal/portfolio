import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ba07wtp',
      'template_yhfmz0f',
      e.target,
      'ILmtoIKl4K0ISHwda'
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message, please try again.');
      }
    );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='contact-container'>
        <div className='contact-title'>Get in Touch</div>
        <div className='divider'></div>
        <div className='contact-description'>
          I would love to hear from you! Whether you have a question, a project, or just want to say hi, feel free to drop me a message.
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='button' type='submit'>Send</button>
        </form>
    </div>
  );
};

export default Contact;