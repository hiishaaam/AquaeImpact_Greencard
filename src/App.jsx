import React from "react";
import FooterSection from "./components/FooterSection";
import MainContentSection from "./components/MainContentSection";
import NavigationBarSection from "./components/NavigationBarSection";

export default function GreenCredits() {
  return (
    <div className="bg-transparent flex flex-col justify-center w-full min-h-screen">
      <div className="w-full">
        <div className="flex flex-col">
          <NavigationBarSection />
          <MainContentSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
