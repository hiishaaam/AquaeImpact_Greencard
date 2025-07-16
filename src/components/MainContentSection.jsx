import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function MainContentSection() {
  // Form fields data
  const formFields = [
    { id: "firstName", label: "First Name", type: "text", className: "mb-8" },
    { id: "lastName", label: "Last Name", type: "text", className: "mb-8" },
    { id: "email", label: "Email", type: "email", className: "mb-8" },
    {
      id: "companyName",
      label: "Company name",
      type: "text",
      className: "mb-8",
    },
    { id: "message", label: "Message", type: "textarea", className: "mb-8" },
  ];

  return (
    <section className="w-full bg-white relative mt-8">
      <div className="relative w-full">
        {/* Hero section with background image */}
        <div
          className="w-full h-[828px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/green_credit.jpeg')`,
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
            <h1 className="font-['Wittgenstein-SemiBold',Helvetica] font-semibold text-[#97edd2] text-[64px] mb-4">
              GREEN CREDITS
            </h1>
            <p className="font-['Inter-Regular',Helvetica] text-white text-[25px] max-w-[543px]">
              The ALCI system ensures that
              <br />
              every issued credit is backed by insurance.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-16 mt-8 justify-center">
            {/* Left column - Information */}
            <div className="w-full lg:w-[462px] mx-auto">
              <h2 className="font-['Wittgenstein-Medium',Helvetica] font-medium text-black text-[64px] tracking-[-1.28px] leading-[100px]">
                Green Credits
              </h2>
              <Separator className="w-[100px] h-[3px] bg-black my-6" />
              <p className="font-['Work_Sans-Regular',Helvetica] text-black text-[25px] tracking-[-0.50px] leading-[35px]">
                Asset- Backed Credits for Corporate Carbon Offsetting and Global
                Regulatory Recognition.
                <br />
                <br />
                Our credits are classified as assets, not commodities, making
                them unique in the carbon offset market. AQUAE&apos;s aggregated
                credit units, organizations can offset their emissions while
                keeping these credits on their balance sheets as valuable
                assets.
                <br />
                <br />
                These credits are valid for 33 years, with an annual revaluation
                and audit process that ensures their integrity and continued
                financial worth. Furthermore, they are fully backed by insurance
                guarantees, and their monetary value is secured under
                Lloyd&apos;s of London syndicates.
              </p>
            </div>

            {/* Right column - Form */}
            <Card className="w-full lg:w-[749px] bg-[#0b453b] rounded-none shadow-none mx-auto">
              <CardContent className="p-14 text-white text-center" style={{ backgroundColor: "#e8f5f2" }}>
                <h3 className="font-['Wittgenstein-SemiBold',Helvetica] font-semibold text-[#0b453b] text-[40px] mb-8 text-center">
                  TO BUY AND ALCI CREDITS
                </h3>

                {/* Tabs for Buy/Sell */}
                <Tabs defaultValue="buy" className="mb-8">
                  <TabsList className="w-full h-[70px] rounded-full p-1 bg-[#147966] flex">
                    <TabsTrigger value="buy" className="rounded-full font-semibold text-[20px] flex-1 h-full transition-colors duration-200">
                      Buy ALCI Credits
                    </TabsTrigger>
                    <TabsTrigger value="sell" className="rounded-full font-semibold text-[20px] flex-1 h-full transition-colors duration-200">
                      Sell ALCI Credits
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {formFields.map((field, index) => {
                    if (index < 2) {
                      // First name and Last name in two columns
                      return (
                        <div key={field.id} className={field.className}>
                          <label className="block font-['Inter-SemiBold',Helvetica] font-semibold text-[#0b453b] text-[25px] mb-4">
                            {field.label}
                          </label>
                          <Input
                            id={field.id}
                            type={field.type}
                            className="border-b border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Full width fields */}
                <div className="mt-4">
                  {formFields.slice(2).map((field) => (
                    <div key={field.id} className={field.className}>
                      <label className="block font-['Work_Sans-Medium',Helvetica] font-medium text-[#0b453b] text-3xl tracking-[-0.60px] mb-4">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.id}
                          className="border-b border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 min-h-[100px] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      ) : (
                        <Input
                          id={field.id}
                          type={field.type}
                          className="border-b border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Submit button */}
                <div className="flex justify-center mt-8">
                  <Button className="w-[225px] h-[72px] bg-[#147966] text-white rounded-[9px] font-['Work_Sans-Medium',Helvetica] font-medium text-3xl tracking-[-0.60px] shadow-[0px_4px_4px_#00000040] hover:bg-[#0b6352]">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
