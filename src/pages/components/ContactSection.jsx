import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p>We'd love to hear from you. Here's how you can reach us...</p>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>contact@saascompany.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>123 SaaS Street, Tech City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;