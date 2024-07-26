import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  { name: "John Doe", role: "CEO" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Mike Johnson", role: "Lead Developer" },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            At SaaS Company, we're passionate about creating innovative solutions that help businesses thrive in the digital age. 
            Our mission is to empower organizations with cutting-edge tools that streamline operations and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                <img src="/placeholder.svg" alt={member.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;