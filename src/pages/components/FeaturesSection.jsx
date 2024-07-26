import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring quick load times and responsive interactions."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure",
    description: "We prioritize your data security with state-of-the-art encryption and protection measures."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analytics",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;