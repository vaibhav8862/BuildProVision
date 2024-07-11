import { useState } from 'react';
import './Home.css';
import Axios from 'axios';
import { toast } from 'react-toastify';

function Home(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:4000/studentData', {
        name,
        email, 
        phone,
        requirements
      });
   console.log(response.data)
      toast.success("Data Submit Successfully!!",{autoClose:1300})
      setName('');
      setEmail('');
      setPhone('');               
      setRequirements('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
return(
<>                                                                                                                      
<div className="text-container">
      <h1 className="animated-text">Engineered Solution For All Your Construction <br/>Needs</h1>
      <div>
      <p className='textE'>Enjoy all construction related services at your doorstep across India with the guaranteed quality at best rate</p>
      </div>
    </div>
    <div className="container mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary btn-sm mt-3">☎ 7061882678</button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary btn-sm mt-3">House Design Starting @1/sqft*</button>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary btn-sm mt-3">Construction With Material</button>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary btn-sm mt-3">Construction At Labour Rate</button>
      </div>
    </div>
    <div  className="bg-dark p-5 mt-5  Bgc">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
            <h2 id="digit1" className='text-light' style={{ fontWeight: "bold" }}>
              2,100
            </h2>
            <h4 style={{ color: "white" }}>CLIENTS SERVED</h4>
          </div>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h2 id="digit2"  className='text-light'  style={{ fontWeight: "bold" }}>
              1,500,000
            </h2>
            <h4 style={{ color: "white" }}>Sq.Ft. DESIGNED</h4>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <h2 id="digit3"  className='text-light'  style={{ fontWeight: "bold" }}>
              23
            </h2>
            <h4 style={{ color: "white" }}>SERVICE STATES</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-4">
      <h2 className="font-weight-bold">CONTACT US FOR CONSULTATION</h2>
    

      <div>
    <p className='textE'>Ready to get started? Fill out the form below, and one of our engineers will get in touch with you shortly:</p>
    </div>

    <div className="container">
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form    onSubmit={collectData} action="#" method="post" id="contactForm" className="text-center">
            <label htmlFor="name" className='font-weight-bold'>Your Name</label>
            <input type="text" id="name" name="name" required className="form-control" placeholder='Enter Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="email" className='font-weight-bold'>Email</label>
            <input type="email" id="email" name="email" required className="form-control" placeholder='Enter Your Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
            />
            <label htmlFor="mobile" className='font-weight-bold'>Phone</label>
            <input type="number" id="mobile" name="mobile" required className="form-control" placeholder='Enter Your Phone'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
            />
            <label htmlFor="needs" className='font-weight-bold'>Your Requirements</label>
            <textarea id="needs" name="needs" required className="form-control" placeholder='Enter Your Requirements ' defaultValue={""} 
              value={requirements}
              onChange={(e)=>setRequirements(e.target.value)} 
            />
            <div className="mb-3">
              <div className="g-recaptcha" data-sitekey="" />
            </div>
      <input
              type="hidden"
              name="secret_key"
              defaultValue="AOiAM&%*#AQgfdgshyrunjuy@34592rghtyb565787678678767"
            />
  <button type="submit" className="btn btn-primary mt-2" >Submit</button>
</form>   
        </div>
      </div>
    </div>
    </div>
  <div>
  <div className="text-center Build">
      <h2 className="font-weight-bold">BUILDONCLICK - INSURED CONSTRUCTION SERVICE</h2>
    </div>
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card">
            <img src="Insured.png" className="card-img-top" alt="Card 1" />    
          </div>
        </div>
        {/* Card 2 */}
        <div className="col">
          <div className="card">
            <img src="Earthquake.png" className="card-img-top" alt="Card 2" />    
          </div>
        </div>
        {/* Card 3 */}
        <div className="col">
          <div className="card">
            <img src="Theft.png" className="card-img-top" alt="Card 3" />        
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid ImgE">
  <div className="row">
    <div className="col-12 mt-5">
      {/* <img src="Engineering.png" className="img-fluid" alt="Responsive Image" /> */}
      <img src={process.env.PUBLIC_URL + 'Engineering.png'} className="img-fluid"  />
    </div>
  </div>
</div>
<div className="text-center Build">
      <h2 className="font-weight-bold">PARTNER BRANDS</h2>
    </div>
    <div className="container-fluid ImgE">
  <div className="row">
    <div className="col-12 mt-5">
      <img src="brands.png" className="img-fluid" alt="Responsive Image" />
    </div>
  </div>
</div>
<div className="text-center Build">
      <h2 className="font-weight-bold">OUR SERVICES</h2>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ARCHITECTURE<br/>DESIGNING</h5>
              <p className="card-text">Get Vastu compliant Design at Just <br/>Re.1/sq.ft. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">TURNKEY <br/>CONSTRUCTION</h5>
              <p className="card-text">Build Premium house at affordable<br/>rate.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">LABOR RATE<br/> CONSTRUCTION</h5>
              <p className="card-text">Hire the Trained workers and biuld<br/>a strong and long lasting Structure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ENGINEERING <br/> CONSULTATION </h5>
              <p className="card-text">Expert Engineering consultation for<br/> your construction project </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">COMMERCIAL<br/> CONSTRUCTION </h5>
              <p className="card-text">one point Solution for all type of <br/>Commercial construction </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CONSTRUCTION<br/>MATERIALS</h5>
              <p className="card-text">Get all construction and furnishing<br/> Material at WHOLESALE rate.</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="line_design"></hr>
    </div>
    <div className="text-center Build">
      <h2 className="font-weight-bold">OUR CURRENT PROJECTS</h2>
    </div>
<hr></hr>
<div className="container">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            <img style={{height:"400px"}}  src="gallery3.png" className="card-img-top" alt="Image 1" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card">
            <img style={{height:"400px"}} src="gallery7.png" className="card-img-top" alt="Image 2" />   
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card">
            <img style={{height:"400px"}}  src="gallery8.png" className="card-img-top" alt="Image 3" />    
          </div>
        </div>
      </div>
    </div>
    <hr className="line_design"></hr>
  </div> 
</>
)
}
export default Home;