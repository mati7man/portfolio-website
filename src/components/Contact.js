import React, { useState } from 'react';
import contact1 from '../assets/contact-bg.svg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section className="contact" id="contact" style={{
      backgroundImage: `url(${contact1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    }}>
      <div className="contact-content">
        <h2>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I'd love to help with it!</h2>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Lorem Ipsum" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="loremipsum@gmail.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          
          <textarea 
            name="message" 
            placeholder="Write your message here..." 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
          
          <button type="submit" className="btn">Get in touch</button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 