
import React from 'react';
import { Button } from './ui/button';
import { Download, ExternalLink, Eye } from 'lucide-react';

interface ResumeViewerProps {
  resumeUrl: string;
  fileName: string;
  className?: string;
}

const ResumeViewer = ({ resumeUrl, fileName, className = '' }: ResumeViewerProps) => {
  const handleView = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        onClick={handleView}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Eye className="h-4 w-4" />
        View
      </Button>
      <Button
        onClick={handleDownload}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default ResumeViewer;
