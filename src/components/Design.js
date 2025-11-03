import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import galleryimg1 from '../images/gimg.jpg';
import galleryimg2 from '../images/gimg2.jpg';
import galleryimg3 from '../images/gimg3.jpg';
import galleryimg4 from '../images/gimg4.jpg';
import galleryimg5 from '../images/gimg5.jpg';
import galleryimg6 from '../images/gimg6.jpg';

import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import Header from "./Header";
import designbanner from '../images/design-banner.jpeg';
import Footer from './Footer';
import { ImQuotesLeft } from "react-icons/im";
import award from '../images/aw-1.png';
import award2 from '../images/aw-2.png';
import award3 from '../images/aw-3.png';

function Design() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(true);
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    const awards = [
        {
            name: "the best of bharat awards 2022",
            description: "pride od india brands",
            image: award
        },
        {
            name: "the best of bharat awards 2022",
            description: "pride od india brands",
            image: award2
        },
        {
            name: "the best of bharat awards 2022",
            description: "pride od india brands",
            image: award3
        }
    ];

    const galleryImge = [galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg6, galleryimg5];
    const slides = galleryImge.map((src) => ({ src }));
    return (
        <>
            <Header></Header>
            <div className="banner-container position-relative">
                <img src={designbanner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                <div className="banner-text"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', zIndex: 9 }}>
                    <h1 className="fw-bold text-uppercase">Design Overview</h1>
                    <p>WE DESIGN YOUR WORLD WITH OUR HEARTS</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                            <Link to="/home" style={{ color: "#fff" }}>HOME</Link>
                        </li>
                        <li className="breadcrumb-item active " aria-current="about" >
                            <Link className='fwcolor'>DESIGN</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className='spacer'></div>
            <div className='container'>
                <div className='design-contain'>
                    <h2 className='title text-center fs-1 about-header'>OUR DESIGN PHILOSOPHY</h2>
                    <div className='spacer2'></div>
                    <p className='pb-2 font' style={{ fontSize: "18px", fontWeight: "500", color: "#481a02" }}>
                        Your needs and your dreams are what inspire us at The Wadhwa Group. We design to celebrate space, comfort and safety with no compromise whatsoever. Our philosophy of VENTILIT borrows from nature’s choicest elements of air, height and light and is exclusive to our group. We believe that meticulous planning is more important than a striking elevation. That’s precisely the reason why we lay emphasis on building homes that are in harmony with the sun’s path and the wind’s direction. Not just that, the greater floor to ceiling height makes the apartments more spacious & elegant. Our uncompromising investment in raw materials, coupled with a practical design philosophy, promises maximum safety and minimum maintenance.
                    </p>
                    <h5><ImQuotesLeft className='fs-2 mb-5' color='rgba(184, 116, 80, 0.2)' /> <span style={{ fontSize: "17px", fontWeight: "600" }}> A WORLD WHERE THOUGHTFUL DESIGNS ELEVATE LIFE EXPERIENCES AND HOMES CELEBRATE LIFE ITSELF</span></h5>
                </div>

                <div className='spacer'></div>

                   <div className="row">
      {galleryImge.map((image, index) => (
        <div
          key={index}
          className="col-md-4 mb-3"
          onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={image} alt={`Gallery ${index}`} className="img-fluid" />
        </div>
      ))}

      {/* ✅ Lightbox Component */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          carousel={{ finite: false }}
        />
      )}
    </div>

                <div className='spacer'></div>
                <div className=' text-center'>
                    <h2 className='title text-center fs-1 about-header'>AWARDS</h2>
                    <h5 style={{ letterSpacing: "4px", fontSize: "14px" }}>OUR ACCOLADES OVER THE YEARS</h5>
                    <div className='spacer2'></div>
                    <div className='award d-flex justify-content-between '>
                        {awards.map((awards, index) => (
                            <div className='award-box p-3 ' key={index}>
                                <div className='award-img pb-3'>
                                    <img src={awards.image}></img>
                                </div>
                                <div className="award-detail text-uppercase ">
                                    <h5 className='font' style={{ fontWeight: "600" }}>{awards.name}</h5>
                                    <p className='fwcolor' style={{ fontSize: "14px", fontWeight: "500", letterSpacing: "2px" }}>{awards.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='spacer'></div>
            <Footer></Footer>
        </>
    );

}
export default Design;