import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Sheet = ({ children, open, onOpenChange }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, onOpenChange })
      )}
    </>
  );
};

export const SheetTrigger = ({ children, open, onOpenChange, asChild }) => {
  return React.cloneElement(children, {
    onClick: () => onOpenChange(!open),
  });
};

export const SheetContent = ({ children, open, onOpenChange, className = '' }) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => onOpenChange(false)}
      />

      {/* Sheet */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} ${className}`}>
        {children}
      </div>
    </>
  );
};

export const SheetHeader = ({ children, className = '' }) => {
  return <div className={`p-6 border-b ${className}`}>{children}</div>;
};

export const SheetTitle = ({ children, className = '' }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};
