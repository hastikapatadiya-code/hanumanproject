import { ImQuotesLeft } from "react-icons/im";
import leaderimg from '../images/profile.jpg';
import { useEffect, useState } from 'react';
import leaderbanner from '../images/teambanner.jpg';
import Header from "./Header";
import Footer from "./Footer";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const Leadership = () => {
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
    const leadership = [
        {
            image: leaderimg,
            name: "jayesh b.desai",
            title: "group chairman",
            description: "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group."
        },
        {
            image: leaderimg,
            name: "jayesh b.desai",
            title: "group chairman",
            description: "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group."
        },
        {
            image: leaderimg,
            name: "jayesh b.desai",
            title: "group chairman",
            description: "With a dynamic and passionate persona, Mr. Jayesh B. Desai has been at the helm of the group since its inception. As a first-generation entrepreneur and exemplary leader, he has played a pivotal role in the success of the Rajhans Group."
        }

    ];
        const { ref: teamRef, inView: teamInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <>
                <Header></Header>
            <div className="banner-container position-relative">
                <img src={leaderbanner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />

                <div className="position-absolute text-center"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: 9 }}>
                    <h1 className="fw-bold text-uppercase font">leadership projects</h1>
                    <p>WE CEMENT RELATIONSHIPS THAT GO BEYOND BRICK & MORTAR</p>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item ">
                            <Link to="/home" style={{ color: "#fff" }}>HOME</Link>
                        </li>
                        <li className="breadcrumb-item active " aria-current="about" >
                            <Link className='fwcolor'>MANAGEMENT TEAM</Link>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="container ">
                  <h2 ref={teamRef} className={`title text-center fs-1 about-header ${teamInView ? "animate__animated animate__pulse" : ""}`}>OUR MANAGEMENT TEAM</h2>
                <div className='spacer2'></div>
                <p className='pb-2 font text-center' style={{ fontSize: "20px", fontWeight: "500", color: "#481a02" }}>
                    Rajhans Group is guided by dynamic leaders who instill their values in the workforce, ensuring growth across various business verticals. With their technical expertise, profound domain knowledge, and extensive cross-functional experience, the group consistently strives for new benchmarks while spreading the 'Wings of Happiness.'
                </p>
                <h5><ImQuotesLeft className='fs-4 mb-5' color='rgba(184, 116, 80, 0.2)' /> <span style={{ fontSize: "17px", fontWeight: "600" }}> A WORLD WHERE THOUGHTFUL DESIGNS ELEVATE LIFE EXPERIENCES AND HOMES CELEBRATE LIFE ITSELF</span></h5>
            </div>
            <div className="" style={{ backgroundColor: "rgba(223, 221, 219, 0.4)" }} >
                {leadership.map((l, index) => {
                    return (
                        <div className="container" >
                            <div className='row py-3' key={index}  >
                                <div className='col-lg-3 col-md-5 col-12 pe-4 '>
                                    <img src={l.image} className="rounded p-1 " style={{ border: "1px solid rgb(242, 144, 59) " }} ></img>
                                </div>
                                <div className='col-lg-9 col-md-7 col-12 py-4 px-4 '>
                                    <h4 className="  text-uppercase fwbolder" >{l.name}</h4>
                                    <p className=' text-uppercase pb-1 fwcolor ' style={{ fontWeight: "500", letterSpacing: "1px" }} >{l.title}</p>
                                    <p className="  pt-2 text-capitalize" style={{ fontSize: "14px", color: "#481a02", letterSpacing: "1px" }}>{l.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="spacer2"></div>
            <div className="footer"></div>
            <Footer></Footer>
        </>
    );
}
export default Leadership;