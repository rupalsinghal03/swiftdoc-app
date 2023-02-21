import React from 'react'
import './page.css'
import './services.css'
 import brands from '../assets/brands.png'
import img2 from '../assets/img2 (1).png'
import img1 from '../assets/head1.png'
// import img1 from '../assets/services-hero.png'
import img3 from '../assets/text.png'
import card from '../assets/card1.png'
function Page() {
    return (
        <>
            {/* Hero section starts */}
            <div className="container-fluid hero-section">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h1>Online Doctor Consultations</h1>
                        <h4>DIRECT FROM YOUR <b>PHONE</b> OR <b>DESKTOP </b></h4>
                        <p>See a Registered Australian Doctor for diagnosis, treatment, <br /> prescriptions, medical certificates, referrals, pathology, <br /> imaging and more...</p>
                        <div className="hero-btn">
                        <button>BOOK AN APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* hero section */}
      {/* <div className="container-fluid services-main">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>OUR SERVICES</h6>
            <h2>Experience the evolution of convenient healthcare</h2>
            <h5>Online doctor consultations using your desktop or phone</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='svg'><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
    
      </div> */}

            {/* featured section starts */}

            <div className="nav-curve"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ffffff"}}></path></svg></div>
            <div className="container-fluid featured-section">
                                     <p>As featured in</p>
                        <div className="img-div">
                            <img src={img3} alt="" style={{ maxWidth: "100%",height: "auto" }} />
                        </div>
            </div>

            {/* cards section here */}
            <div className="container-fluid cards-section">
                    <h3>Making health easier</h3>
                    <p>Interact with our online doctors in 4 easy steps.</p>
                    <div className="cards-div row">
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Choose a service</h5>
                                <p className="card-text">Choose a service to get started</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div >
                            <img src={card} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Choose a doctor</h5>
                                <p className="card-text">After choosing a service, choose one of our Australia based online doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card} class="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5>Choose a time</h5>
                                <p className="card-text">Choose a time convenient for you</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card} class="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5>Have your video consultation</h5>
                                <p className="card-text">Be seen by one of our expert doctors at a time that suits you from anywhere in Australia.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="button-div">
                        <button>BOOK AN APPOINTMENT</button>
                    </div>
            </div>

            {/* services section here */}
            {/* <div className="container services-section">
                <div className="row">
                    <div className="col-6">
                       <div className="services-inner">
                       <div className="services-text">
                            <h3>Doctor consultations have <br />
                                never been more convenient.</h3>
                            <p>No travel hassles or delays</p>
                        </div>
                        <div className="services-btn">
                            <button>LEARN MORE ABOUT OUR SERVICES</button>
                        </div>
                       </div>
                    </div>
                    <div className="col-6">
                        <div className="services-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* brands section */}
            <div className="container brands-section">
                <div className="row">
                    <div className="col">
                        <div className="brands-head">
                        <h4>Trusted By</h4>
                        </div>
                        <div className="brands-img">
                            <img src={brands} alt="" style={{ maxWidth: "100%" }}/>
                        </div>
                        <div className="brands-para">
                        <p>And thousands of other pharmacies nationwide. <br />
                            We are registered with Argus, Medisecure and Rural Health Alliance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
