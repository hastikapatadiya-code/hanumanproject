import Header from "./Header";
import { useEffect, useState } from 'react';
import img from '../images/5.webp';
import img1 from '../images/2.jpg';
import img2 from '../images/3.jpeg';
import { Link } from "react-router-dom";
import ongoingbanner from '../images/ongoingbanner.jpg';
import { ImQuotesLeft } from "react-icons/im";

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

    },
    {
        id: 4,
        title: "Empire Dynasty",
        img: img,
        location: "Empire Dynasty, Panch Pakhadi, Thane West, Mumbai - 400602",
        beds: "2, 3 & 4 Bedroom"

    },
    {
        id: 5,
        title: "Lakhani’s Bliss",
        img: img1,
        location: "Lakhani Bliss, Plot No.7, Sector 9, Thane kale, Ulwe",
        beds: "2 & 3 Bedroom"

    },
    {
        id: 6,
        title: "Empire Tower",
        img: img2,
        location: "Lakhani Empire Towers, Panch Pakhadi Thane West, Mumbai - 400602",
        beds: "2 & 3 Bedroom"

    }
];

const Ongoing = () => {
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

    return (
        <>
            <Header></Header>
            <div className="banner-container position-relative">
                <img src={ongoingbanner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />

                <div className="banner-text position-absolute"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 9 }}>
                    <h1 className="fw-bold text-uppercase font">ongoing projects</h1>
                    <p>WE CEMENT RELATIONSHIPS THAT GO BEYOND BRICK & MORTAR</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                            <Link to="/home" style={{ color: "#fff" }}>HOME</Link>
                        </li>
                        <li className="breadcrumb-item active " aria-current="about" >
                            <Link className='fwcolor'>RESIDENTIAL ONGOING</Link>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="container my-5">
                <h2 className="text-center about-header" style={{ color: "#E6791B" }}>
                    ONGOING PROJECT
                </h2>


                <div className='spacer2'></div>
                {/* <ImQuotesLeft className='fs-1' color='rgba(184, 116, 80, 0.2)' /> */}
                <p className='pb-2 font' style={{ fontSize: "18px", fontWeight: "500", color: "#481a02" }}>
                    We are proud to be working with KEC International Limited on the prestigious Navsari–Ahmedabad 765 kV Transmission Line Project. Over the past 1–2 years, Shree Kashtbhanjan Infra has successfully completed the foundation work for 25–30 transmission towers within the given target timeline.

                    Many of these foundations were located in challenging and high-risk environments, including areas inside water bodies, ponds, and low-lying terrains where construction conditions were extremely demanding. Despite these complexities, our team delivered quality workmanship, structural integrity, and timely execution—demonstrating our ability to take on projects where precision, safety, and speed are critical.

                    This project reflects our capability to handle complex engineering challenges and our commitment to supporting India’s infrastructure development.
                </p>


                <div className="spacer2"></div>
                <div className="main-ongoing row">
                    {projects.map((proj) => (
                        <div key={proj.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <div className="image-container position-relative" style={{ overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
                                    <div
                                        className={`image-container ${zoomedId === proj.id ? "zoom-active" : ""}`}
                                        style={{
                                            width: "100%",
                                            height: "250px",
                                            overflow: "hidden",
                                            borderRadius: "8px 8px 0 0",
                                            position: "relative",
                                        }}>
                                        <img
                                            src={proj.img}
                                            alt={proj.title}
                                            className="zoom-img"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                transition: "transform 0.5s ease",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="card-body" onMouseUp={() => handleMouseUp(proj.id)}>
                                    <h5 className="card-title fw-bold">{proj.title}</h5>
                                    <p className="card-text about-header fw-bold">
                                        <i className="bi bi-geo-alt"></i> {proj.location}
                                    </p>
                                    <p className="card-text about-header fw-bold">
                                        <i className="bi bi-house-door"></i> {proj.beds}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </>
    );
}
export default Ongoing;