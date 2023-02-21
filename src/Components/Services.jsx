import React from 'react'
import './services.css'
import img1 from '../assets/services-hero.png'
import img2 from '../assets/doctor.png'
function Services() {
  return (
    <>
      {/* hero section */}
      <div className="container-fluid services-main">
        <div className="row pb-md-4">
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
      </div>

      <div className="nav-curve2"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ffffff"}}></path></svg></div>

      {/* about swiftdoc section */}
      <div className="container-fluid">
       <div className="row">
       <div className="about-swift">
          <div className="para-div">
            <p>SwiftDoc provides online video consultations with a doctor using your phone or desktop. We SMS e-prescriptions to your phone or pharmacy anywhere in Australia. We can even deliver your medication for free. We email you medical certificates, referrals for blood tests and imaging and send your results to you.</p>
            <br />
            <p>We can also refer you to any specialist, physiotherapist, psychologist or allied health professionals. We can also easily complete forms and paperwork for you. We also see nursing home patients. We can take over your GP care. 18 out of 20 of the most common problems seen in General Practice can be managed safely through video conferencing. There are some obvious examples of conditions that SwiftDoc cannot treat e.g Emergencies. In case of an Emergency please call Triple Zero (000)</p>

          </div>
        </div>
       </div>
      </div>

      {/* services section */}
      <div className="container-fluid services-outer ">
        <div className="services-inner">
          <h3>Access to everyday doctor and specialist services at your fingertips</h3>
          <p>No travel hassles or delays</p>
          <div className="check-div">
            <p><i class="fa fa-check" aria-hidden="true"></i> <span> After hours GP services</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span>Prescriptions by SMS to your phone or any pharmacy</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span> Medical certificates emailed to you</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span>Referrals to specialists emailed to you</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i><span> Arrange xrays, CTs, MRIs, ultrasounds & blood tests</span></p>
          </div>
        </div>
      </div>

      {/* consultation cover section */}
      <div className="container-fluid cover-section">
        <div className="row">
          <div className="cover-head">
            <h1>Our Online Doctor Consultations Cover:</h1>
          </div>
          <div className="cover-points">
            <div className="item-arrow-left">
              <p><i class="fa fa-arrow-right"></i>Repeat Prescriptions</p>
              <p><i class="fa fa-arrow-right"></i>Medical Certificates</p>
              <p><i class="fa fa-arrow-right"></i>Weight Loss</p>
              <p><i class="fa fa-arrow-right"></i>Repeat Prescriptions</p>
              <p><i class="fa fa-arrow-right"></i>Mental Health Counselling & Psychology</p>
              <p><i class="fa fa-arrow-right"></i>After-hours GP appointments</p>
              <p><i class="fa fa-arrow-right"></i>Delivery of Medication</p>
              <p><i class="fa fa-arrow-right"></i>General health advice</p>
              <p><i class="fa fa-arrow-right"></i>Imaging referrals</p>
            </div>
            <div className="item-arrow-right">
              <p><i class="fa fa-arrow-right"></i>Repeat Prescriptions</p>
              <p><i class="fa fa-arrow-right"></i>Medical Certificates</p>
              <p><i class="fa fa-arrow-right"></i>Weight Loss</p>
              <p><i class="fa fa-arrow-right"></i>Repeat Prescriptions</p>
              <p><i class="fa fa-arrow-right"></i>Mental Health Counselling & Psychology</p>
              <p><i class="fa fa-arrow-right"></i>After-hours GP appointments</p>
              <p><i class="fa fa-arrow-right"></i>Delivery of Medication</p>
              <p><i class="fa fa-arrow-right"></i>General health advice</p>
              <p><i class="fa fa-arrow-right"></i>Imaging referrals</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="deseases-section">
            <div className="head">
              WE TREAT ANY ILLNESS INCLUDING:
            </div>
            <div className="inner-deseases">
              <div className="itemIllness">Colds, Coughs and Flus </div>
              <div className="itemIllness">Diarrhoea and Vomiting </div>
              <div className="itemIllness">Mental Health </div>
              <div className="itemIllness">UTIs (urine infections)  </div>
              <div className="itemIllness">UTIs Sports Injuries  </div>
              <div className="itemIllness">UTIs Anxiety  </div>
              <div className="itemIllness">Skin rashes </div>
              <div className="itemIllness">Allergies </div>
              <div className="itemIllness">Depression </div>
              <div className="itemIllness">Sore throats
              </div>
              <div className="itemIllness">Quit Smoking
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services