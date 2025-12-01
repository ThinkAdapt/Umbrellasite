"use client";

import React, { useState } from 'react';
import { Logo, MenuIcon, CloseIcon } from '@/stories/icons';
import { Link } from '@/stories/Link';
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
  activeItem = 'products',
  profileImageUrl,
  userName,
  onContactUsClick,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'overview', label: 'Overview', href: '/overview' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'company', label: 'Company', href: '/company' },
  ];

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
            {/* Left side: Logo and Navigation */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <Logo width={46} height={28} />

              {/* Navigation Items */}
              <div className="flex items-center gap-2">
                {navItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      variant="tertiary"
                      size="small"
                      iconPosition="none"
                      state={isActive ? 'focused' : 'active'}
                      useNextLink={false}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
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
            <div className="md:hidden mt-6 pb-4 border-t border-neutral-200 flex flex-col min-h-[calc(100vh-120px)]">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      variant="tertiary"
                      size="small"
                      iconPosition="none"
                      state={isActive ? 'focused' : 'active'}
                      useNextLink={false}
                      anchorProps={{ onClick: toggleMobileMenu }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Contact Us Button - Centered at bottom */}
              <div className="mt-auto flex justify-center pt-6">
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

