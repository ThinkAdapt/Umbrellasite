"use client";

import React, { useEffect } from 'react';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  bottomSheetText?: string;
}

export const BottomSheet = ({ isOpen, onClose, children, bottomSheetText }: BottomSheetProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000]">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm z-[999]" 
        onClick={onClose} 
      />
      <div className="absolute left-0 right-0 bottom-0 bg-[#fafafae5] rounded-t-3xl border-[0.5px] border-neutral-200 p-4 pb-8 max-h-[85vh] overflow-auto z-[1000]">
        <div className="w-12 h-[5px] rounded-full bg-neutral-200 mx-auto my-2 mb-3" />
        {bottomSheetText && <p>{bottomSheetText}</p>}
        {children}
      </div>
    </div>
  );
};

