import React from 'react';
import { assets } from '../assets/asset';
import Title from '../components/title';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      
      {/* Main Section */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center mb-16">

        {/* Left - Image */}
        <div className="w-full">
          <img
            src={assets.about}
            alt="Clothing Hub"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right - About Text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <Title text1={'WELCOME TO'} text2={'CLOTHING HUB'} />
          </h1>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            <span className="text-orange-600 font-semibold">Clothing Hub</span> is your ultimate destination for stylish,
            affordable, and comfortable fashion. Our collections are thoughtfully designed to reflect
            modern trends while maintaining timeless quality.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From casual streetwear to elegant fits, Clothing Hub offers something for everyone. Discover a wardrobe that brings out your best self — every day.
          </p>
          <div className="mt-6">
            <a
              href="/collection"
              className="inline-block bg-black hover:bg-gray-500 text-white px-6 py-2 rounded-lg shadow transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl w-full text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4"><Title text1={'WHY'} text2={'CHOOSE US'}/></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We go beyond just selling clothes. Here's what makes us stand out in fashion retail.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">🛍️ <Title text2={'Seasonal Sales'}/></h3>
          <p className="text-gray-700 text-sm">
            Enjoy exciting discounts and exclusive deals all year round—because fashion should be affordable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">💻 <Title text2={'Online Services'}/></h3>
          <p className="text-gray-700 text-sm">
            Shop from anywhere with easy browsing, secure checkout, and fast doorstep delivery.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">💸 <Title text2={'Smart Savings'}/></h3>
          <p className="text-gray-700 text-sm">
            We offer bundle deals, promo codes, and loyalty rewards to keep your wallet happy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">📞 <Title text2={'24/7 Support'}/></h3>
          <p className="text-gray-700 text-sm">
            Have a question? Our team is always ready — reach us anytime via call, chat, or email.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
