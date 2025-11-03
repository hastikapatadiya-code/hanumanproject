import Header from "./Header";
import { Link } from "react-router-dom";
import ongoingbanner from '../images/ongoingbanner.jpg';

const Goverment = () => {
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
                            <Link className='fwcolor'>GOVERMENT</Link>
                        </li>
                    </ol>
                </div>
            </div>
          <div className="container my-5">
  <h2 className="text-center about-header mb-4">Government Work Executed</h2>

  <p>
    Over the years, <strong>Shree Kashtbhanjan Infra</strong> has successfully executed multiple
    government infrastructure projects across Gujarat, delivering quality workmanship within
    stipulated timelines. Some of our key works include:
  </p>

  <div className="mt-4">
    <h5 className="fw-bold">1. Drainage Cleaning & Maintenance Works</h5>
    <ul>
      <li>Executed large-scale drainage cleaning projects to improve water flow and prevent blockages, ensuring better sanitation and flood prevention.</li>
      <li>Projects carried out under various State Government departments with strict adherence to safety and environmental guidelines.</li>
    </ul>

    <h5 className="fw-bold mt-3">2. Irrigation Department – Box Culvert Construction</h5>
    <ul>
      <li>Completed the construction of robust box culverts for effective water management and structural durability.</li>
      <li>Work involved excavation, reinforcement, concreting, and finishing to meet departmental specifications.</li>
    </ul>

    <h5 className="fw-bold mt-3">3. Canal Lining Works</h5>
    <ul>
      <li>Undertook water canal lining projects to prevent seepage, improve irrigation efficiency, and enhance long-term sustainability.</li>
      <li>Delivered with precision, using high-quality materials and modern construction techniques to ensure lasting performance.</li>
    </ul>
  </div>

  <p className="mt-4">
    All these projects were executed as part of <strong>Gujarat Government initiatives</strong>,
    reinforcing our expertise in public infrastructure, water management, and civil engineering works.
  </p>
</div>

        </>
    );
}
export default Goverment;