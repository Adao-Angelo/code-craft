import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  leftElement?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  leftElement,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {leftElement && <span className="button__right">{leftElement}</span>}

      <span className="button__content">{children}</span>

      <span className="button__overlay" />
    </button>
  );
}
