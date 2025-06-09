import React from 'react';
import { assets } from '../assets/asset';
import Title from '../components/title';


const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4 sm:px-10">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image - No Cropping */}
        <div className="flex justify-center items-center">
          <img
            src={assets.contact}
            alt="Contact Us"
            className="max-w-full h-auto object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Right Side: Shop Contact Info */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold text-orange-600"><Title text1={'CONTACT'} text2={'US'}/></h2>
          <p className="text-lg">
            We'd love to connect with you. Reach out through any of the contact methods below or visit us at our store.
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg">📍 Shop Location</h3>
              <p>Clothing Hub Store<br />Kalanki, Kathmandu, Nepal</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p>+977 9866422719<br />+977 9843354128</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">✉️ Email</h3>
              <p>clothhub@clothinghub.com<br />chetkarki349@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
              <p>Sunday – Friday: 10:00 AM – 6:00 PM<br />Saturday: Closed</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
