import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import React from "react";

const NavigationBarSection = () => {
  // Navigation menu items data
  const menuItems = [
    { text: "Home", href: "#" },
    { text: "Who we are", href: "#" },
    { text: "What we do", href: "#" },
    { text: "Resources", href: "#" },
  ];

  return (
    <header className="w-full h-[100px] bg-[#e8f5f2] bg-blend-hard-light flex items-center px-12">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
            alt="AQUAE.Impact Logo" 
            className="w-12 h-12"
          />
          <span className="[font-family:'Work_Sans-Medium',Helvetica] font-medium text-[#147866] text-[45px] tracking-[-0.90px] leading-[75px]">
            AQUAE.Impact
          </span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex space-x-10">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="[font-family:'Work_Sans-Medium',Helvetica] font-medium text-[#147866] text-3xl tracking-[-1.50px] leading-[75px] whitespace-nowrap"
                >
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Green Credits Button */}
<<<<<<< HEAD
        <Button className="h-[60px] w-[210px] bg-gradient-to-r from-[#1e4632] to-[#3a7d5d] rounded-full border-none [font-family:'Work_Sans-Medium',Helvetica] font-semibold text-white text-2xl tracking-[-0.60px] shadow-lg transition-all duration-300 hover:from-[#1e4632] hover:to-[#17603e] hover:scale-105">
=======
        <Button className="h-[72px] w-[225px] bg-gradient-to-r from-[#46BEA9] to-[#147866] hover:from-[#147866] hover:to-[#46BEA9] rounded-[12px] border-0 [font-family:'Work_Sans-Medium',Helvetica] font-medium text-white text-3xl tracking-[-0.60px] shadow-[0px_8px_16px_rgba(70,190,169,0.3)] hover:shadow-[0px_12px_24px_rgba(70,190,169,0.4)] transition-all duration-300 transform hover:scale-105">
>>>>>>> 6ff5217499f437e3e9e6bf6f9deec7e0c48ff887
          Green Credits
        </Button>
      </div>
    </header>
  );
};

export default NavigationBarSection;
