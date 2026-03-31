import React from 'react'
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-w-[1290px] mx-auto bg-[#0b1b34] text-gray-300 px-6 md:px-16 py-12">
<div className="grid grid-cols-1 md:grid-cols-5 gap-10">

{/* Brand */}
<div className="md:col-span-2">
<h2 className="text-white text-2xl font-semibold mb-4">DigiTools</h2>
<p className="text-sm text-gray-400 leading-relaxed max-w-md">
Premium digital tools for creators, professionals, and businesses.
Work smarter with our suite of powerful tools.
</p>
</div>

{/* Product */}
<div>
<h3 className="text-white font-semibold mb-4">Product</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:text-white">Features</a></li>
<li><a href="#" className="hover:text-white">Pricing</a></li>
<li><a href="#" className="hover:text-white">Templates</a></li>
<li><a href="#" className="hover:text-white">Integrations</a></li>
</ul>
</div>

{/* Company */}
<div>
<h3 className="text-white font-semibold mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:text-white">About</a></li>
<li><a href="#" className="hover:text-white">Blog</a></li>
<li><a href="#" className="hover:text-white">Careers</a></li>
<li><a href="#" className="hover:text-white">Press</a></li>
</ul>
</div>

{/* Resources + Social */}
<div>
<h3 className="text-white font-semibold mb-4">Resources</h3>
<ul className="space-y-2 text-sm mb-6">
<li><a href="#" className="hover:text-white">Documentation</a></li>
<li><a href="#" className="hover:text-white">Help Center</a></li>
<li><a href="#" className="hover:text-white">Community</a></li>
<li><a href="#" className="hover:text-white">Contact</a></li>
</ul>

<h3 className="text-white font-semibold mb-3">Social Links</h3>
<div className="flex space-x-3">
<a
href="#"
className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-white transition"
>
<FaInstagram size={18} />
</a>

<a
href="#"
className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-white transition"
>
<FaFacebookF size={16} />
</a>

<a
href="#"
className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-white transition"
>
<FaXTwitter size={16} />
</a>
</div>
</div>
</div>

{/* Bottom */}
<div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>© 2026 Digitools. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a href="#" className="hover:text-white">Privacy Policy</a>
<a href="#" className="hover:text-white">Terms of Service</a>
<a href="#" className="hover:text-white">Cookies</a>
</div>
</div>
</footer>
  )
}

export default Footer