import React from "react";

export function NavigationMenu({ children, className = "" }) {
  return <nav className={className}>{children}</nav>;
}

export function NavigationMenuList({ children, className = "" }) {
  return <ul className={className}>{children}</ul>;
}

export function NavigationMenuItem({ children, className = "" }) {
  return <li className={className}>{children}</li>;
}

export function NavigationMenuLink({ href, children, className = "", ...props }) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
} 