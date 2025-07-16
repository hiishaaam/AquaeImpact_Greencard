import React from "react";

export function Separator({ className = "", ...props }) {
  return <hr className={`border-t my-4 ${className}`} {...props} />;
} 