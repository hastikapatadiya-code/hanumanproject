import Header from "./Header";
import { useEffect, useState } from 'react';
import commercialbanner from '../images/commercialbanner.jpg';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import img from '../images/5.webp';
import img1 from '../images/2.jpg';
import img2 from '../images/3.jpeg';
import Slider from "react-slick";
import { Currentprojectslider } from "./Residential";

const projects = [
  {
    id: 1,
    title: "Empire Dynasty",
    img: img,
    location: "Empire Dynasty, Panch Pakhadi, Thane West, Mumbai - 400602",
    beds: "2, 3 & 4 Bedroom"

  },
  {
    id: 2,
    title: "Lakhani’s Bliss",
    img: img1,
    location: "Lakhani Bliss, Plot No.7, Sector 9, Thane kale, Ulwe",
    beds: "2 & 3 Bedroom"

  },
  {
    id: 3,
    title: "Empire Tower",
    img: img2,
    location: "Lakhani Empire Towers, Panch Pakhadi Thane West, Mumbai - 400602",
    beds: "2 & 3 Bedroom"

  }
];
const Commercial = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

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

  const [zoomedId, setZoomedId] = useState(null);

  const handleMouseUp = (id) => {
    setZoomedId(zoomedId === id ? null : id);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (

    <>
        <Header></Header>
      <div className="banner-container position-relative">
        <img src={commercialbanner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <div className="banner-text position-absolute"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' , color: '#fff', zIndex: 9 }}>
          <h1 className="fw-bold text-uppercase font">commercial projects</h1>
          <p>WE CEMENT RELATIONSHIPS THAT GO BEYOND BRICK & MORTAR</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item ">
              <Link to="/home" style={{ color: "#fff" }}>HOME</Link>
            </li>
            <li className="breadcrumb-item active " aria-current="about" >
              <Link className='fwcolor'>COMMERCIAL</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-4 ps-4">
        <Link to="/commercialongoing" className="banner-button d-inline-block me-3 fw-bold px-3  py-2"
          style={{ overflow: "hidden", zIndex: "1", transition: "color 0.5s ease", color: "#000" }}>
          ONGOING PROJECT
        </Link>
        <Link to="/commercianlcompleted" className="banner-button d-inline-block me-3 fw-bold px-3  py-2"
          style={{ overflow: "hidden", zIndex: "1", transition: "color 0.5s ease", color: "#000" }}>
          COMPLETED PROJECT
        </Link>
      </div>

      <div className="spacer"></div>
      <div className="container my-5">
        <h2 className="text-center mb-4 about-header" style={{ color: "#E6791B" }}>
          Top Builders in Surat & Top Builders in Varachha
          <br />
          <strong> Kashtbhanjan Infra</strong> – Building Legacies, Creating Landmarks
        </h2>
        <div className="spacer2"></div>
        <Slider {...settings}>
          {projects.map((proj) => (
            <div key={proj.id} className="px-3">
              <div className="card h-100 shadow">
                <div className="image-container position-relative" style={{ overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
                  <div className={`image-container ${zoomedId === proj.id ? "zoom-active" : ""}`}
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      borderRadius: "8px 8px 0 0",
                      position: "relative"
                    }}>
                    <img src={proj.img}
                      alt={proj.title}
                      className="zoom-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }} />
                  </div>
                  <div className="card-body" onMouseUp={() => handleMouseUp(proj.id)}>
                    <h5 className="card-title fw-bold">{proj.title}</h5>
                    <p className="card-text about-header fw-bold">
                      <i className="bi bi-geo-alt"></i> {proj.location}
                    </p>
                    <p className="card-text about-header fw-bold">
                      <i className="bi bi-house-door"></i> {proj.beds}
                    </p>

                    <Link to="/ongoing" className="project-btn position-relative d-inline-block me-3 fw-bold px-3 rounded py-2"
                      style={{ overflow: "hidden", zIndex: "1", transition: "color 0.4s ease", color: "#fff" }}>
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider >
      </div >
      <div className="spacer"></div>
      <Currentprojectslider></Currentprojectslider>
      <div className="container text-center">
        <div className="px-4 py-5" style={{
          maxWidth: "550px", margin: "auto",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
          }} >
          <h2
            className="mb-3"
            style={{
              fontWeight: "700",
              fontSize: "26px",
              color: "#222",
            }} >
            Let’s Build Your Dream Home
          </h2>
          <p className="pb-3" style={{
            color: "#444", maxWidth: "400px", margin: "auto", lineHeight: "1.5",
          }} >
            Ready to take the next step? Reach out to explore our residential
            projects and find your perfect space.
          </p>

          <Link to="/contactpage" className="project-btn position-relative d-inline-block me-3 fw-bold px-3 rounded py-2"
            style={{ overflow: "hidden", zIndex: "1", transition: "color 0.4s ease", color: "#fff" }}>
            CONTACT US </Link>
        </div>
      </div>

      <div className='spacer'></div>
      <Footer></Footer>
    </>
  )
}
export default Commercial;