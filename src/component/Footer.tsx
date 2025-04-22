import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#112134] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img src="/assets/logo2.svg" alt="" />
            </div>
            {/* <p className="text-[16px] font-[400] mt-2">Top flight business in Africa</p> */}

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="/"
                className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
              >
                <img src="/assets/Link - Facebook.svg" alt="" />
              </a>
              <a
                href="/"
                className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
              >
                <img src="/assets/in.svg" alt="" />
              </a>
              <a
                href="/"
                className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
              >
                <img src="/assets/Link - Instagram.svg" alt="" />
              </a>
              <a
                href="/"
                className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
              >
                <img src="/assets/x.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 */}
          <div>
            <h4 className="text-[18px] font-[500] mb-4">Portfolio</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a
                  href="/"
                  className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
                >
                  Expertise
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h4 className="text-[18px] font-[500] mb-4">Work with us</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a
                  href="/"
                  className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
                >
                  Talk to us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-[18px] font-[400] hover:text-amber-500 transition-colors"
                >
                  Careers@BLIP LTD
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-[18px] font-[500] mb-4">
              For any other queries
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li className="text-[18px] font-[400] ">
                Reach us at info@blip.africa
              </li>
              <li className="text-[18px] font-[400] ">
                WhatsApp: +2348166178166
              </li>
              <li className="text-[18px] font-[400] ">Tel: +2348054678797</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-xs font-light text-center md:text-right">
          ID: 2000983 · Copyright 2025 · All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
