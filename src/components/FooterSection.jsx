import React from "react";

export default function FooterSection() {
  // Navigation links data
  const mainLinks = [
    "Home",
    "Who We Are",
    "What We Do",
    "Resources",
    "Green Credits",
  ];

  const usefulLinks = ["Disclaimer", "Privacy Policy"];

  return (
    <footer className="w-full bg-[#0b453b] py-32">
      <div className="container mx-auto max-w-[1246px] flex flex-col md:flex-row justify-between gap-12">
        {/* Logo and Email Section */}
        <div className="flex flex-col">
          <h2 className="font-medium text-white text-[85px] leading-[75px] tracking-[-1.45px] font-['Work_Sans-Medium',Helvetica]">
            logo
          </h2>
          <span className="text-[35px] text-white tracking-[-0.24px] font-medium font-['Work_Sans-Medium',Helvetica]">
            EMAIL
          </span>
        </div>

        {/* Main Links Section */}
        <div className="flex flex-col">
          <h3 className="text-[#48ffd4] text-[35px] tracking-[-0.24px] leading-[75px] font-medium font-['Work_Sans-Medium',Helvetica]">
            Links
          </h3>
          <nav className="flex flex-col">
            {mainLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-[35px] tracking-[-0.24px] leading-[75px] font-medium font-['Work_Sans-Medium',Helvetica]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col">
          <h3 className="text-[#48ffd4] text-[35px] tracking-[-0.24px] leading-[75px] font-medium font-['Work_Sans-Medium',Helvetica]">
            Useful Links
          </h3>
          <nav className="flex flex-col">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-[35px] tracking-[-0.24px] leading-[75px] font-medium font-['Work_Sans-Medium',Helvetica]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
