import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, BriefcaseBusiness, Lightbulb, BadgeCheck, Brain, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carousel auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  // Add fade-in effect for sections
 useEffect(() => {
  const fadeElements = document.querySelectorAll('.fade-in-section');

  // More efficient observer that stops watching elements once they've animated
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Stop observing this element once it's animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is in view
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
          <div className="empoweredge-hero-buttons">
            <Link to="/booking" className="cta-button">Schedule Assessment</Link>
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

      {/* Success Stories */}
      <section id="success-stories" className="section gray fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"EmpowerEdge Skill Center helped my son develop confidence and job skills that led to his first paying position. The coaches were patient and understanding of his unique needs while pushing him to grow. He's now been employed for over a year and loves his job!"</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Maria T.</p>
                <p className="author-relation">Parent of Program Graduate</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Before joining EmpowerEdge, I struggled with talking to people and handling money. Now I work at a grocery store, have my own bank account, and even take the bus by myself. The social skills training really helped me feel comfortable talking to customers."</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">James K.</p>
                <p className="author-relation">Program Participant</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As an employer who has hired multiple graduates from EmpowerEdge, I've been impressed by how well-prepared they are for the workplace. The ongoing support from their job coaches ensures a smooth transition and helps us create an inclusive environment that benefits everyone."</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Robert L.</p>
                <p className="author-relation">Local Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="section light fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Join Our Program</h2>
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
              <p className="enrollment-note">Our programs are individualized to meet the specific needs and goals of each participant. Contact us to schedule an initial consultation and learn more about which services would be most beneficial.</p>
            </div>

            <div className="enrollment-cta">
              <h3>Ready to Get Started?</h3>
              <p>Take the first step toward independence and career success by scheduling an assessment with our team.</p>
              <div className="enrollment-buttons">
                <Link to="/booking" className="cta-button">Schedule Assessment</Link>
                <a href="#contact" className="cta-button">Contact Us</a>
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
                  <Users size={20}/>
                  <span>Now accepting new participants</span>
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
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmpowerEdgeSkillCenter;