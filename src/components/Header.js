
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import logo from '../images/Kashtbhanjan Logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
// import bgvideo from '../video/New_2_1_e6ee4b1da6.mp4';

function Header() {
    const [isSticky, setSticky] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const [showExtraLinks, setShowExtraLinks] = useState(false);

   useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(false);     
      setShowExtraLinks(true); 
    } else {
      setSticky(true);         
      setShowExtraLinks(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={isOpen ? "is-open" : ""}
            ></div>
            <header >

                <div className="">
                    {/* <video autoPlay loop muted playsInline className='video-bg  w-100 '>
                        <source src={bgvideo} type='video/mp4' />
                    </video> */}
                    <div className='container-fluid main-header '>
                        <div className='row  align-items-center'>
                            <div className="col-lg-2 col-md-3 col-6 logo mb-0">
                                <Link to="/" className="d-inline-block "> <img src={logo} className=''></img></Link>
                            </div>
                            <div className="col-lg-9 d-lg-block d-none menu">
                                <ul className="d-flex justify-content-end main-menu position-relative d-block mb-0">
                                    <li>
                                        <Link to="/about" className="text-uppercase text-dark px-3 py-4 d-inline-block fw-bold" style={{ letterSpacing: 2 }}>
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/design" className="text-uppercase text-dark px-3 py-4 d-inline-block fw-bold" style={{ letterSpacing: 2 }}>
                                            Design
                                        </Link>
                                    </li>
                                    {showExtraLinks && (
                                        <li>
                                            <Link to="/residential" className="text-uppercase text-dark px-3 py-4 d-inline-block fw-bold" style={{ letterSpacing: 2 }}>
                                                Residential
                                            </Link>
                                        </li>
                                    )}
                                    {showExtraLinks && (
                                        <li>
                                            <Link to="/commercial" className="text-uppercase text-dark px-3 py-4 d-inline-block fw-bold" style={{ letterSpacing: 2 }}>
                                                Commercial
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className='col-lg-1 col-md-9 col-6 d-flex  justify-content-end position-relative'>
                                <li className="pe-4 fs-3 py-2  position-relative" onClick={() => setIsOpen(isOpen === "MdWifiCalling3" ? "" : "MdWifiCalling3")} style={{ cursor: "pointer" }}>
                                    <IoCall />
                                    {isOpen === "MdWifiCalling3" && (
                                        <div className='contact-dropdown' style={{ position: "absolute", top: "110%", right: "0", background: "#000", minWidth: "200px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", zIndex: 1000, }}>
                                            <ul style={{ margin: 0, padding: 0 }}>
                                                <li className="">
                                                    <Link to="/enquiry" className="text-white  info-btn fwcolor  py-2 px-3 d-block" >ENQUIRE NOW</Link>
                                                </li>
                                                <li className=" ">
                                                    <Link to='/contactpage' className="text-white  py-2 px-3 d-block">CONTACT US</Link>
                                                </li>
                                                <li className=" ">
                                                    <a href="tel:+919898076890" className="text-white  py-2 px-3 d-block">CALL US</a>
                                                </li>
                                                <li className="">
                                                    <Link to="/address" className="text-white  py-2 px-3 d-block">SITE ADDRESS</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className="d-lg-none d-md-block fs-3 py-2">
                                    <button className="btn btn-link p-0 text-dark"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasWithBothOptions"
                                        aria-controls="offcanvasWithBothOptions" >
                                        <FaBarsStaggered className='fs-3' />
                                    </button>
                                </li>
                                <div className="offcanvas offcanvas-end " style={{ width: "300px" }}
                                    data-bs-scroll="true" tabIndex="-1"
                                    id="offcanvasWithBothOptions"
                                    aria-labelledby="offcanvasWithBothOptionsLabel">

                                    <div className="offcanvas-header" style={{ borderBottom: "1px solid rgba(149, 145, 145, 0.2)" }}>
                                        <div className='row '>
                                            <div className=" col-10 logo">
                                                <Link><img src={logo} style={{ zIndex: "1111" }}></img></Link>
                                            </div>
                                        </div>
                                        <button type="button"
                                            className="btn-close"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close" ></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            <ul className='p-0 main-bar-menu '>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/home" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >  Home </Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/about" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >  About </Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/design" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >Design</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/residential" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >Residential</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/commercial" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >Commercial</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center ' style={{ transition: "0.5s" }} ><Link to="/blog" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >Blog</Link>
                                                    <FaAngleRight />
                                                </li>
                                                <li className='py-2 d-flex justify-content-between align-items-center' style={{ transition: "0.5s" }} ><Link to="/Contactpage" className='bar-menu fw-bold text-dark d-block' style={{ fontWeight: "500" }} >Contactpage</Link>
                                                    <FaAngleRight />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className=" pt-5 d-flex">
                                            <div style={{ borderRight: "1px solid #fff" }}>
                                                <a className="d-block fwcolor fw-bold" href="tel:+912612961100"><IoCallSharp className='fs-4' /> +91 261 2961100</a>
                                                <a href="mailto:infra@kashtbhanajn.com" className="d-block fwcolor fw-bold" > <IoIosMail className='fs-4' /> infra@kashtbhanajn.com </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex pb-3 pt-3 justify-content-center social-icon" style={{ cursor: "pointer",  borderTop : "1px solid rgba(149, 145, 145, 0.2)" }}>
                                            <li className="py-2 px-2 me-2 border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}> <FaFacebook /></li>
                                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>  <FaInstagram /></li>
                                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>  <FaLinkedinIn /></li>
                                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}> <FaTwitter /></li>
                                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>   <FaYoutube /></li>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className="hero-content text-center">
                    <h1 className="hero-title">LANDMARKS PLANNED WITH PASSION</h1>
                    <p className="hero-subtitle">TRANSFORMING MUMBAI'S SKYLINE SINCE 1969</p>
                </div> */}
                        <div className={isSticky ? 'main-header row align-items-center pt-3' : 'main-header-title-fixed row align-items-center pt-3'}></div>
                    </div>
                </div>
            </header >
            {/* <div className='spacer'></div> */}




        </>
    );
}

export default Header;