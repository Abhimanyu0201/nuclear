import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-4 mt-10 md:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8">Rise to the Impossible</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Sector Specific Solutions</h2>
            <ul>
              <li>E-Commerce</li>
              <li>FMCG & Retail</li>
              <li>Consumer Apps</li>
              <li>BFSI</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Real Estate</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul>
              <li>Digital Media Planning & Buying</li>
              <li>Social Media Marketing</li>
              <li>Influencer Marketing</li>
              <li>Programmatic Solutions</li>
              <li>Video Creation & Marketing</li>
              <li>Content & SEO Strategy</li>
              <li>Multi Lingual Marketing</li>
              <li>Marketing Strategy Consulting</li>
              <li>Market Research & Analytics</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <ul>
              <li>Bengaluru</li>
              <li>Chennai</li>
              <li>Delhi NCR</li>
              <li>Mumbai</li>
            </ul>
            <h2 className="text-xl font-semibold mb-4 mt-8">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-white hover:text-gray-400">Facebook</a>
              <a href="https://www.instagram.com" className="text-white hover:text-gray-400">Instagram</a>
              <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">LinkedIn</a>
              <a href="https://www.youtube.com" className="text-white hover:text-gray-400">YouTube</a>
              <a href="https://www.spotify.com" className="text-white hover:text-gray-400">Spotify</a>
            </div>
          </div>
        </div>
        <footer className="mt-8 border-t border-gray-700 pt-4">
          <p>© 2024 Social Beat Digital Marketing LLP</p>
          <a href="#" className="text-gray-400 hover:text-white">Deepak Bairwa</a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

