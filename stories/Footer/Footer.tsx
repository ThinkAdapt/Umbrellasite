import React from 'react';
import { Logo } from '@/stories/icons';
import { Text } from '@/stories/Text';
import sopranoAIImage from '@/stories/assets/SopranoAI.png';

export interface FooterProps {
  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (link: string) => void;
}

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path
      d="M10.5 0C4.70167 0 0 4.70167 0 10.5C0 12.4483 0.536678 14.28 1.47001 15.855L0 21L5.14497 19.53C6.71997 20.4633 8.55167 21 10.5 21C16.2983 21 21 16.2983 21 10.5C21 4.70167 16.2983 0 10.5 0ZM16.1233 14.5133C15.8783 15.2017 14.7116 15.8317 14.1866 15.89C13.6616 15.9483 13.1717 16.135 10.745 15.1783C7.82836 14.0117 5.97333 11.0017 5.83333 10.815C5.69333 10.6283 4.66667 9.25167 4.66667 7.82834C4.66667 6.40501 5.40165 5.71667 5.66998 5.41333C5.93832 5.12167 6.25336 5.05167 6.44002 5.05167C6.63836 5.05167 6.825 5.05166 7 5.06333C7.19833 5.06333 7.43165 5.06333 7.64165 5.55333C7.89832 6.12499 8.44665 7.54834 8.51665 7.67667C8.58665 7.81667 8.63334 7.99166 8.54001 8.17833C8.43501 8.36499 8.38834 8.49333 8.24834 8.65666C8.10834 8.82 7.94501 9.03001 7.81668 9.15834C7.66501 9.29834 7.52503 9.45001 7.68836 9.74167C7.86336 10.0217 8.43503 10.9783 9.28669 11.7367C10.3834 12.7283 11.305 13.0317 11.5967 13.1717C11.8767 13.3117 12.0516 13.2883 12.215 13.1017C12.39 12.915 12.9383 12.2617 13.125 11.97C13.3117 11.69 13.4983 11.7367 13.7667 11.83C14.035 11.9233 15.435 12.635 15.7266 12.775C16.0066 12.9267 16.205 12.9967 16.275 13.1133C16.345 13.23 16.345 13.8133 16.1117 14.49L16.1233 14.5133Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path
      d="M20.9067 6.15998C20.825 4.47998 20.44 2.98666 19.215 1.76166C17.99 0.536663 16.4967 0.151667 14.8167 0.07C13.0784 -0.0233333 7.88667 -0.0233333 6.16 0.07C4.48 0.151667 2.99835 0.536663 1.76168 1.76166C0.525014 2.98666 0.151667 4.47998 0.07 6.15998C-0.0233333 7.89832 -0.0233333 13.09 0.07 14.8283C0.151667 16.5083 0.536681 18.0017 1.76168 19.2267C2.99835 20.4517 4.48 20.8367 6.16 20.9183C7.89833 21.0117 13.09 21.0117 14.8167 20.9183C16.4967 20.8367 17.99 20.4517 19.215 19.2267C20.44 18.0017 20.825 16.5083 20.9067 14.8283C21 13.09 21 7.89833 20.9067 6.17166V6.15998ZM10.4767 16.03C7.42002 16.03 4.93502 13.545 4.93502 10.4883C4.93502 7.43166 7.42002 4.94666 10.4767 4.94666C13.5333 4.94666 16.0183 7.43166 16.0183 10.4883C16.0183 13.545 13.5333 16.03 10.4767 16.03ZM16.9167 5.23832C16.275 5.23832 15.75 4.71332 15.75 4.07166C15.75 3.42999 16.2633 2.90499 16.9167 2.90499C17.5583 2.90499 18.0833 3.42999 18.0833 4.07166C18.0833 4.71332 17.5583 5.23832 16.9167 5.23832ZM14.2683 10.4883C14.2683 12.5767 12.565 14.28 10.4767 14.28C8.38835 14.28 6.68502 12.5767 6.68502 10.4883C6.68502 8.39999 8.38835 6.69666 10.4767 6.69666C12.565 6.69666 14.2683 8.39999 14.2683 10.4883Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M4.71412 21.0008H0.292465V7.7358H4.71412V21.0008ZM5.15746 2.57914C5.15746 1.17914 4.04914 0.0474651 2.64914 0.000798447C1.2258 -0.0342016 0.0357984 1.08579 0.000798447 2.50912C-0.0342016 3.93246 1.08579 5.12246 2.50912 5.15746C3.95579 5.16913 5.13413 4.02581 5.15746 2.57914ZM20.9425 12.9858C20.9425 8.85581 18.2708 7.59579 15.9958 7.59579C14.3975 7.54913 12.8925 8.3308 12.0175 9.6608V7.74746H7.74746V21.0125H12.1691V14.1291C12.1691 14.0591 12.1691 13.9891 12.1691 13.9191C12.1691 13.9191 12.1691 13.9191 12.1691 13.9075C12.0758 12.4958 13.1491 11.2708 14.5608 11.1775C15.7158 11.1775 16.5908 11.9241 16.5908 14.0241V21.0125H21.0125L20.9541 12.9975L20.9425 12.9858Z"
      fill="currentColor"
    />
  </svg>
);

export const Footer = ({ onLinkClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex justify-between items-center mb-2 container mx-auto">
          <Logo width={48} height={48} />
          <div className="flex gap-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.('whatsapp');
              }}
              className="transition-colors p-2"
              style={{ color: 'var(--color-accent-900, #102A63)' }}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.('instagram');
              }}
              className="transition-colors p-2"
              style={{ color: 'var(--color-accent-900, #102A63)' }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.('linkedin');
              }}
              className="transition-colors p-2"
              style={{ color: 'var(--color-accent-900, #102A63)' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-dashed border-neutral-700 mb-2 container mx-auto"></div>

        {/* Bottom Section */}
        <div>
          <div className="flex justify-between items-center gap-4 mb-8 container mx-auto">
            <Text variant="label5" as="p" className="text-neutral-700">
              All Rights Reserved © SopranoAI {currentYear}
            </Text>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick?.('privacy');
                }}
                className="transition-colors"
                style={{ color: 'var(--color-accent-900, #102A63)' }}
              >
                <Text variant="label5" as="span">
                  Privacy Policy
                </Text>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick?.('cookie');
                }}
                className="transition-colors"
                style={{ color: 'var(--color-accent-900, #102A63)' }}
              >
                <Text variant="label5" as="span">
                  Cookie Policy
                </Text>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick?.('terms');
                }}
                className="transition-colors"
                style={{ color: 'var(--color-accent-900, #102A63)' }}
              >
                <Text variant="label5" as="span">
                  Terms of Use
                </Text>
              </a>
            </div>
          </div>

          {/* Large SopranoAI Image */}
          <div className="text-center">
            <img
              src={typeof sopranoAIImage === 'string' ? sopranoAIImage : sopranoAIImage.src}
              alt="SopranoAI"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

