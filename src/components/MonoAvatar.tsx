import React from 'react';
import { AvatarOwner, AvatarSize } from '@types/index';

interface MonoAvatarProps {
  src: string;
  alt: string;
  owner: AvatarOwner;
  size?: AvatarSize;
  className?: string;
}

export function MonoAvatar({ src, alt, owner, size = 'md', className = '' }: MonoAvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-20 w-20',
    lg: 'h-24 w-24'
  };

  // Apple-style: Clean base with subtle depth
  const baseClasses = 'rounded-full border-2 border-gray-200 shadow-md overflow-hidden transition-all duration-200 ease-out';
  
  // Owner-specific hover colors
  const hoverClass = owner === 'nils'
    ? 'hover:border-nils-blue-500 hover:shadow-lg hover:-translate-y-0.5'
    : 'hover:border-thuan-red-500 hover:shadow-lg hover:-translate-y-0.5';

  return (
    <div className={`group shrink-0 ${baseClasses} ${hoverClass} ${sizeClasses[size]} ${className}`}>
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
}