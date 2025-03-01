import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './BookingPage.css';
import ThemeSwitcher from './ThemeSwitcher'; // Import ThemeSwitcher

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'in-home',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      service: formData.service === 'in-home' ? 'In-Home Respite Care' : 'Out-of-Home Respite Care',
      message: formData.message || 'No special requirements provided',
      to_email: 'dford@empowercarellc.com' // Email recipient
    };

    // Send email using EmailJS
    emailjs.send(
      'service_o5kc9pl',
      'template_1w5zv6l',
      templateParams,
      '_exHAC5L2fEWp_FA4'
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'in-home',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <div className="header-left">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <h1>Book Your Appointment</h1>

        <div className="header-right">
          <ThemeSwitcher />
        </div>
      </div>

      <div className="booking-container">
        <div className="booking-info">
          <h2>Appointment Information</h2>
          <p>
            Please fill out the form to schedule your appointment with EmpowerCare.
            We offer both in-home and out-of-home respite care services.
          </p>
          <p>
            Once you submit your request, our team will contact you within 24 hours
            to confirm the details and discuss your specific needs.
          </p>
          <div className="booking-contact-info">
            <p><Phone size={16}/> (214-225-0823)</p>
            <p><Mail size={16}/> dford@empowercarellc.com</p>
          </div>

          <div className="booking-page-logo">
            <img
                src="/empowercarelogo.jpg"
                alt="EmpowerCare"
                className="booking-logo-image"
            />
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <div className="form-status success">
              Thank you for your booking request! We will contact you shortly to confirm your appointment.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-status error">
              There was a problem submitting your request. Please try again or contact us directly.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">
              <User size={16}/>
              <span>Full Name</span>
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={16}/>
              <span>Email Address</span>
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={16}/>
              <span>Phone Number</span>
            </label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">
              <Calendar size={16}/>
              <span>Preferred Date</span>
            </label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">
              <Clock size={16}/>
              <span>Preferred Time</span>
            </label>
            <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                    type="radio"
                    name="service"
                    value="in-home"
                    checked={formData.service === 'in-home'}
                    onChange={handleChange}
                />
                <span>In-Home Respite Care</span>
              </label>
              <label className="radio-label">
                <input
                    type="radio"
                    name="service"
                    value="out-of-home"
                    checked={formData.service === 'out-of-home'}
                    onChange={handleChange}
                />
                <span>Out-of-Home Respite Care</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <MessageSquare size={16}/>
              <span>Special Requirements or Notes</span>
            </label>
            <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="cta-button booking-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;