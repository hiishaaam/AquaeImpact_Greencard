import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white shadow rounded p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
