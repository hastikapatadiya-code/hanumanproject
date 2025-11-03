import { FaUser, FaMobileAlt, FaEnvelope, FaComments } from "react-icons/fa";
import contactimg from '../images/contact.webp';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";


function Contactpage() {
  const [isSticky, setSticky] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
 const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);
  // alert("Thank you! We'll get back to you soon.");
  window.location.reload();
};
  return (
    <>
      <div className='main-header'>
        <Header></Header>
        <div className={isSticky ? 'main-header-title' + ' ' + 'row align-items-center pt-3' : 'main-header-title-fixed' + ' ' + 'row align-items-center pt-3'}></div>
      </div>

      <div className="position-relative" style={{ height: "280px" }}>
        <img
          src={contactimg}
          alt="header"
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        ></div>
      </div>


      <div className="container bg-white shadow p-5 position-relative"
        style={{
          marginTop: "-100px",
          maxWidth: "800px",
          zIndex: 10,
        }} >
        <h1 className="text-center mb-2" style={{ fontFamily: "serif" }}>
          SHREE KASHTBHANJAN INFRA
        </h1>
        <h5 className="form-fill fwcolor  text-center text-uppercase mb-4"
          style={{ letterSpacing: "2px" }}>
          Please Fill Your Details Below
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="input-group">
                <span className="input-group-text icon-box">
                  <FaUser className="text-muted" />
                </span>
                <input type="text"
                  name="firstname"
                  required
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                  className="form-control no-focus"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text icon-box">
                  <FaUser className="text-muted" />
                </span>
                <input
                  type="text"
                  name="lastname"
                   required
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                  className="form-control no-focus"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text icon-box">
                <FaMobileAlt className="text-muted" />
              </span>
              <input
                type="number"
                name="mobile"
                 required
                value={inputs.mobile || ""}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 10) {
                    setInputs(values => ({ ...values, mobile: val }));
                  }
                }}
                className="form-control no-focus"
                placeholder="Mobile"
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text icon-box">
                <FaEnvelope className="text-muted" />
              </span>
              <input
                type="email"
                name="email"
                 required
                value={inputs.email || ""}
                onChange={handleChange}
                className="form-control no-focus"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="input-group">
              <span className="input-group-text icon-box">
                <FaComments className="text-muted" />
              </span>
              <textarea
                name="message"
                value={inputs.message || ""}
                 required
                onChange={handleChange}
                className="form-control no-focus"
                placeholder="Message"
                rows="2"
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="submit-btn text-white px-5 py-2 "
              style={{ letterSpacing: "2px", textTransform: "uppercase" }}>
              Contact
            </button>
          </div>
        </form>
      </div>


      <div className="container contact-info-section py-5">
        <div className="row g-4">
          {/* Address Card */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card shadow-sm p-3" style={{height:"200px", width:"auto"}}>
              < IoHomeOutline  className="info-icon fwcolor mb-4 fs-2" />
              <h5 className="mb-3 fw-bold">ADDRESS:</h5>
              <p>
                Ronak Residency, Valkeshvari Nagari, <br />
                Nr. Sunshine School, Indira Gandhi Road, <br />
                Surat – 3950067.
              </p>
            </div>
          </div>

 
          <div className="col-lg-4 col-md-6">
            <div className="info-card shadow-sm p-3" style={{height:"200px", width:"auto"}}>
              <FaEnvelope className="info-icon fwcolor mb-4 fs-2" />
              <h5 className="mb-3 fw-bold">EMAIL ADDRESS:</h5>
               <a href="mailto:infra@kashtbhanajn.com" style={{color:"#000"}}>  infra@kashtbhanajn.com </a>
            </div>
          </div>

      
          <div className="col-lg-4 col-md-6">
            <div className="info-card shadow-sm p-3" style={{height:"200px", width:"auto"}}>
              <MdOutlinePhone className="info-icon fwcolor mb-4 fs-2" />
              <h5 className="mb-3 fw-bold">PHONE NO:</h5>
               <a  href="tel:+912612961100" style={{fontFamily: "Roboto, sans-serif",color:"#000" }}>+91 261 2961100</a><br></br>
                <a  href="tel:+912612961100"  style={{fontFamily: "Roboto, sans-serif",color:"#000" }}>+91 261 2961100</a>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
}
export default Contactpage;