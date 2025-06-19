'use client';

import { useEffect, useState } from 'react';

export function useIOS() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      // Check for iOS user agent or Mac with touch support
      const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      setIsIOS(isAppleDevice);
    }
  }, []);

  return isIOS;
}