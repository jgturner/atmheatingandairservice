import Button from './components/button';
import { FaMobileAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { FaTools } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillGoogleSquare } from 'react-icons/ai';

function App() {
  // Get current hour in 24-hour format
  // const currentHour = new Date().getHours();
  // const currentHour = 6;

  // Business hours: 9 AM (9) to 5 PM (17)
  // const isOutsideBusinessHours = currentHour < 9 || currentHour >= 17;

  return (
    <div className="container mx-auto pb-5">
      <header className="w-100">
        <nav className="navbar navbar-expand-lg  text-white  w-100">
          <div className="container-fluid">
            <a className="navbar-brand  custom-font text-uppercase" href="#">
              <img src="/logo-stroke.png" alt="logo" className="img-fluid" width={100} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-white p-3">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#appointments">
                    <strong>Appointments</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#hours">
                    <strong>Business Hours</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#contact">
                    <strong>Contact</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="sms:(910)-650-4626">
                    <strong>
                      <FaMobileAlt />
                      <i className="fas fa-sms"></i> Text: (910) 787-2831
                    </strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="sms:(910)-650-4626">
                    <strong>
                      <FaPhone />
                      <i className="fa-solid fa-phone"></i> Call: (910) 787-2831
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 bg-white shadow rounded p-3">
            <h1 className="hero-text">Your Go To, Local, Reliable, AC & Heating Pro</h1>
            <p className=" h4 mb-3">A/C or heat not working? Let's get you fixed up!</p>
            <div className="d-flex flex-column gap-3">
              <a href="#appointments" className="btn btn-info text-white ">
                Schedule an Appointment
              </a>
              {/* {isOutsideBusinessHours && (
                <a href="https://buy.stripe.com/test_6oE00L05P4aJ29aaEE" target="_blank" className="btn btn-danger ">
                  24/7 Urgent Repairs
                </a>
              )} */}
              <a href="#contact" className="btn btn-outline-info mb-3">
                Contact Us
              </a>
            </div>
            <p className="text-center handwritten small hint">Hi! If you use these 👆 I can work faster and get to you ASAP! 🤣</p>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12 rounded bg-white shadow ">
          <div className="d-flex align-items-center  mb-5">
            <div className="owner-container mt-4">
              <div className="d-flex align-items-center gap-3">
                <div className="owner-profile-pic">
                  <img src="./profile.png" alt="profile pic" className="rounded-circle" width={100} />
                </div>
                <div className="owner-heading-container d-inline-block align-items-center owner-name">
                  <p className="h3 handwritten mb-0">Hi, I'm Matt!</p>
                  <p className="owner-title small font-weight-bold">
                    <strong>Owner ATM Heating and Air Service</strong>
                  </p>
                </div>
              </div>

              <p className="p-3">
                ATM Heating and Air Service is a family-owned, veteran-owned business with over 20 years of experience in the HVAC industry. We are committed to providing
                top-notch service to our customers in Onslow, Jacksonville, and surrounding areas. 24/7 service is available for emergencies, and we take pride in serving
                our community.
              </p>
              <p className="handwritten text-right">Call us, we'll be there!</p>
              <div className="d-flex justify-content-end align-items-center">
                <img src="./truck.png" alt="matt" className="d-flex justify-end" width={250} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center full-width rounded p-3">
        <div className="col-12">
          <div className="d-flex align-items-md-center align-items-start gap-3">
            <img src="./working.png" alt="" className="rounded-circle" width={100} />
            <div>
              <p className="handwritten mb-0">We've seen it!</p>
              <p>
                We specialize in repairs. Our goal is to keep your unit running as long as possible through preventive maintenance, efficient troubleshooting and even
                replacing hard to find parts. We like to extend the use of existencing units and try to avoid costly replacements.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-3 col-md-2 col-4">
              <img src="./repair1.png" alt="" className="w-100 rounded" />
            </div>
            <div className="col-sm-3 col-md-2 col-4">
              <img src="./repair2.png" alt="" className="w-100 rounded" />
            </div>
            <div className="col-sm-3 col-md-2 col-4">
              <img src="./repair3.png" alt="" className="w-100 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12">
          <div className="mb-5">
            <div className="heading-container">
              <h3>
                <FaStar /> Reviews
              </h3>
            </div>
            <div className="border-container pb-5">
              <div className="d-flex">
                <div>
                  <div className="d-flex justify-content-start align-items-start gap-3">
                    <img src="./reviews.png" alt="matt" className="d-flex justify-end p-3" width={120} />
                    <div>
                      <p className="handwritten mb-0">We love our customers!</p>
                      <p>
                        Focusing on expert A/C and heating repairs, we keep systems running, becoming our customers GO TO Pro. Trust us to get the job done right, every
                        time.
                      </p>
                    </div>
                  </div>

                  <div className="row justify-content-center mb-3">
                    <div className="col-12 text-center border-box">
                      <FaStar className="large-icon" />
                      <FaStar className="large-icon" />
                      <FaStar className="large-icon" />
                      <FaStar className="large-icon" />
                      <FaStar className="large-icon" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-5 border-box">
                    <div>
                      <p className="custom-font review-label text-center">
                        <i className="fa-brands fa-square-facebook"></i> 100% Recommended
                        <br /> (9 Reviews)
                      </p>
                      <a target="_blank" href="https://www.facebook.com/profile.php?id=100057365443392&sk=reviews" className="text-center d-block ">
                        <FaSquareFacebook /> Facebook Reviews
                      </a>
                    </div>
                    <div>
                      <p className="custom-font review-label text-center">
                        <i className="fa-brands fa-google"></i> 5.0
                        <br /> (125 Reviews)
                      </p>
                      <a
                        target="_blank"
                        href="https://www.google.com/search?q=atm+heating+and+air+service&rlz=1C1CHBF_enUS1112US1112&oq=atm+heat&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MggIAhBFGCcYOzIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPdIBCDE0MDRqMWo0qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x89a91b3372d7bd8b:0xab08a6d5fd71e47,1,,,,"
                        className="text-center d-block "
                      >
                        <AiFillGoogleSquare /> Google Reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="heading-container">
        <h3 id="appointments">
          <RiCalendarScheduleLine /> Schedule an Appointment
        </h3>
      </div>
      <div className="border-container mb-4">
        <p>Use our online appointment scheduler to set an appointment for your convenience. </p>

        <div id="appointments" className="mb-5">
          <iframe
            id="schedulista-widget-00"
            src="https://www.schedulista.com/schedule/atmheatingandairservice?mode=widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            width="100%"
            height="900px"
          ></iframe>
        </div>
      </div>

      <div className="row align-items-start">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="mb-3">
            <div className="heading-container">
              <h3>
                <FaTools /> Our Services
              </h3>
            </div>

            <div className="border-container">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>Heating Repair</li>
                    <li>Air Conditioning Repair</li>
                    <li>24/7 Urgent Repairs</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>HVAC Maintenance</li>
                    <li>HVAC Service</li>
                    <li>Preventive Maintenance Plans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="heading-container">
              <h3 id="hours">
                <FaClock /> Business Hours
              </h3>
            </div>
            <div className="border-container">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                    </li>
                    <li>
                      <strong>After Hours: </strong> 24/7 Urgent Repairs
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <strong>Saturday:</strong> 24/7 Urgent Repairs Only
                    </li>
                    <li>
                      <strong>Sunday:</strong> 24/7 Urgent Repairs Only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 mt-3 mt-md-0">
          <div className="heading-container h-100">
            <h3 id="contact">
              <FaRegCommentAlt /> Contact Us
            </h3>
          </div>

          <div className="border-container">
            <div>
              <p>
                <strong>Call:</strong> (910) 787-2831
              </p>
              <p>
                <strong>Email:</strong> atmheatingandairservice@gmail.com
              </p>
            </div>

            {/* <p>Have a question or need to send us a message, use the form and we will reply as soon as we are available.</p>

            <p>If you need service use schedule an appointment, if you need assistance after hours or RIGHT NOW use immediate/urgent service.</p> */}

            <div className="h-100">
              <form method="POST" data-netlify="true">
                <label htmlFor="" className="form-label">
                  <strong> Name:</strong>
                </label>
                <input className="form-control" type="text" name="customer-name" />

                <label htmlFor="" className="form-label">
                  <strong>Email:</strong>
                </label>
                <input className="form-control" type="email" name="customer-email" />

                <label htmlFor="" className="form-label">
                  <strong>Phone Number:</strong>
                </label>
                <input className="form-control" type="tel" name="customer-contact-number" />

                <label htmlFor="" className="form-label">
                  <strong>How can we help?</strong>
                </label>
                <textarea className="form-control mb-3" id="" cols="30" rows="10" name="customer-issue"></textarea>
                <button className="btn btn-info text-white" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white pt-4 mt-5 ">
        <div className="container">
          <div id="footer" className="row justify-content-center mt-5">
            <div className="col-md-3 mb-4 mb-md-0">
              <img src="/logo-white.png" alt="logo" className="img-fluid" width={100} />
              <small className="d-block">
                <strong>ATM Heating and Air Service</strong>
              </small>
            </div>

            <div className="col-sm-6 col-md-3 offset-md-3 offset-0 col-6 mb-4">
              <h4 className="mb-3 text-white">Follow Us</h4>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a className="nav-link" href="https://www.facebook.com/p/ATM-Heating-and-Air-Service-100057365443392/" target="_blank">
                    <i className="fab fa-facebook-square" aria-hidden="true"></i> Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-xs-6 col-6">
              <h4 className="mb-3 text-white">Site Map</h4>
              <ul className="list-unstyled d-flex flex-column gap-2 text-left">
                <li>
                  <a className="nav-link" href="/#appointments">
                    Appointments
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/#hours">
                    Business Hours
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <p className="mt-5 mb-2 text-center">
              © <span className="copy_date"></span> ATM Heating and Air Service ❄️🥶❄️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
