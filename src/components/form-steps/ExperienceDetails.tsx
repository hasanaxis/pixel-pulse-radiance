
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormData } from '../JoinTeamForm';
import { Upload, File, AlertCircle } from 'lucide-react';

interface ExperienceDetailsProps {
  experience: string;
  qualifications: string;
  resume: File | null;
  onUpdate: (updates: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ExperienceDetails = ({
  experience,
  qualifications,
  resume,
  onUpdate,
  onNext,
  onPrev,
}: ExperienceDetailsProps) => {
  const [fileError, setFileError] = useState<string>('');

  const validateFile = (file: File): string => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a PDF, DOC, or DOCX file only.';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB.';
    }

    return '';
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileError('');
    
    if (file) {
      const error = validateFile(file);
      if (error) {
        setFileError(error);
        e.target.value = ''; // Clear the input
        onUpdate({ resume: null });
        return;
      }
    }
    
    onUpdate({ resume: file });
  };

  const isValid = experience.trim() && qualifications.trim() && resume && !fileError;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-medium text-gray-900 font-deuterium-variable mb-2">
          Tell us about your experience
        </h3>
        <p className="text-gray-600 font-deuterium-variable">
          Help us understand your background and qualifications
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="experience" className="font-deuterium-variable">
            Experience & Background
          </Label>
          <Textarea
            id="experience"
            placeholder="Tell us about your relevant work experience, skills, and achievements..."
            value={experience}
            onChange={(e) => onUpdate({ experience: e.target.value })}
            className="mt-2 min-h-[120px] font-deuterium-variable"
          />
        </div>

        <div>
          <Label htmlFor="qualifications" className="font-deuterium-variable">
            Qualifications & Certifications
          </Label>
          <Textarea
            id="qualifications"
            placeholder="List your relevant qualifications, certifications, and education..."
            value={qualifications}
            onChange={(e) => onUpdate({ qualifications: e.target.value })}
            className="mt-2 min-h-[120px] font-deuterium-variable"
          />
        </div>

        <div>
          <Label htmlFor="resume" className="font-deuterium-variable">
            Upload Resume *
          </Label>
          <div className="mt-2">
            <div className="relative">
              <Input
                  id="resume"
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={handleFileChange}
  className="h-auto font-deuterium-variable file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-axis-purple file:text-white hover:file:bg-axis-purple-dark"
/>
              <Upload className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            
            {fileError && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span className="font-deuterium-variable">{fileError}</span>
              </div>
            )}
            
            {resume && !fileError && (
              <div className="flex items-center gap-2 mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
                <File className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800 font-deuterium-variable">
                    {resume.name}
                  </p>
                  <p className="text-xs text-green-600 font-deuterium-variable">
                    {formatFileSize(resume.size)}
                  </p>
                </div>
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-1 font-deuterium-variable">
              Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onPrev}
          variant="outline"
          className="font-deuterium-variable"
        >
          Previous
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid}
          className="bg-axis-purple hover:bg-axis-purple-dark text-white font-deuterium-variable"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExperienceDetails;
