import React from 'react'
import { contactData, contactDropdownData } from '../../../utils/data';
import { Link } from 'react-router';
import FAQSection from '../../../components/others/page-dropdown-section/PagedropdownSection';
import PagedropdownSection from '../../../components/others/page-dropdown-section/PagedropdownSection';



const supportMessage = `
  <p>
    If you have any urgent enquiry or issue, call us at
    <a href="tel:08032456789" className="phone-link">08032456789</a>
    or request for a <a href="#" className="chat-link">quick chat</a>.
  </p>
  <p>If you're interested in working with us?</p>
`;




const Contact = () => {
  return (
    <div className='contact-page'>
        <section className="contact-hero">
            <h2>Get in touch with the Rhomboid Health team</h2>

            <div className="contact-cards">

                {
                    contactData.map((contact, index) => (
                        <div className={`contact-card ${contact.cName}`} key={index}>
                            <h6>{contact.title}</h6>
                            {
                                !contact.description ?  
                                
                                <div 

                                    className='support-text'
                                    dangerouslySetInnerHTML={{__html: supportMessage}}
                                
                                />
                                : 
                                
                                <p>{contact.description}</p>}
                            
                            
                            
                            <Link className='contact-card-btn' to={contact.to}>
                                {contact.button}                            
                            </Link>

                        </div>
                    ))
                }

            </div>
        </section>


        <PagedropdownSection 
            sectionTitle = "Frequently Asked Questions"
            sectionHeader = "How can we help" 
            data = {contactDropdownData}
        
        />
        



    </div>
  )
}

export default Contact;