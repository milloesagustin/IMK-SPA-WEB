import React from 'react';

interface ImkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  dark?: boolean;
}

export const ImkLogo: React.FC<ImkLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true, // We will keep these props for compatibility even if they aren't strictly used for the image
  dark = false
}) => {
  const sizeMap = {
    sm: { height: 28 },
    md: { height: 48 }, // Slightly larger for better visibility of real logo
    lg: { height: 64 },
    xl: { height: 80 }
  };

  const { height } = sizeMap[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="imk-brand-logo">
      <img
        src="/logos/logo_imk.webp"
        alt="IMK Servicios Industriales"
        style={{ height: `${height}px`, width: 'auto' }}
        className="transition-transform duration-300 object-contain"
      />
    </div>
  );
};
