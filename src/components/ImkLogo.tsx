import React from 'react';

interface ImkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'navbar';
  showSubtitle?: boolean;
  dark?: boolean;
}

export const ImkLogo: React.FC<ImkLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true, // Kept for compatibility
  dark = false
}) => {
  const sizeMap = {
    sm: { height: 28 },
    md: { height: 48 },
    lg: { height: 64 },
    xl: { height: 80 },
    '2xl': { height: 96 },
    navbar: { height: 86 }
  };

  const { height } = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="imk-brand-logo">
      <img
        src="/logos/logo_imk.webp"
        alt="IMK Servicios Industriales"
        style={{ height: `${height}px`, width: 'auto' }}
        className="transition-transform duration-300 object-contain max-w-none"
      />
    </div>
  );
};
