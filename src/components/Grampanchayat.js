import Header from "./Header";
import { Link } from "react-router-dom";
import ongoingbanner from '../images/ongoingbanner.jpg';

const Grampanchayat = () => {
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
            <div className="container">
                <div>
                    <p>
                        ⸻

                        Gram Panchayat Works

                        Shree Kashtbhanjan Infra has also been actively involved in executing infrastructure development works for various Gram Panchayats and local bodies. These projects have played a key role in improving rural connectivity, sanitation, and community facilities. Our scope of work has included:
                        •	Road Construction – Building block-paved roads and RCC roads for durable, all-weather connectivity.
                        •	Drainage Development – Constructing drainage channels to improve sanitation and prevent waterlogging.
                        •	Dam Construction – Developing small-scale dams and water storage structures to support irrigation and water supply.
                        •	Street Lighting – Installing street lights to enhance safety and improve village infrastructure.
                        •	Sanitation & Cleanliness Projects – Executing works aligned with Swachh Bharat Mission to promote hygiene and improve living conditions.

                        Through these works, we have contributed to better infrastructure, public safety, and overall development in rural communities, fulfilling our commitment to nation-building at the grassroots level
                    </p>
                </div>
            </div>
        </>
    );
}
export default Grampanchayat;