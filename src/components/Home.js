import Header from '../components/Header';
import bannerimg from '../images/2.jpg';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GrProjects } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
import { Currentprojectslider } from './Residential';
import { FaCubes } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import feature from '../images/millenia-features.jpg';
import achieveimg1 from '../images/achieve1.png';
import achieveimg2 from '../images/achieve2.png';
import achieveimg3 from '../images/acheve3.png';
import achieveimg4 from '../images/acheve4.png';
import achieveimg5 from '../images/acheve5.png';
import achieveimg6 from '../images/acheve6.png';
import CountUp from 'react-countup';
import aboutimg1 from '../images/about1.webp';
import pattern from '../images/pattern.webp';
import { Link } from "react-router-dom";
import Footer from './Footer';
import 'animate.css';
import { Testimonials } from './About';
import { FaRocket, FaUsers, FaMedal } from "react-icons/fa";
import designimg from '../images/1.webp';
import Slider from "react-slick";
import service1 from "../images/service1.webp";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";
import service4 from "../images/service4.jpg";
import service5 from "../images/service5.webp";
import Goverment from './Goverment';


const Home = () => {
  const [isSticky, setSticky] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  };

  const { ref: contentsRef, inView: contentsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });




  const { ref: featuresLeftRef, inView: featuresLeftInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [leftAnimated, setLeftAnimated] = useState(false);

  useEffect(() => {
    if (featuresLeftInView && !leftAnimated) setLeftAnimated(true);
  }, [featuresLeftInView, leftAnimated]);

  const { ref: featuresRightRef, inView: featuresRightInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [rightAnimated, setRightAnimated] = useState(false);

  useEffect(() => {
    if (featuresRightInView && !rightAnimated) setRightAnimated(true);
  }, [featuresRightInView, rightAnimated]);


  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: headingRef, inView: headingAnimated } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: blogRef, inView: blogInView } = useInView();
  const { ref: featuresHeadingRef, inView: featuresHeadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: achievementHeadingRef, inView: achievementHeadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: whyChooseHeadingRef, inView: whyChooseHeadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [mainImage, setMainImage] = useState(aboutimg1);

  const contentsData = [
    {
      id: 1,
      image: designimg,
      title: "House of Culture & Art",
      subtitle: "Graduation Project",
    },
    {
      id: 2,
      image: designimg,
      title: "Honar’s Sunken Courtyard",
      subtitle: "Academic work",
    },
    {
      id: 3,
      image: designimg,
      title: "Ekbatan’s Industrial Shed",
      subtitle: "Academic work",
    },
    {
      id: 4,
      image: designimg,
      title: "Modular Design",
      subtitle: "Academic works\nModular Design",
    },
    {
      id: 5,
      image: designimg,
      title: "Miscellaneous",
      subtitle: "Academic and Freelance works",
    },
    {
      id: 6,
      image: designimg,
      title: "Miscellaneous",
      subtitle: "Academic and Freelance works",
    }
  ];

  const data = [
    {
      img: achieveimg1,
      value: 97,
      label: "TOTAL PROJECTS"
    },
    {
      img: achieveimg2,
      value: 9,
      label: "ONGOING PROJECTS"
    },
    {
      img: achieveimg3,
      value: 81,
      label: "COMPLETED PROJECTS"
    },
    {
      img: achieveimg4,
      value: 7,
      label: "UPCOMING PROJECTS"
    },
    {
      img: achieveimg5,
      value: 43,
      label: "MILLION SQ FT DELIVERED"
    },
    {
      img: achieveimg6,
      value: 9,
      label: "MILLION SQ FT UNDER DEVELOPMENT"
    }
  ]

  const service = [
    {
      img: service1,
      text: "Goverment Project Execution (state & central)",
      path: "/goverment"
    },
    {
      img: service2,
      text: "Residential, Commercial & Industrial Projects",
      path: "/residential"
    },
    {
      img: service3,
      text: "Private Construction & Infrastructure Development"
    },
    {
      img: service4,
      text: "Road & Public Utility Construction",
      path: "/grampanchayat"
    },
    {
      img: service5,
      text: "Civil Engineering Works"
    }
  ]
  const builderBlogs = [
    {
      title: "Step-by-step Guide for First-Time Homebuyers",
      description: "This guide will help new homebuyers understand budgeting, location selection, documentation, and more.",
      category: "Real Estate",
      author: "Hastika Patadiya",
      date: "4 Aug, 2025",
    },
    {
      title: "Step-by-step Guide for First-Time Homebuyers",
      description: "This guide will help new homebuyers understand budgeting, location selection, documentation, and more.",
      category: "Real Estate",
      author: "Hastika Patadiya",
      date: "4 Aug, 2025",
    },
    {
      title: "Step-by-step Guide for First-Time Homebuyers",
      description: "This guide will help new homebuyers understand budgeting, location selection, documentation, and more.",
      category: "Real Estate",
      author: "Hastika Patadiya",
      date: "4 Aug, 2025",
    }

  ];
  const services = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 540,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      }
    ]
  };
  return (
    <>
      <Header></Header>

      <div className='position-relative'>
        <img src={bannerimg} alt="Banner" style={{ width: "100%", height: "500px", display: "block" }} />
        <div className='d-flex justify-content-center d-lg-block d-none position-absolute'
          style={{
            top: "100%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }} >
          <Link to="/residential" className="banner-button me-3 px-3 py-3">Residential</Link>
          <Link to="/commercial" className="banner-button me-3  px-3 py-3">Commercial</Link>
          <Link to="/residential" className="banner-button me-3  px-3 py-3">Residential</Link>
          <Link to="/residential" className="banner-button  px-3 py-3">Residential</Link>
        </div>
      </div>

      {/* ================================================ about us section start ===================================== */}
            <div className='spacer'></div>
      <div className="about-section container-fluid py-5">
        <div className="row align-items-center ">
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="about-images d-flex">
              <div className="small-images d-flex flex-column justify-content-between me-2">
                {[aboutimg1, aboutimg1, pattern].map((img, index) => (
                  <img key={index} src={img}
                    alt={`thumb-${index}`}
                    className="img-fluid rounded mb-2"
                    style={{
                      cursor: "pointer",
                      transition: "0.3s ease",
                    }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
              <div className="main-image">
                <img
                  src={mainImage}
                  alt="Main"
                  className="img-fluid rounded"
                  style={{ width: "350px", height: "450px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 about-text text-white px-4">
            <p className="sub-title mb-2">ABOUT US</p>
            <h2 className="title mb-3">Delighting customers since 1990</h2>
            <p className="desc mb-4">
              At Shree Kashtbhanjan Infra, we specialize in delivering high-quality construction solutions for both private sector projects and government works. With a strong foundation of expertise, commitment, and innovation, we undertake projects through competitive tenders for State Government and Central Government departments, as well as private developers.
            </p>
            <button className="btn-readmore">
              <Link to="/about" className="text-white">READ MORE</Link>
            </button>
          </div>
        </div>
      </div>
      {/* ================================================ about us section end ===================================== */}
      <div className='spacer'></div>
      <h2 className=" title text-center fs-1 about-header tracking-widest">CURRENT PROJECTS</h2>
      <Currentprojectslider></Currentprojectslider>
      <div className='spacer'></div>
      {/* =============================================== service start ================================================ */}
      <section className='container my-5'>
        <div className='row'>
          <div className='col-md-4 col-12  border-end '>
            <p className="text-uppercase fw-bold title p-0">our services</p>
            <h1 className="fw-bold pb-3 about-header text-capitalize ">
              provide unique<br></br>& quality services
            </h1>

          </div>
          <div className='col-md-7 col-12 service-banner text-white align-self-center ms-md-5 ms-2'>
            <h2 className='p-4 fs-4'>Do you have projects? &nbsp; <br></br><strong>+98745 214 785</strong></h2>
          </div>
        </div>
              <div className='spacer'></div>
       <div className="services-container">
      <Slider {...services}>
        {service.map((serviceItem, index) => (
          <div key={index} className="service-card p-4">
            {/* Wrap the whole card inside Link only if path exists */}
            {serviceItem.path ? (
              <Link
                to={serviceItem.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="service-image">
                  <img
                    src={serviceItem.img}
                    alt={serviceItem.text}
                    className="img-fluid"
                  />
                </div>
                <div className="service-info">
                  <h3 style={{ fontSize: "18px", fontWeight: 600 }}>
                    {serviceItem.text}
                  </h3>
                </div>
              </Link>
            ) : (
              <>
                <div className="service-image">
                  <img
                    src={serviceItem.img}
                    alt={serviceItem.text}
                    className="img-fluid"
                  />
                </div>
                <div className="service-info">
                  <h3 style={{ fontSize: "18px", fontWeight: 600 }}>
                    {serviceItem.text}
                  </h3>
                </div>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>

      </section>
      {/* =============================================== service end ================================================ */}
      {/* =============================================== Features start ================================================ */}
      <section className='container' ref={featuresLeftRef}>
        <h2 ref={featuresHeadingRef} className={`title text-center fw-bold fs-1 about-header ${featuresHeadingInView ? 'animate__animated animate__pulse animate__delay-1s' : ''}`} >
          FEATURES
        </h2>
        <div className="spacer2"></div>
        <div className="row align-items-center">
          <div className={`col-lg-6 col-12 ${leftAnimated ? 'animate__animated animate__fadeInLeft' : ''}`} >
            <img src={feature} alt="Apartment" className='rounded'
              style={{ maxWidth: "600px", height: "450px", objectFit: "cover" }} />
          </div>
          <div className={`col-lg-6 col-12 mt-md-4 ${rightAnimated ? 'animate__animated animate__fadeInDown' : ''}`}
            ref={featuresRightRef}  >
            <div className="row">
              <div className="col-6 feature-list text-center pb-2 pb-md-3 position-relative">
                <IoLocationOutline style={{ fontSize: "60px" }} className='feature-icon' />
                <p className='p-3 fwcolor' style={{ fontSize: "14px", color: "#000", fontWeight: "500" }}>
                  Located Off Sarjapur - Chandapura Road
                </p>
              </div>
              <div className="col-6 feature-list text-center pb-2 pb-md-3 position-relative">
                <FaCubes style={{ fontSize: "60px" }} className='feature-icon' />
                <p className='p-3' style={{ fontSize: "14px", color: "#000", fontWeight: "500" }}>
                  Located Off Sarjapur - Chandapura Road
                </p>
              </div>
              <div className="col-6 feature-list text-center pb-2 pb-md-3 position-relative">
                <LiaBedSolid style={{ fontSize: "60px" }} className='feature-icon' />
                <p className='p-3' style={{ fontSize: "14px", color: "#000", fontWeight: "500" }}>
                  Located Off Sarjapur - Chandapura Road
                </p>
              </div>
              <div className="col-6 feature-list text-center pb-2 pb-md-3 position-relative">
                <TbSwimming style={{ fontSize: "60px" }} className='feature-icon' />
                <p className='p-3' style={{ fontSize: "14px", color: "#000", fontWeight: "500" }}>
                  Located Off Sarjapur - Chandapura Road
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
      {/* =============================================== Features end ================================================ */}
      <div className='spacer'></div>
      {/* =============================================== Blog start ================================================ */}

      <section className="container my-5" ref={sectionRef}>
        <h2 className={`title text-center fs-1 about-header fw-bold mb-5 ${inView ? "animate__animated animate__pulse" : ""}`}>
          OUR BLOG
        </h2>
        <div className={`row ${inView ? "animate__animated animate__fadeInUp" : ""}`}>
          {builderBlogs.slice(0, 6).map((post, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div
                className="blog-card h-100 p-4 position-relative"
                style={{
                  background: "#fff",
                  borderLeft: "5px solid #f77a0c",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.07)",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
              >
                <span className="badge mb-2 text-uppercase fw-semibold"
                  style={{
                    backgroundColor: "#fef2e5",
                    color: "#f77a0c",
                    padding: "4px 10px",
                    fontSize: "11px",
                    borderRadius: "20px",
                    letterSpacing: "1px",
                    display: "inline-block",
                    width: "fit-content",
                  }}>
                  {post.category || "Blog"}
                </span>
                <h5 className="fw-bold mb-3" style={{ color: "#333", minHeight: "60px" }}>
                  {post.title}
                </h5>
                <p className="text-muted small mb-3">{post.description?.slice(0, 100)}...</p>
                <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top" style={{ fontSize: "13px" }}>
                  <small className="text-muted">
                    {post.author || "Admin"} • {post.date || "21 Jan, 2023"}
                  </small>
                  <Link to="/blog" style={{ color: "#f77a0c", fontWeight: "600", textDecoration: "none" }} >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/BLOG" className="project-btn position-relative d-inline-block me-3 rounded fw-bold px-3 py-2"
            style={{ overflow: "hidden", zIndex: "1", transition: "color 0.4s ease", color: "#fff" }}>
            VIEW MORE</Link>
        </div>
      </section>

      {/* =============================================== Blog end ================================================ */}
      <div className='spacer'></div>
      {/* ================================================Content image start ============================================*/}
      <div className="container contents-section text-center">
        <h2 ref={headingRef} className={`title text-center fw-bold fs-1 about-header ${headingAnimated ? 'animate__animated animate__pulse animate__delay-1s' : ''}`}>
          CONTENT
        </h2>

        <div className="spacer2"></div>
        <Slider
          {...{
            ...settings
          }}
          className={`${contentsInView ? "animate__animated animate__fadeInLeft" : ""}`}
        >
          {contentsData.map((item) => (
            <div key={item.id} >
              <section
                className="content-card position-relative"
                style={{

                  background: "#fcfafaff",
                  overflow: "hidden",
                  height: "100%"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                  style={{
                    opacity: "0.85",
                    height: "300px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div className="card-number position-absolute"
                  style={{
                    bottom: "50px",
                    right: "10px",
                    color: "rgba(250, 244, 244, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold"
                  }} >
                  {item.id}
                </div>
                <div className="card-text position-absolute bottom-0 p-2 text-start"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)"
                  }} >
                  <h3 className="fw-bold m-0 fs-6">{item.title}</h3>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    {item.subtitle}
                  </p>
                </div>
              </section>
            </div>
          ))}
        </Slider>


      </div>

      <div className='spacer'></div>
      {/* ==============================================Content image end================================================*/}
      {/* ========================================== Achievemrnts ======================== */}
      <div ref={achievementsRef} className="container" style={{ margin: "auto" }}>
        <h2 ref={achievementHeadingRef} className={`title text-center fw-bold fs-1 about-header ${achievementHeadingInView ? 'animate__animated animate__pulse animate__delay-1s' : ''}`}>
          OUR ACHIEVEMENT
        </h2>

        <div className="row achieve my-5 ">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`col-lg-2 col-6 text-center ${achievementsInView ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{ margin: "auto" }} >
              <img src={item.img} alt={item.label} style={{ width: 100, height: 100, transition: "0.5s" }} />
              <h3>{achievementsInView ? <CountUp end={item.value} duration={2} /> : 0}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="row achieve mb-3">
          {data.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className={`col-lg-2 col-6 text-center ${achievementsInView ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{ margin: "auto" }}>
              <img src={item.img} alt={item.label} style={{ width: 100, height: 100, transition: "0.5s" }} />
              <h3>{achievementsInView ? <CountUp end={item.value} duration={2} /> : 0}</h3>
              <p style={{ fontSize: "14px" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* =============================================== Achievement end ================================================ */}
      {/* =============================================== Why choose us start ================================================ */}
      <section className="why-choose-section py-5 bg-white">
        <div className="container">
          <h2 ref={whyChooseHeadingRef} className={`title text-center fw-bold fs-1 about-header ${whyChooseHeadingInView ? 'animate__animated animate__pulse animate__delay-1s' : ''}`}>
            Why Choose Us
          </h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="text-center px-4 py-5 border rounded shadow-sm h-100">
                <FaRocket size={35} className="text-primary mb-3" />
                <h5 className="fw-bold mb-2">Fast Execution</h5>
                <p className="text-muted">Timely project delivery with minimal delays and efficient planning.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center px-4 py-5 border rounded shadow-sm h-100">
                <FaUsers size={35} className="text-success mb-3" />
                <h5 className="fw-bold mb-2">Expert Team</h5>
                <p className="text-muted">Experienced architects, engineers, and support staff you can trust.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center px-4 py-5 border rounded shadow-sm h-100">
                <FaMedal size={35} className="text-warning mb-3" />
                <h5 className="fw-bold mb-2">Quality First</h5>
                <p className="text-muted">Use of premium materials and strict quality checks across all stages.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* =============================================== Why choose us start ================================================ */}
      <div className='spacer'></div>
      <Testimonials></Testimonials>
      <div className='spacer'></div>
      <Footer></Footer>
    </>
  );
};
export default Home;