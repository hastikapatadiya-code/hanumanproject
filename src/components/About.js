import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutimg1 from '../images/about1.webp';
import Header from './Header';
import { Link } from "react-router-dom";
import profileimg1 from '../images/profile.jpg'
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { ImQuotesLeft } from "react-icons/im";
import { GrProjects } from "react-icons/gr";
import aboutbanner from '../images/aboutbanner.webp';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import best1 from '../images/best1.png';
import best2 from '../images/best2.png';
import best3 from '../images/best3.png';
import best4 from '../images/best4.png';
import best5 from '../images/best5.png';
import tickmark from '../images/tickmark.png';
import { path } from "framer-motion/client";




const teamMembers = [
    {
        image: profileimg1,
        name: "Mr. Taken Mario",
        role: "Director",
        quote: "Innovation distinguishes between a leader and a follower."
    },
    {
        image: profileimg1,
        name: "Mr. Taken Mario",
        role: "Director",
        quote: "Success is best when it's shared."
    },
    {
        image: profileimg1,
        name: "Mr. Taken Mario",
        role: "Director",
        quote: "Great things in business are never done by one person."
    },
];
const Best = [
    {
        image: best1,
        name: "Government Project Execution (State & Central)",
        path: "/goverment"
    },
    {
        image: best2,
        name: "Residential, Commercial & Industrial Projects",
        path:"/residential"
    },
    {
        image: best3,
        name: "Private Construction & Infrastructure Development"


    },
    {
        image: best5,
        name: "Road & Public Utility Construction",
        path:"/grampanchayat"
        
    },
    {
        image: best4,
        name: "Civil Engineering Works"

    },

];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

function About() {
    const [expanded, setExpanded] = useState(false);
    const [isSticky, setSticky] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 300) {
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
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: teamRef, inView: teamInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: valRef, inView: valInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <>
            <Header />
            <div className="banner-container position-relative">
                <img src={aboutbanner} alt="Banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />

                <div className="banner-text"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: 9 }}>
                    <h1 className="fw-bold text-uppercase font">About Us</h1>
                    <p>Our journey, vision & values</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                            <Link to="/home" style={{ color: "#fff" }}>HOME</Link>
                        </li>
                        <li className="breadcrumb-item active " aria-current="about" >
                            <Link className='fwcolor'>ABOUT US</Link>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="container my-5" ref={sectionRef}>
                <div className="row align-items-center" style={{ overflow: "hidden" }}>
                    <div className={`left-column col-md-6 col-sm-12 col-xs-12 d-flex pt-lg-5  justify-content-md-center position-relative ${inView ? 'animate__animated animate__backInRight' : ''}`} >
                        <div className="image-box" style={{ width: "400px" }}>
                            <div className="image-outer position-relative">
                                <figure className="image position-relative"><img src={aboutimg1} />  </figure>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-12 pt-md-5 pb-4 pb-lg-0 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
                        <h2 className="title fs-1 about-header ">ABOUT  US</h2>
                        <p className="pb-3 about-header " style={{ fontSize: "18px" }}>
                            At Shree Kashtbhanjan Infra, we specialize in delivering high-quality construction solutions for both private sector projects and government works. With a strong foundation of expertise, commitment, and innovation, we undertake projects through competitive tenders for State Government and Central Government departments, as well as private developers.
                            <br></br> Our focus is on excellence, timely delivery, and sustainable construction practices. From concept to completion, we ensure that every project meets the highest standards of quality, safety, and client satisfaction.
                            <br></br>With a dedicated team of professionals, advanced technology, and a client-centric approach, we aim to build not just structures—but lasting trust.
                        </p>




                        <div className="spacer2"></div>
                        <div className='d-flex'>
                            <Link to="/Residential" className="project-btn d-md-block position-relative d-inline-block me-3 fw-bold px-3 py-2"
                                style={{ overflow: "hidden", zIndex: "1", transition: "color 0.4s ease", color: "#fff" }}>
                                <GrProjects className="pe-1" /> Latest Projects
                            </Link>
                            <Link to="/Contactpage" className="d-md-block about-btn position-relative d-inline-block fw-bold px-3 py-2 text-black">
                                <GrProjects className="pe-1" /> Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacer'></div>
            <div className="container">
                <h2 className="title fs-1 about-header text-center ">OUR SERVICES</h2>
                <div className="spacer2"></div>
                <div className="row  justify-content-around best-idea-container animate__animated animate__fadeInUp animate__delay-2s">
                    {Best.map((idea, index) => (
                        <div className="col-md-2 mb-4 d-flex" key={index}>
                            {idea.path ? (
                                <Link to={idea.path} className=" text-black">
                                    <div className="best-idea-box d-flex flex-column justify-content-center text-center px-2 py-3 border rounded"
                                          style={{minHeight:"150px",maxHeight:"150px",transition:"transform 0.3s ease, box-shadow 0.3s ease"}}>
                                        <img
                                            src={idea.image}
                                            alt={idea.name}
                                            className="img-fluid mb-2"
                                            style={{ maxHeight: "60px", objectFit: "contain", transition: "transform 0.5s ease" }}
                                        />
                                        <p className="text-capitalize mb-0 text-center" style={{ fontSize: "12px", fontWeight: "500" ,lineHeight:"1.3"}}>
                                            {idea.name}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="best-idea-box text-center px-2 py-3 border rounded">
                                    <img
                                        src={idea.image}
                                        alt={idea.name}
                                        className="img-fluid mb-2"
                                        style={{ maxHeight: "60px", objectFit: "contain" }}
                                    />
                                    <p className="text-capitalize mb-0" style={{ fontSize: "12px", fontWeight: "500" }}>
                                        {idea.name}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
            <div className='spacer'></div>
            <section style={{ overflow: "hidden" }}>
                <h2 ref={teamRef} className={`title text-center fs-1 about-header ${teamInView ? "animate__animated animate__pulse" : ""}`}>OUR TEAM</h2>
                <div className='spacer2'></div>
                <div className=" animate__animated animate__fadeInUp animate__delay-2s" style={{ overflow: "hidden" }} >
                    <Slider {...settings}>
                        {teamMembers.map((member, index) => (
                            <div className="d-flex justify-content-center">
                                <div
                                    className="team-card text-center position-relative rounded"
                                    style={{
                                        width: "300px",
                                        paddingTop: "90px",
                                        transition: "transform 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                        background: "rgba(240, 198, 161, 0.1)",
                                    }}>
                                    <div className="image-wrapper position-absolute mb-2"
                                        style={{
                                            left: "50%",
                                            top: "10px",
                                            transform: "translateX(-50%)",
                                        }}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="profile-pic rounded-circle"
                                            style={{
                                                height: "100px",
                                                width: "100px",
                                                objectFit: "cover",
                                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                                border: "5px solid white",
                                            }} />
                                    </div>
                                    <div className="py-4 px-3">
                                        <h5 className="fw-bold">{member.name}</h5>
                                        <p className="text-muted mb-1">{member.role}</p>
                                        <div className="team-bio">
                                            <p className="bio-text">
                                                “{member.quote || "Leadership is unlocking people’s potential to become better."}”
                                            </p>
                                            <Link
                                                to="/leadership"
                                                className="read-more"
                                                style={{
                                                    color: "rgba(247, 122, 12, 1)",
                                                    fontWeight: "bold",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div >
            </section >
            <div className='spacer'></div>
            <section >
                <div className="container">
                    <h2 ref={valRef} className={`title text-center fs-1 about-header ${valInView ? "animate__animated animate__pulse" : ""}`}>OUR VALUE</h2>

                    <div className='spacer2'></div>
                    <div className="container ">
                        <div className="row ">

                            <div className="col-md-6">
                                <div className="p-4 text-center h-100"
                                    style={{
                                        background: "#ffffff",
                                        borderRadius: "15px",
                                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                        transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    }} >

                                    <h3 className="fw-bold mt-3">Our Vision</h3>
                                    <p className="mt-2 text-muted">
                                        To be a trusted leader in the construction industry, known for our integrity, innovation, and excellence.
                                    </p>
                                    {expanded && (
                                        <div className="mt-3 text-muted" style={{ fontSize: "0.95rem" }}>
                                            <p>
                                                Our vision is to become a <strong>trusted leader</strong> in India’s
                                                construction and infrastructure sector, recognized for delivering
                                                excellence in the most challenging
                                                environments. We aim to expand across State & Central Government projects,
                                                private developments, and specialized engineering works, setting benchmarks
                                                for quality and
                                                reliability.
                                            </p>
                                            <ul className="mt-4 list-unstyled">
                                                <li className="mb-3 p-3 rounded bg-light shadow-sm">
                                                    Transforming difficult construction challenges into successful outcomes.
                                                </li>
                                                <li className="mb-3 p-3 rounded bg-light shadow-sm">
                                                    Creating infrastructure that serves communities for decades.
                                                </li>
                                                <li className="mb-3 p-3 rounded bg-light shadow-sm">
                                                    Promoting safe, eco-friendly & innovative construction methods.
                                                </li>
                                                <li className="mb-3 p-3 rounded bg-light shadow-sm">
                                                    Empowering workforce & nurturing future industry leaders.
                                                </li>
                                            </ul>
                                            <p className=" mt-4">
                                                Through continuous improvement,
                                                dedication, and a
                                                forward-thinking approach,
                                                we aspire to build a <strong>stronger, safer, and more connected India</strong>.
                                            </p>
                                        </div>
                                    )}

                                    <button className="btn btn-link mt-2"
                                        style={{ textDecoration: "none", color: "#ff9800", fontWeight: "bold" }}
                                        onClick={() => setExpanded(!expanded)} >
                                        {expanded ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-4 text-center h-100"
                                    style={{
                                        background: "#ffffff",
                                        borderRadius: "15px",
                                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                        transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    }} >

                                    <h3 className="fw-bold mt-3">Our Mission</h3>
                                    <p className="mt-2 text-muted">
                                        To deliver superior construction services that combine quality, safety, and value, contributing to the nation’s growth and development.
                                    </p>
                                    {expanded && (
                                        <div className="mt-3 text-muted" style={{ fontSize: "0.95rem" }}>
                                            <p>
                                                At <strong>Shree Kashtbhanjan Infra</strong>, our mission is to deliver
                                                world-class construction and infrastructure solutions that combine
                                                quality, safety, and innovation.
                                                We execute every project with precision, efficiency, and sustainability.
                                            </p>

                                            <ul className="mt-4">
                                                <li className="mb-3 p-2 rounded bg-light shadow-sm">
                                                    Completing projects on or before deadlines without compromising quality.
                                                </li>
                                                <li className="mb-3 p-2 rounded bg-light shadow-sm">
                                                    Tackling challenging terrains and high-risk sites with expertise.
                                                </li>
                                                <li className="mb-3 p-2 rounded bg-light shadow-sm">
                                                    Using modern technology, skilled manpower & best practices.
                                                </li>
                                                <li className="mb-3 p-2 rounded bg-light shadow-sm">
                                                    Building strong, long-term partnerships based on trust & integrity.
                                                </li>
                                            </ul>
                                            <p className=" mt-4">
                                                We believe every structure we build is not just a project, but a
                                                contribution to the nation’s growth and a
                                                lasting asset for future generations.
                                            </p>
                                        </div>
                                    )}

                                    <button className="btn btn-link mt-2"
                                        style={{ textDecoration: "none", color: "#ff9800", fontWeight: "bold" }}
                                        onClick={() => setExpanded(!expanded)} >
                                        {expanded ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className='spacer2'></div>
                    <div className="container">
                        <div className="row text-center g-4">
                            <div className="col-lg-3 col-sm-6">
                                <div className="stat-box rounded-3 py-4" style={{ background: "#eeeff1", transition: "0.5s", boxShadow: "0 3px 10px rgba(0,0,0,0.03)" }}>
                                    <h3>92%</h3>
                                    <p className="mb-0 text-secondary">Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="stat-box rounded-3 py-4" style={{ background: "#eeeff1", transition: "0.5s", boxShadow: "0 3px 10px rgba(0,0,0,0.03)" }}>
                                    <h3>24</h3>
                                    <p className="mb-0 text-secondary">Year of Experience</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="stat-box rounded-3 py-4" style={{ background: "#eeeff1", transition: "0.5s", boxShadow: "0 3px 10px rgba(0,0,0,0.03)" }}>
                                    <h3>14.2k+</h3>
                                    <p className="mb-0 text-secondary">Completed Project</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="stat-box rounded-3 py-4" style={{ background: "#eeeff1", transition: "0.5s", boxShadow: "0 3px 10px rgba(0,0,0,0.03)" }}>
                                    <h3>12+</h3>
                                    <p className="mb-0 text-secondary">Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='spacer'></div>
            </section>
            <section className="history-section  py-5" style={{ boxShadow: " 0 8px 20px rgba(0,0,0,0.05)" }}>
                <div className="container">
                    <h2 className="history-title title text-center fs-1 about-header position-relative">OUR HISTORY</h2>
                    <p className="history-text m-auto px-4 py-4 rounded-4" style={{ fontSize: "18px", color: "#444", lineHeight: "1.8", textAlign: "justify", maxWidth: "900px" }}>
                        Shree Kashtbhanjan Infra was established in May 2023 with a clear vision –
                        to deliver high-quality construction and infrastructure solutions for both
                        the private sector and government projects. Founded by two experienced
                        and passionate partners, <strong>Mr. Paras Ghanshyambhai Mehta</strong> and
                        <strong> Mr. Jignesh Manjibhai Nayani</strong>, the company has quickly earned a
                        reputation for reliability, precision, and excellence.
                        <br /><br />
                        From the very beginning, our mission has been to take on challenging
                        projects—whether in urban developments, rural infrastructure, or
                        high-risk engineering works—and deliver them on time, with uncompromising
                        quality standards.
                        <br /><br />
                        Under the leadership of <strong>Mr. Paras Ghanshyambhai Mehta</strong>, serving
                        as the Chief Executive Officer (CEO), Shree Kashtbhanjan Infra has grown
                        steadily, building a strong portfolio of private, state government, central
                        government, and Gram Panchayat projects.
                    </p>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}
const testimonials = [
    {
        name: "Mr. Udayarkar Rangarajan & Ms. Nanditha Gopal",
        text: "“We went in completely convinced that it could not possibly look anything like the renders on the website, as with most builders. We were pleasantly surprised and completely blown away by the project from the moment we walked in. The attention to detail, thoughtfulness in design, is impeccable and truly stunning. The photos do not do them justice. ” ",
        icon: <ImQuotesLeft />,
        title: "Resident at Pelican Grove"

    },
    {
        name: "Mr. Udayarkar Rangarajan & Ms. Nanditha Gopal",
        text: "“We went in completely convinced that it could not possibly look anything like the renders on the website, as with most builders. We were pleasantly surprised and completely blown away by the project from the moment we walked in. The attention to detail, thoughtfulness in design, is impeccable and truly stunning. The photos do not do them justice. ”",
        icon: <ImQuotesLeft />,
        title: "Resident at Pelican Grove"
    },
    {
        name: "Mr. Udayarkar Rangarajan & Ms. Nanditha Gopal",
        text: "B“We went in completely convinced that it could not possibly look anything like the renders on the website, as with most builders. We were pleasantly surprised and completely blown away by the project from the moment we walked in. The attention to detail, thoughtfulness in design, is impeccable and truly stunning. The photos do not do them justice. ”",
        icon: <ImQuotesLeft />,
        title: "Resident at Pelican Grove"
    },
];

export function Testimonials() {
    const settings = {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 700,
        cssEase: "ease-out",
    };

    return (
        <>
            <div className="testimonial-section  text-center" style={{ overflow: "hidden", }}>
                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index}>
                            <h2>{t.icon}</h2>
                            <h2 className="py-3" >Testimonials</h2>
                            <p className='pb-3' style={{ maxWidth: "700px", margin: "auto" }}>{t.text}</p>
                            <h4 >{t.name}</h4>
                            <h6>{t.title}</h6>

                        </div>
                    ))}
                </Slider>

            </div>
        </>
    );
}
export default About;
