import React from 'react';

const About = () => {
  return (

    
    <div className="container-fluid Img">

        
    <div className="row">
      <div className="col-12 ">
     
      <h2 className="font-weight-bold text-center   ">About Us</h2> 
      <p className='textE  text-center '>Building your homes with BUILDONCLICK means innovation and meticulous planning.</p>
        <img src={process.env.PUBLIC_URL + 'pexels-kawser-hamid-176342.jpg'} className="img-fluid"  />



      </div>
    </div>

    
  </div>
  
  );
};

export default About;
