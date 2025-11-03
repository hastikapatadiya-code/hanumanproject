import { useState } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaPhone } from "react-icons/fa";


const Enquiry = () => {
 const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", inputs);
 
  };


    return (
      <>
      <div className="container enquiry-modal mt-5 rounded-4" style={{maxWidth:"600px",background:"#f2efef" ,color:"#090909" ,  boxShadow:"0 0 10px rgba(0,0,0,0.5)"}}>
      <div className="modal-content text-center pt-4">
        <h2 style={{letterSpacing:"2px"}}>ENQUIRE NOW</h2>
        <p className="mb-0">Please Enter Your Details To Know More About Projects</p>

        <form onSubmit={handleSubmit} className="form-grid d-flex gap-3 flex-wrap px-3 py-5" >
          <div className="form-group  position-relative ">
            <FaUser className="icon position-absolute" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={inputs.name}
              onChange={handleChange}
              className="rounded" />
          </div>

          <div className="form-group  position-relative ">
            <FaPhone className="icon position-absolute" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              value={inputs.mobile}
              onChange={handleChange}
               className="rounded" />
          </div>

          <div className="form-group full-width position-relative">
            <FaEnvelope className="icon position-absolute" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={inputs.email}
              onChange={handleChange}
               className="rounded"/>
          </div>

          <div className="form-group full-width position-relative ">
            <FaBuilding className="icon position-absolute" />
            <select
              name="project"
              required
              value={inputs.project}
              onChange={handleChange} 
               className="rounded" >
              <option value="">Interested Projects</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Township">Township</option>
            </select>
          </div>
          <button type="submit" className="submit-btn  mt-2 p-2 rounded w-100 fw-bold" style={{color:"#fff", cursor:"pointer",letterSpacing:"1px", transition:"0.3s"}}>SUBMIT</button>
        </form>
      </div>
    </div>
      </>

    );
};

export default Enquiry;
