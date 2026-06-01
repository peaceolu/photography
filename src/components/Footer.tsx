import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">ImaPho</h3>
            <p className="text-gray-400">Capturing moments that matter, telling stories that inspire.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaXTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaYoutube size={24} /></a>
            </div>
          </div>
          <div>



            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3">Get updates on new work and offers</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ImaPho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;