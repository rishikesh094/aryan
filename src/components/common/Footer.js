"use client";
import { AnimatedElement } from "@/components/common";

export default function Footer() {
  return (
    <footer className="bg-[#5e0d0d] text-white">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-4">
        {/* Logo & About */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl">
              <span className="text-red-500">Crez</span>vatic
            </div>
            <p className="text-sm mt-3 leading-relaxed">
              Crezvatic believes in understanding your business and then Develop
              a plan with you to capture the digital marketing world
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4 text-xl">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </AnimatedElement>

        {/* Menu */}
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </AnimatedElement>

        {/* Services */}
        <AnimatedElement animation="fadeInUp" delay={0.3}>
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Website Design and Development</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Pay-per-click (PPC)</li>
              <li>Video Creation</li>
            </ul>
          </div>
        </AnimatedElement>

        {/* Contact */}
        <AnimatedElement animation="fadeInUp" delay={0.4}>
          <div>
            <h3 className="font-semibold mb-3">Start a Conversation</h3>
            <ul className="space-y-3 text-sm">
              <li>📞 +91-98201 60482</li>
              <li>📧 connect@crezvatic.com</li>
              <li>
                📍 907, Opal Square IT Park, C–2, Padwal Nagar Wagle Estate,
                <br />
                Shri hanuman Marg, MIDC, Thane West, Thane, Maharashtra 400604
              </li>
            </ul>
          </div>
        </AnimatedElement>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-6">
        <div className="container mx-auto py-4 text-center text-sm">
          Read Our Privacy Policy © 2012 — {new Date().getFullYear()} Crezvatic.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
