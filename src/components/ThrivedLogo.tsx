interface ThrivedLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const ThrivedLogo = ({ className = "", variant = "dark" }: ThrivedLogoProps) => {
  const color = variant === "light" ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))";
  
  return (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* T */}
      <path
        d="M0 4h18v3H11v21H7V7H0V4z"
        fill={color}
        strokeWidth="0"
      />
      {/* H */}
      <path
        d="M22 4h4v10h10V4h4v24h-4V18H26v10h-4V4z"
        fill={color}
      />
      {/* R */}
      <path
        d="M46 4h12c4.4 0 7 2.6 7 6.5 0 3-1.6 5.2-4.2 6.1L66 28h-5l-5-11h-6v11h-4V4zm12 10c2 0 3-1.2 3-3.2 0-2-1-3.3-3-3.3h-8v6.5h8z"
        fill={color}
      />
      {/* I */}
      <path
        d="M70 4h4v24h-4V4z"
        fill={color}
      />
      {/* V */}
      <path
        d="M80 4h4.5l8 18 8-18h4.5l-10.5 24h-4L80 4z"
        fill={color}
      />
      {/* E */}
      <path
        d="M108 4h16v3.5h-12v6h10v3.5h-10v7.5h12V28h-16V4z"
        fill={color}
      />
      {/* D */}
      <path
        d="M128 4h10c7.5 0 12 5 12 12s-4.5 12-12 12h-10V4zm10 20.5c5 0 8-3.5 8-8.5s-3-8.5-8-8.5h-6v17h6z"
        fill={color}
      />
    </svg>
  );
};

export default ThrivedLogo;
