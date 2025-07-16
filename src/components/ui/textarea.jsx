import React from "react";

export function Textarea({ className = "", ...props }) {
  return <textarea className={`border px-3 py-2 rounded ${className}`} {...props} />;
} 