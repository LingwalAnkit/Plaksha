import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white/30 backdrop-blur-md px-6 py-10">
      <footer>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Logo</h2>
            <p className="text-black mt-1">© 2025 DataShield Solutions Inc.</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-gray-800 hover:text-gray-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Legal */}
            <div>
              <h3 className="font-medium mb-2 text-gray-900">Legal</h3>
              <ul className="text-gray-800 space-y-1">
                <li>
                  <a href="/terms" className="hover:text-gray-500">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-gray-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-gray-500">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-medium mb-2 text-gray-900">Product</h3>
              <ul className="text-gray-800 space-y-1">
                <li>
                  <a href="/features" className="hover:text-gray-500">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-gray-500">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-medium mb-2 text-gray-900">Support</h3>
              <ul className="text-gray-800 space-y-1">
                <li>
                  <a href="/help" className="hover:text-gray-500">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
