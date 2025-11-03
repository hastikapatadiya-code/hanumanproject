import blogimg from '../images/blogimg6.jpg';
import blogimg1 from '../images/blogimg1.jpg';
import blogimg2 from '../images/blogimg2.jpg';
import blogimg3 from '../images/blogimg3.jpg';
import blogimg4 from '../images/blogimg4.jpg';
import blogimg5 from '../images/blogimg5.jpg';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { HiCalendarDateRange } from "react-icons/hi2";
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import blogbanner from '../images/blog-bg.jpg';


const Blog = () => {
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

    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const blogs = [
        {
            image: blogimg,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        },
        {
            image: blogimg1,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        },
        {
            image: blogimg2,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        },
        {
            image: blogimg3,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        },
        {
            image: blogimg4,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        },
        {
            image: blogimg5,
            date: "08 May, 2025",
            title: "Rajhans Trionzza: Timeless 5BHK Luxury Residences in Vesu, Surat’s Most ",
            description: "If you're looking for a blend of timeless elegance and unmatched luxury in one of Surat’s most premium residential locations, look no further than Rajhans Trionzza. This exclusive 3-tower development by Rajhans..."

        }
    ];

    const { ref: blogRef, inView: blogInView } = useInView();
    return (
        <>
            <Header></Header>
            <div className="banner-container position-relative">
                <img src={blogbanner} alt="Banner" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />

                <div className="banner-text"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: 9 }}>
                    <h1 className="fw-bold text-uppercase font">blog</h1>
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
            <div className='spacer'></div>
            <div className='container' ref={sectionRef} >
                <h2 className={`title text-center fs-1 about-header ${inView ? "animate__animated animate__pulse" : ""}`} >BLOGS</h2>
                <div className='spacer2'></div>
                <div ref={blogRef} className={`row  align-items-center p-0 p-sm-2 ${inView ? "animate__animated animate__fadeInUp" : ""}`}>

                    {blogs.map((post, index) => (
                        <div className='blog-item  row py-3 px-0' key={index}>
                            <div className='col-lg-5 col-md-7 col-12   mx-auto d-block'>
                                <img src={post.image} style={{ height: "220px" }} className='    rounded' ></img>
                            </div>
                            <div className='col-lg-7 col-md-12 col-12 mt-4 mt-lg-0  bgcolor py-3 px-4 ' style={{
                                backgroundColor: "rgba(223, 221, 219, 0.4)",
                                borderRadius: "15px",
                                borderRight: "5px solid #f2903b",
                            }}>
                                <p className="date fwcolor" style={{ fontWeight: "500" }}><HiCalendarDateRange className='fs-5' /> {post.date}</p>
                                <h4 className='font fw-bolder ' style={{ letterSpacing: "1px" }} >{post.title}</h4>
                                <p style={{ fontSize: "15px", color: "#481a02", letterSpacing: "1px" }}>{post.description}</p>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
            <div className='spacer'></div>
            <Footer></Footer>
        </>
    );
}
export default Blog;