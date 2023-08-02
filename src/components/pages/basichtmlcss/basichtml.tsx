import React from 'react'
import './basic.css'
import pershiba from '../../../constants/Pershiba-Image.jpeg'
export const Basichtml = () => {
  return (
    <div>

      <div className='Container'>
        <h1 className='myName'>
          Pershiba Velusamy
        </h1>
        <h4 className='h4class'>-React Developer</h4>
        <div className='header'>
          <img src={pershiba} alt='myPIc' height="150" width="150" />
          <div>
            <p className='Intro' title="About Me">
              I am a qualified and professional <b> React Developer </b> with <em> 2 years and 6 months</em> of experience in <i> <strong>Web application development</strong></i> with a proven knowledge in <strong> MERN Stack</strong> and seeks a position as a <b>React developer</b>.I have worked in UCAAS, CCAAS, Marketing Automation, Conversational AI, and Third party integration.
            </p>
            <span className='directionLink'>

              <h4>My Portfolio: <a href="https://marvelous-snickerdoodle-f5e622.netlify.app/" rel='noreferrer' target='_blank'>Pershiba-portfolio</a></h4>
              <h4>My LinkedIn: <a href="https://www.linkedin.com/in/pershiba-velusamy-443447249" rel='noreferrer' target='_blank'>Pershiba Velusamy</a></h4>

            </span>
          </div>

        </div>
        <hr />
        <div className='containerWrapper'>
          <div className='subContainer'>
            <div>
              <h2 className='contact h2class'>contact details:</h2>


              <p className='phone'><i className="fa-sharp fa-solid fa-phone phoneicon"></i> +91 9787546335 </p>
              <p className='phone'><i className="fa-sharp fa-solid fa-envelope"></i> pershibav@gmail.com </p>


            </div>

            <h2 className='h2class'>Expertise:</h2>
            <ul className='ulListOFskil'>
              <li>Web Development</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>MERN stack</li>
              <li>Redux/redux toolkit</li>
              <li>Redis</li>
              <li>Socket-io</li>
              <li>Rest API</li>


            </ul>
            <div className='Education'>
              <h2 className='h2class' >Education:</h2>
              <p>
                <strong>PSNA College of enginering and technology,</strong>
                <span className='h5Class'> <i >Anna University,</i> </span>
                <span>
                  <b>B.Tech.</b> Information Technology
                </span><br />
                <b>CGPA - </b>6.7
              </p>

            </div>
 


          </div>
          <div className='subContainter2'>
            <div className='subdiv2controler'>

              <p className='experience'>experience:</p>



              <div >
                <p className='companyName'>Vectone solutions Private Limited - Full stack  developer</p>
                <p ><span className='year'>Jan 2021 - Jun 2023</span> <span className='companylocation'>-chennai</span></p>

              </div>
              <div className='DetailsList'>
                <ul className='experienceul'>
                  <li>
                  2  years and 6 months of working experience in developing UCAAS, conversational AI, Marketing Automation and CCAAS application using React, Node JS, Redux toolkit and javascript.
                  </li>
                  <li>
                  Experienced is designing and integrating REST api's for backend using Express.
                  </li>
                  <li>
                  Experienced in developing and implementing socket Server using Express setup.
                  </li>

                </ul>
              </div>

            </div>


          </div>

        </div>

      </div>

    </div>
  )
}
