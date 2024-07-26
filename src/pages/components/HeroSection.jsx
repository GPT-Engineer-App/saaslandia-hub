import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Transform Your Business with Our SaaS Solution
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Streamline your workflow, boost productivity, and drive growth with our powerful and intuitive platform.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">Try for Free</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;