"use client";

import { Button } from "@/components/ui/button";
import { DollarSign, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center space-x-2">
          <DollarSign className="w-8 h-8 text-purple-500" />
          <span className="text-white font-medium text-xl">Spend in Peace</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</Link>
          <Link href="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[76px] left-0 right-0 bg-background border-b border-white/10 p-4 z-40 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="/features" onClick={() => setIsOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="/how-it-works" onClick={() => setIsOpen(false)}>
                  How it Works
                </MobileNavLink>
                <MobileNavLink href="/examples" onClick={() => setIsOpen(false)}>
                  Examples
                </MobileNavLink>
                <MobileNavLink href="/pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </MobileNavLink>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Login
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-md hover:bg-white/10 block"
    >
      {children}
    </Link>
  );
}