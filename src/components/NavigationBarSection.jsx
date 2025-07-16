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
    <header className="w-full h-[100px] bg-white bg-blend-hard-light flex items-center px-12">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="[font-family:'Work_Sans-Medium',Helvetica] font-medium text-[#147866] text-[45px] tracking-[-0.90px] leading-[75px]">
          Logo
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
        <Button className="h-[72px] w-[225px] bg-[#808884] rounded-[9px] border border-solid border-[#595858] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-white text-3xl tracking-[-0.60px] shadow-[0px_4px_4px_#00000040]">
          Green Credits
        </Button>
      </div>
    </header>
  );
};

export default NavigationBarSection;
