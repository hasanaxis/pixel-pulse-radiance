
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import RoleSelection from './form-steps/RoleSelection';
import ExperienceDetails from './form-steps/ExperienceDetails';
import PersonalDetails from './form-steps/PersonalDetails';

export type Role = 'Administrative' | 'Sonographer' | 'Radiographer';

export interface FormData {
  role: Role | null;
  experience: string;
  qualifications: string;
  resume: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface JoinTeamFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinTeamForm = ({ isOpen, onClose }: JoinTeamFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    role: null,
    experience: '',
    qualifications: '',
    resume: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      role: null,
      experience: '',
      qualifications: '',
      resume: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RoleSelection
            selectedRole={formData.role}
            onRoleSelect={(role) => updateFormData({ role })}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ExperienceDetails
            experience={formData.experience}
            qualifications={formData.qualifications}
            resume={formData.resume}
            onUpdate={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <PersonalDetails
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            phone={formData.phone}
            onUpdate={updateFormData}
            onPrev={prevStep}
            onSubmit={() => {
              console.log('Form submitted:', formData);
              handleClose();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 sm:w-full sm:mx-auto sm:my-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-axis-purple font-deuterium-variable">
            Join Our Team
          </DialogTitle>
        </DialogHeader>
        
       {/* Progress indicator */}
<div className="flex items-center justify-center space-x-4 mb-6">
  {[1, 2, 3].map((step) => (
    <div key={step} className="flex items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          step <= currentStep
            ? 'bg-axis-purple text-white'
            : 'bg-gray-200 text-gray-600'
        }`}
      >
        {step}
      </div>
      {step < 3 && (
        <div
          className={`w-12 h-1 mx-2 ${
            step < currentStep ? 'bg-axis-purple' : 'bg-gray-200'
          }`}
        />
      )}
    </div>
  ))}
</div>

        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeamForm;
