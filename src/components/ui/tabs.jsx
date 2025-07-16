import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [active, setActive] = useState(defaultValue);
  // Pass active and setActive to all children
  return (
    <div className={className}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { active, setActive })
          : child
      )}
    </div>
  );
}

export function TabsList({ children, className = "", active, setActive }) {
  // Pass active and setActive to all children
  return (
    <div className={`w-full h-[70px] rounded-full p-1 bg-[#147966] flex ${className}`}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { active, setActive })
          : child
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, active, setActive, className = "" }) {
  const isActive = active === value;
  return (
    <button
      className={`rounded-full font-semibold text-[20px] flex-1 h-full transition-colors duration-200
        ${isActive ? 'bg-[#147966] text-white' : 'bg-white text-[#147966]'}
        border-none outline-none focus:outline-none
        ${className}`}
      onClick={() => setActive && setActive(value)}
      type="button"
      style={{ boxShadow: 'none' }}
    >
      {children}
    </button>
  );
} 