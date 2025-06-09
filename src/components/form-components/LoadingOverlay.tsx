
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
  message: string;
}

const LoadingOverlay = ({ isVisible, message }: LoadingOverlayProps) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-white/90 flex items-center justify-center backdrop-blur-sm">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-axis-purple mx-auto mb-2" />
        <div className="text-axis-purple font-deuterium-variable">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
