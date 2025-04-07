import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, BriefcaseBusiness, Lightbulb, BadgeCheck, Brain, Calendar, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import './EmpowerEdgeSkillCenter.css';

function EmpowerEdgeSkillCenter() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgrounds = [
    '/skillcenter.jpeg',
    '/skillcenter2.jpg',
    '/skillcenter3.jpeg',
    '/skillcenter4.jpg'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

 useEffect(() => {
  const fadeElements = document.querySelectorAll('.fade-in-section');

  // More efficient observer that stops watching elements once they've animated
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Start observing elements
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    fadeElements.forEach(element => {
      observer.unobserve(element);
    });
  };
}, []);

  return (
    <div className="empoweredge-page">
      <div className="booking-header">
        <div className="header-left">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <h1>EmpowerEdge Skill Center</h1>

        <div className="header-right">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Hero Carousel Section */}
      <div className="empoweredge-hero">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : 'inactive'}`}
          >
            <img
              src={bg}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
            <div className="slide-overlay"/>
          </div>
        ))}

        {/* Slide Navigation */}
        <button
          className="slide-nav-button prev"
          onClick={prevSlide}
        >
          <ChevronLeft size={48}/>
        </button>
        <button
          className="slide-nav-button next"
          onClick={nextSlide}
        >
          <ChevronRight size={48}/>
        </button>

        {/* Hero Content */}
        <div className="empoweredge-hero-content">
          <div className="empoweredge-logo-container">
            <img src="/empoweredge-logo.jpg" alt="EmpowerEdge Skill Center Logo" className="empoweredge-logo" />
          </div>
          <h1 className="empoweredge-hero-title">EmpowerEdge Skill Center</h1>
          <p className="empoweredge-hero-subtitle">Your path to success</p>
          <div className="coming-soon-badge">Coming Soon</div>
          <div className="empoweredge-hero-buttons">
            <a href="#contact" className="cta-button">Call For Information</a>
            <a href="#programs" className="cta-button">Explore Programs</a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="section light fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Our Mission</h2>
          <div className="about-content">
            <p className="about-text">
              At EmpowerEdge Skill Center, we are dedicated to empowering individuals with special needs to develop essential life skills, build social competencies, and achieve meaningful employment. We believe that everyone deserves the opportunity to reach their full potential and contribute to their communities in valuable ways.
            </p>
            <p className="about-text">
              Our comprehensive approach combines personalized instruction, practical skill-building, and supportive job placement services to create a pathway to independence and success for both young adults and older adults with special needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="programs" className="section gray fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Our Programs</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Lightbulb size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Life Skills Development</h3>
              <p className="service-text">
                Our comprehensive life skills program covers essential daily living skills including personal care, home management, financial literacy, technology use, transportation navigation, and community safety. Through hands-on practice and personalized instruction, participants gain confidence and independence in managing everyday tasks.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Social Skills Training</h3>
              <p className="service-text">
                Develop crucial interpersonal abilities through our structured social skills program. Participants learn effective communication, emotional regulation, conflict resolution, teamwork, and appropriate workplace interactions. Our supportive group sessions provide a safe environment to practice these skills through role-playing and guided activities.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <BriefcaseBusiness size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Job Coaching</h3>
              <p className="service-text">
                Our experienced job coaches provide individualized support throughout the employment journey. From resume building and interview preparation to workplace adaptations and on-site support, we help participants navigate the challenges of securing and maintaining meaningful employment while developing professional competencies.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <BriefcaseBusiness size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Job Placement</h3>
              <p className="service-text">
                We partner with local employers to identify suitable job opportunities that match our participants' skills and interests. Our placement specialists facilitate connections, advocate for inclusive hiring practices, and provide ongoing support to ensure successful employment outcomes and workplace accommodations.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <BadgeCheck size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Vocational Skill Certification</h3>
              <p className="service-text">
                Gain valuable credentials through our specialized vocational training programs. Participants can earn certifications in various fields such as customer service, food handling, computer skills, and more. These industry-recognized credentials enhance employability and open doors to diverse career opportunities.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Brain size={40} color="#2e85ed" />
              </div>
              <h3 className="service-title">Cognitive Skills Enhancement</h3>
              <p className="service-text">
                Strengthen problem-solving abilities, critical thinking, and decision-making skills through our cognitive enhancement program. Using evidence-based techniques and adaptive technologies, we help participants develop the mental agility needed for workplace success and independent living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section light fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Our Approach</h2>
          <div className="process-container">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3 className="process-title">Initial Assessment</h3>
              <p className="process-text">
                We begin with a comprehensive evaluation to understand individual strengths, challenges, interests, and goals. This personalized assessment informs the development of a customized skill-building plan.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">2</div>
              <h3 className="process-title">Skill Development</h3>
              <p className="process-text">
                Participants engage in structured training programs focusing on their identified areas of need, with regular progress monitoring and adaptive instruction to ensure continuous growth.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">3</div>
              <h3 className="process-title">Practical Application</h3>
              <p className="process-text">
                Real-world practice opportunities allow participants to apply their skills in community and workplace settings with supportive guidance from our experienced coaches.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">4</div>
              <h3 className="process-title">Job Matching & Placement</h3>
              <p className="process-text">
                We connect participants with suitable employment opportunities aligned with their abilities and interests, facilitating successful workplace integration.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">5</div>
              <h3 className="process-title">Ongoing Support</h3>
              <p className="process-text">
                Our commitment extends beyond initial placement, with continued coaching and advocacy to ensure lasting success and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section id="coming-soon" className="section gray fade-in-section">
        <div className="section-container">
          <div className="coming-soon-container">
            <div className="coming-soon-icon">
              <Calendar size={60} color="#2e85ed" />
            </div>
            <h2 className="coming-soon-title">Program Launching Soon</h2>
            <p className="coming-soon-text">
              We're excited to announce that the EmpowerEdge Skill Center programs are currently in development and will be launching soon. We're working diligently to create high-quality, impactful services that will make a difference in our community.
            </p>
            <div className="coming-soon-cta">
              <h3>Want to be notified when we launch?</h3>
              <p>Contact us today to join our waiting list and be among the first to know when our programs become available.</p>
              <div className="coming-soon-buttons">
                <a href="tel:+214-225-0823" className="cta-button phone-button">
                  <PhoneCall size={20} />
                  <span>Call For Information</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="section light fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Program Information</h2>
          <div className="enrollment-container">
            <div className="enrollment-info">
              <h3>Program Details</h3>
              <ul className="enrollment-details">
                <li><strong>Eligibility:</strong> Individuals with special needs ages 16 and older</li>
                <li><strong>Program Duration:</strong> Flexible programs ranging from 3-12 months based on individual needs</li>
                <li><strong>Location:</strong> Heartland facility with community-based activities</li>
                <li><strong>Schedule:</strong> Full-time and part-time options available</li>
                <li><strong>Funding Options:</strong> Private pay, Medicaid waiver programs (when applicable), and scholarships available</li>
              </ul>
              <p className="enrollment-note">Our programs are individualized to meet the specific needs and goals of each participant. Contact us to learn more about which services would be most beneficial when we launch.</p>
            </div>

            <div className="enrollment-cta">
              <h3>Be First In Line</h3>
              <p>Programs are not yet available, but you can join our waiting list to be notified when registration opens.</p>
              <div className="enrollment-buttons">
                <a href="#contact" className="cta-button">Contact Us</a>
                <a href="tel:+214-225-0823" className="cta-button">
                  <PhoneCall size={16} style={{ marginRight: '8px' }} />
                  Call For Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section gray fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Contact EmpowerEdge</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <Calendar size={20}/>
                  <span>Monday-Friday: 9:00 AM - 5:00 PM</span>
                </div>
                <div className="contact-item">
                  <PhoneCall size={20}/>
                  <span>Call us at: 214-225-0823</span>
                </div>
                <div className="contact-item">
                  <Users size={20}/>
                  <span>Now accepting waiting list sign-ups</span>
                </div>
                <div className="contact-item">
                  <ArrowLeft size={20}/>
                    <Link to="/" className="main-site-link">Visit our main site for more services</Link>
                </div>
              </div>

              <div className="empoweredge-logo-contact">
                <img src="/empoweredge-logo.jpg" alt="EmpowerEdge Skill Center Logo" />
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required/>
              </div>
              <div className="form-group">
                <label htmlFor="interest">Area of Interest</label>
                <select id="interest" name="interest" required>
                  <option value="">Select an option</option>
                  <option value="life-skills">Life Skills Development</option>
                  <option value="social-skills">Social Skills Training</option>
                  <option value="job-coaching">Job Coaching</option>
                  <option value="job-placement">Job Placement</option>
                  <option value="vocational">Vocational Training</option>
                  <option value="general">General Information</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="cta-button">Join Waiting List</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmpowerEdgeSkillCenter;
