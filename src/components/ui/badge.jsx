import React from "react";

export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={
        "inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 " + className
      }
      {...props}
    >
      {children}
    </span>
  );
} 