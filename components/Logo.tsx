import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <img 
      src="https://violet-fascinating-galliform-784.mypinata.cloud/ipfs/bafybeihtcjo2wenu62uxoeb4nphxtk53rivsd3go2npouyjhjmziqpeq4a" 
      alt="Ticketor Logo" 
      className={`object-contain ${className}`}
    />
  );
};