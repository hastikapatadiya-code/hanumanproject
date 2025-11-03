import Header from "./Header";
import { useEffect, useState } from 'react';
import curent1 from '../images/current1.webp';
import current2 from '../images/current2.jpg';
import current3 from '../images/current3.webp';
import Footer from "./Footer";
import completebnner from '../images/completedbaner.jpg';
import { Link } from "react-router-dom";

const currentprojects = [
    {
        title: "Work Management",
        location: "PANVEL",
        image: curent1
    },
    {
        title: "EVARA",
        location: "PANVEL",
        image: current2
    },
    {
        title: "TW GARDENS",
        location: "KANDIVALI EAST",
        image: current3
    },
    {
        title: "Work Management",
        location: "PANVEL",
        image: curent1
    },
    {
        title: "EVARA",
        location: "PANVEL",
        image: current2
    },
    {
        title: "TW GARDENS",
        location: "KANDIVALI EAST",
        image: current3
    }
];

const Completed = () => {
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

    return (
        <>
                <Header />
           <div className="banner-container position-relative">
                <img src={completebnner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />

                <div className="banner-text position-absolute"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff',zIndex:9 }}>
                    <h1 className="fw-bold text-uppercase font">completed projects</h1>
                    <p>WE CEMENT RELATIONSHIPS THAT GO BEYOND BRICK & MORTAR</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                           <Link to="/home" style={{color:"#fff"}}>HOME</Link>
                        </li>
                        <li className="breadcrumb-item active " aria-current="about" >
                          <Link className='fwcolor'>RESIDENTIAL COMPLETED</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="spacer2"></div>
            <div className="container">
                <div className="row">
                    {currentprojects.map((p, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="bg-white current-slider rounded overflow-hidden text-center">
                                <div style={{
                                    width: "100%",
                                    height: "250px",
                                    margin: "0 auto",
                                    position: "relative",
                                }}>
                                    <div style={{
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden",
                                    }}>
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="zoom-image rounded"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                transition: "transform 0.5s ease"
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-4 mt-3">
                                    <h4 className="text-xl font-semibold">{p.title}</h4>
                                    <p className="text-orange-500">{p.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Completed;




