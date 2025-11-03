import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../images/Kashtbhanjan Logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="px-3 py-4" style={{ background: "rgba(252, 244, 236, 0.7)", color: "#000" }}>
                <div className="container row py-md-2 justify-content-between" style={{ flexWrap: "wrap" }}>
                    <div className="col-lg-3 col-md-6 order-md-0" >
                
                            <div className="col-lg-8 col-md-8 col-8 logo">
                                <a href="#"><img src={logo}></img></a>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div style={{ fontSize: "13px", lineHeight: "1.6", fontWeight: "500" }}>
                                    <strong>Shree Kashtbhanjan Infra</strong><br />
                                    Trusted Builder in Residential & Commercial Spaces<br />
                                    Reg No: ABC123XYZ | RERA Approved<br />
                                    Based in Surat, Gujarat
                                </div>
                            </div>
                      
                    </div>


                    <div className="col-lg-2 col-md-3 order-md-1">
                        <h5 className="py-2" style={{ fontWeight: "600" }}>Useful Links</h5>
                        <ul className="p-0" style={{ gap: "20px", cursor: "pointer", fontSize: "13px" }}>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }} ><Link to="/home" style={{color:"#000"}}>Home</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/about" style={{color:"#000"}}>About</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/design" style={{color:"#000"}}>Design</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/commercial" style={{color:"#000"}}>Commercials</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/residential" style={{color:"#000"}}>Residential</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/leadership" style={{color:"#000"}}>Team</Link></li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}><Link to="/blog" style={{color:"#000"}}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 order-md-2">
                        <h5 className="py-2" style={{ fontWeight: "600" }}>Projects</h5>
                        <ul className="p-0" style={{ gap: "20px", cursor: "pointer", fontSize: "13px" }}>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}>Infra Enclave</li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}>Infra Flats</li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}>Infra Schools</li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}>Infra Hotels</li>
                            <li style={{ lineHeight: "1.8", fontWeight: "500" }}>Infra Homz</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 order-md-3  pt-lg-0 pt-md-2">
                        <h5 className="py-2" style={{ fontWeight: "600" }}>Commercial</h5>
                        <ul className="p-0" style={{ gap: "20px", fontSize: "13px" }}>
                            <li style={{ lineHeight: "1.8" }}><Link to="/" style={{ color: "black", fontWeight: "500" }}>Mondeal One</Link> </li>
                            <li style={{ lineHeight: "1.8" }}> <Link to="/" style={{ color: "black", fontWeight: "500" }}>Titanium Tech Park - Mumai</Link></li>
                            <li style={{ lineHeight: "1.8" }}><Link to="/" style={{ color: "black", fontWeight: "500" }}>Mondeal Two</Link></li>
                            <li style={{ lineHeight: "1.8" }}><Link to="/" style={{ color: "black", fontWeight: "500" }}>Titanium Worls Tower</Link></li>


                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 order-md-4 pt-lg-0 pt-md-2">
                        <h5 className="py-2" style={{ fontWeight: "600" }}>Head Office</h5>
                        <p className="mb-0" style={{ fontSize: "13px", lineHeight: "1.8", fontWeight: "500" }}>Outer Ring Rd, Kadubeesanahalli, Ram-Madhi Road,surat. 395006</p>
                        <p style={{ fontSize: "14px", fontWeight: "700", fontFamily: "Roboto, sans-serif" }}>+91 80666 96000</p>

                        <div className="d-flex social-icon">
                            <li className="py-2 px-2 me-2 border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}> <FaFacebook /></li>
                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>  <FaInstagram /></li>
                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>  <FaLinkedinIn /></li>
                            <li className="py-2 px-2 me-2  border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}> <FaTwitter /></li>
                            <li className="py-2 px-2   border rounded-circle" style={{ lineHeight: "2px", transition: "0.5s" }}>   <FaYoutube /></li>
                        </div>
                    </div>

                </div>

            </footer>
            <section style={{ background: "#000" }}>
                <div className="py-4 text-center" style={{ borderTop: " 1px solid #444", fontSize: "13px" }}>
                    <p className="mb-0 text-white" >© 2025 Shree Kashtbhanjan  Infra, All Rights Reserved</p>
                </div>
            </section>
        </>
    );
};
export default Footer;
