import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Plus, Minus } from 'lucide-react';
import BookingPage from './BookingPage';
import './App.css';
import emailjs from '@emailjs/browser';
import ThemeSwitcher from './ThemeSwitcher';

emailjs.init("_exHAC5L2fEWp_FA4");

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgrounds = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg'
  ];

    const teamImages = [
  '/julieann.jpg',
  '/adrian.jpg',
  '/don.jpg',
  '/eny.jpg'
];

  const [activeFaqId, setActiveFaqId] = useState(null);

  const navigate = useNavigate();

  const goToBooking = () => {
  navigate('/booking');
};


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

useEffect(() => {
  const handleCardClick = (e) => {
    const card = e.target.closest('.team-hover-card');
    if (!card) return;

    const allCards = document.querySelectorAll('.team-hover-card');

    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      allCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    }
  };

  const teamSection = document.getElementById('team');
  if (teamSection) {
    teamSection.addEventListener('click', handleCardClick);
  }
  return () => {
    if (teamSection) {
      teamSection.removeEventListener('click', handleCardClick);
    }
  };
}, []);

  const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

useEffect(() => {
  const cards = document.querySelectorAll('.team-hover-card');
  
  const handleTouch = function(e) {

    if (!this.classList.contains('active')) {
      e.preventDefault();
    }
    this.classList.toggle('active');
    
    cards.forEach(otherCard => {
      if (otherCard !== this) {
        otherCard.classList.remove('active');
      }
    });
  };
  cards.forEach(card => {
    card.addEventListener('touchstart', handleTouch);
  });
  return () => {
    cards.forEach(card => {
      card.removeEventListener('touchstart', handleTouch);
    });
  };
}, []);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={toggleFAQ}
      >
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

  return (
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-content">
              <div className="text-logo">EMPOWERCARE</div>

              <div className="desktop-menu">
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#team" className="nav-link">Team</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#contact" className="nav-link">Contact</a>
                <a href="/booking" className="nav-link">Book</a>
              </div>

              <div className="cart-menu">
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </nav>


        {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#team" className="nav-link">Team</a>
                <Link to="/booking" className="nav-link" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
              </div>
            </div>
        )}

        <div className="hero">
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
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                EmpowerCare
              </h1>
              <p className="hero-subtitle">
                Elevating In/Out Respite LLC
              </p>
              <button className="cta-button" onClick={goToBooking}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="section light">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <div className="about-content">
              <p className="about-text"><b>
                At EmpowerCare, we deliver exceptional respite care services both in-home and at our specialized
                facilities, serving individuals across the spectrum of disabilities. Our highly trained professionals
                are dedicated to providing personalized care while engaging clients in meaningful recreational
                activities tailored to their interests and abilities.
                We understand the demanding role of primary caregivers. Our mission extends beyond client care to
                supporting families and caregivers,
                offering them essential respite periods with the peace of mind that comes from knowing their loved ones
                are receiving attentive, professional care in a nurturing environment.
                Through our comprehensive approach, we create a supportive ecosystem that enhances the quality of life
                for both clients and their caregivers,
                fostering a balance of exceptional care and personal well-being.
              </b></p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-title">In-Home Respite Care</h3>
                <p className="service-text">Our in-home respite services bring professional care directly to your
                  doorstep. Our skilled caregivers provide personalized attention, assistance with daily activities, and
                  companionship in the comfort and familiarity of your home environment, ensuring your loved one
                  maintains their regular routine while receiving exceptional care.</p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Out-of-Home Respite</h3>
                <p className="service-text">Experience peace of mind with our facility-based respite care. In our
                  welcoming and secure environment, we provide structured activities, social interaction, and
                  round-the-clock professional care. This option offers a change of scenery for your loved one while
                  giving caregivers extended periods of rest.</p>
              </div>
              <div className="service-card">
                <h3 className="service-title">Specialized Care</h3>
                <p className="service-text">We offer tailored care solutions for individuals with specific needs,
                  including developmental disabilities, cognitive impairments, and physical limitations. Our specially
                  trained staff implements personalized care plans, incorporating therapeutic activities and specialized
                  support to enhance quality of life and promote independence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Get To Know Our Care Team</h2>

            <div className="team-hover-grid">
              {/* Julieann's Card */}
              <div className="team-hover-card">
                <img src={teamImages[0]} alt="Julieann" className="team-member-img"/>
                <h3 className="team-member-name">Julieann</h3>
                <p className="team-member-title">Respite Support Specialist</p>
                <div className="team-overlay">
                  <h3 className="team-member-overlay-name">Meet Julieann</h3>
                  <div className="team-member-description">
                    <p>Hello! I’m Julieann! I’m dedicated Registered Behavior Technician (RBT) based in the DFW area,
                      with a strong passion for supporting individuals on the autism spectrum. My journey in the field
                      began during high school when I volunteered in a special education classroom and formed a
                      meaningful connection with a peer on the spectrum. This experience sparked my curiosity about
                      autism and inspired me to pursue a career in Applied Behavior Analysis (ABA) therapy.
                      After high school, I worked as a paraprofessional in a special education classroom, followed by a
                      role as an education and behavioral coordinator for autistic children. These experiences deepened
                      my commitment to the field and honed my skills in supporting communication, social, and emotional
                      development.
                      Now, as an RBT, I continue to make a positive impact by providing individualized support and
                      fostering meaningful growth in my clients. I am passionate about empowering individuals with
                      autism to reach their full potential and I’m committed to expanding my knowledge and skills. With
                      plans to become a Board Certified Behavior Analyst (BCBA) in the coming years, I’m dedicated to
                      advancing my career and continuing to be a strong advocate for those I serve.</p>
                  </div>
                </div>
              </div>

              {/* Adrian's Card */}
              <div className="team-hover-card">
                <img src={teamImages[1]} alt="Adrian Bowman" className="team-member-img"/>
                <h3 className="team-member-name">Adrian Bowman</h3>
                <p className="team-member-title">Respite Support Specialist</p>
                <div className="team-overlay">
                  <h3 className="team-member-overlay-name">Meet Adrian</h3>
                  <div className="team-member-description">
                    <p>Hey there! I'm Adrian Bowman, and I've spent over ten years working in teaching and childcare as
                      a registered behavioral technician. I've got a real passion for helping kids, especially those
                      with autism, grow and thrive. I like to think my vibrant personality and positive energy help
                      create a welcoming and encouraging space for them.

                      Outside of work, I'm all about soaking up good vibes. Whether it's jamming to some music, hitting
                      the road for new adventures, or just hanging out with family and friends, I love keeping life
                      exciting and balanced.

                      I'm all about bringing joy and creativity into my work to make an impact on the kids I support.
                      I'm always on the hunt for new ideas to make every day engaging and fun. Staying committed to
                      growing in my field is super important to me, and I can't wait to see what new opportunities come
                      my way!</p>
                  </div>
                </div>
              </div>

              {/* Evys Card */}
              <div className="team-hover-card">
                <img src={teamImages[3]} alt="Evy Leviege" className="team-member-img"/>
                <h3 className="team-member-name">Evy Leviege</h3>
                <p className="team-member-title">Co-owner Operational Manager</p>
                <div className="team-overlay">
                  <h3 className="team-member-overlay-name">Meet Evy</h3>
                  <div className="team-member-description">
                    <p>Coming Soon..</p>
                  </div>
                </div>
              </div>

              {/* Don's Card */}
              <div className="team-hover-card">
                <img src={teamImages[2]} alt="Don" className="team-member-img"/>
                <h3 className="team-member-name">Don</h3>
                <p className="team-member-title">Owner/Director of Respite Services</p>
                <div className="team-overlay">
                  <h3 className="team-member-overlay-name">Meet Don</h3>
                  <div className="team-member-description">
                    <p>Hey there! I'm Don. I've been passionately helping young adults with autism for some time now and
                      am excited to dive into a new adventure—caring for senior citizens. This new challenge brings a
                      lot of excitement and purpose, and I can't wait to make a real difference in their lives. My
                      journey started at the YMCA, working with troubled youth, and it showed me just how rewarding it
                      is to help others.
                      When I'm not working, you'll probably find me lost in a Lego project or in the kitchen cooking up
                      tasty meals for loved ones. I love taking walks in the park with my two dogs. Traveling with my
                      wonderful husband keeps life exciting, and each trip leads to amazing memories that we've
                      collected over more than ten years together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section gray">
          <div className="section-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              <div className="faq-item">
                <button
                    className={`faq-question ${activeFaqId === 1 ? 'active' : ''}`}
                    onClick={() => setActiveFaqId(activeFaqId === 1 ? null : 1)}
                >
                  <span>What is respite care?</span>
                  {activeFaqId === 1 ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
                <div className={`faq-answer ${activeFaqId === 1 ? 'open' : ''}`}>
                  <p>Respite care provides temporary relief for primary caregivers, allowing them to take a break while
                    ensuring their loved ones receive quality care. This service is essential for caregivers to maintain
                    their own health and well-being while knowing their loved ones are in capable hands.</p>
                </div>
              </div>

              <div className="faq-item">
                <button
                    className={`faq-question ${activeFaqId === 2 ? 'active' : ''}`}
                    onClick={() => setActiveFaqId(activeFaqId === 2 ? null : 2)}
                >
                  <span>How long can I book respite care for?</span>
                  {activeFaqId === 2 ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
                <div className={`faq-answer ${activeFaqId === 2 ? 'open' : ''}`}>
                  <p>We offer flexible booking options ranging from a few hours to several weeks, depending on your
                    needs. Our services can be tailored to accommodate short-term relief, regular scheduled breaks, or
                    extended periods when primary caregivers need time for their own commitments or self-care.</p>
                </div>
              </div>

              <div className="faq-item">
                <button
                    className={`faq-question ${activeFaqId === 3 ? 'active' : ''}`}
                    onClick={() => setActiveFaqId(activeFaqId === 3 ? null : 3)}
                >
                  <span>Are your caregivers certified?</span>
                  {activeFaqId === 3 ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
                <div className={`faq-answer ${activeFaqId === 3 ? 'open' : ''}`}>
                  <p>Yes, all our caregivers are certified, background-checked, and receive ongoing training to provide
                    the best care possible. Our team includes Registered Behavior Technicians and specialized care
                    professionals with experience in supporting individuals with various needs and abilities.</p>
                </div>
              </div>

              <div className="faq-item">
                <button
                    className={`faq-question ${activeFaqId === 4 ? 'active' : ''}`}
                    onClick={() => setActiveFaqId(activeFaqId === 4 ? null : 4)}
                >
                  <span>Do you accept insurance?</span>
                  {activeFaqId === 4 ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
                <div className={`faq-answer ${activeFaqId === 4 ? 'open' : ''}`}>
                  <p>We accept various insurance plans and can help you understand your coverage options. Our team is
                    experienced in working with different insurance providers and can assist you in navigating the
                    process to maximize your benefits. Contact us for more details about specific plans we accept.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Appointments Section */}
        <section id="appointments" className="section light">
          <div className="section-container">
            <h2 className="section-title">Schedule an Appointment</h2>
            <div className="about-content">
              <p className="about-text">
                Book your consultation or respite care service online. We'll contact you to confirm details
                and discuss your specific needs.
              </p>
              <div className="text-center">
                <button className="cta-button" onClick={goToBooking}>Book Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="section light">
          <div className="section-container">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <Phone size={20}/>
                    <span>(214-225-0823)</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={20}/>
                    <span>dford@empowercarellc.com</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={20}/>
                    <span>Heartland, 75126</span>
                  </div>
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

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
