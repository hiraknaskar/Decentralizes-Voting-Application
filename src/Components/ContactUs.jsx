import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us:</p>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: +91 123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="map">
        {/* You can embed a map here using Google Maps API or any other mapping service */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.7659222733964!2d88.25187323043647!3d24.096597691103714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dd0ee7dc333%3A0x36c1bc55f33d8d93!2sGovernment%20College%20Of%20Engineering%20and%20Textile%20Technology%2C%20Berhampore!5e0!3m2!1sen!2sin!4v1715488980846!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
