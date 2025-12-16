"use client";

import React, { useState } from 'react';
import { Logo, MenuIcon, CloseIcon } from '@/stories/icons';
import { Button } from '@/stories/Button';

export interface HeaderProps {
  /**
   * Active navigation item
   */
  activeItem?: 'overview' | 'products' | 'pricing' | 'company';
  /**
   * User profile image URL
   */
  profileImageUrl?: string;
  /**
   * User name (optional)
   */
  userName?: string;
  /**
   * Callback when Contact Us button is clicked
   */
  onContactUsClick?: () => void;
}

export const Header = ({
  profileImageUrl,
  userName,
  onContactUsClick,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Main navigation bar */}
      <nav className="bg-white py-8">
        <div className="mx-auto px-6 container">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left side: Logo */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <Logo width={46} height={28} />
            </div>

            {/* Right side: Contact Us */}
            <div className="flex items-center gap-4">
              {/* Contact Us Button */}
              <Button
                variant="primary"
                size="small"
                iconPosition="none"
                state="active"
                onClick={onContactUsClick}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <Logo width={40} height={40} />
            </div>

            {/* Mobile Hamburger Button */}
            <Button
              variant={isMobileMenuOpen ? 'secondary' : 'primary'}
              size="small"
              iconPosition="only"
              state="active"
              onClick={toggleMobileMenu}
              icon={
                isMobileMenuOpen ? (
                  <CloseIcon width={20} height={20} color="#2563EB" />
                ) : (
                  <MenuIcon width={20} height={20} color="#FAFAFA" />
                )
              }
            />
          </div>

          {/* Mobile Menu (Expanded) */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-[120px] bg-white z-50 w-screen">
              {/* Mobile Contact Us Button - At top, centered */}
              <div className="flex justify-center pt-6 px-6">
                <Button
                  variant="primary"
                  size="small"
                  iconPosition="none"
                  state="active"
                  onClick={() => {
                    toggleMobileMenu();
                    onContactUsClick?.();
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

