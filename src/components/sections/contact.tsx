"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-start">
        {" "}
        {/* biar judul & form ikut kiri */}
        <Link href={"#contact"}>
          <h2
            className={cn(
              "bg-clip-text text-4xl text-left text-transparent md:text-7xl pt-16",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            Hire Me
          </h2>
        </Link>
        <Card className="w-full max-w-lg shadow-lg rounded-2xl mt-10">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Feel free to reach out by filling the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 mr-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="Subject of your message"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Input
                  type="text"
                  placeholder="Write your message here..."
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
