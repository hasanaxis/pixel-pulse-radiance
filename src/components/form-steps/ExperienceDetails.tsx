
import React from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormData } from '../JoinTeamForm';

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
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onUpdate({ resume: file });
  };

  const isValid = experience.trim() && qualifications.trim() && resume;

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
            Upload Resume
          </Label>
          <div className="mt-2">
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="font-deuterium-variable"
            />
            {resume && (
              <p className="text-sm text-gray-600 mt-1 font-deuterium-variable">
                Selected: {resume.name}
              </p>
            )}
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
