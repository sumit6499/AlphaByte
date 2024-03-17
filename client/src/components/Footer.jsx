
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 absolute bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email: placemint@gmail.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: Rajwada, P.O.Box. No.130, Ichalkaranji-416115, Kolhapur. </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                
                <i className="fab fa-facebook-f">Instagram</i>
              </a>
              <br/>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter">Facebook</i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          {/* Terms and conditions */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Terms & conditions</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam dui vel quam laoreet.</p> */}
            <a href="#">Privacy Policy</a>
            <a href="#">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
