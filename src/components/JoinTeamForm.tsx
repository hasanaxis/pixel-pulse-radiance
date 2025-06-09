
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import RoleSelection from './form-steps/RoleSelection';
import ExperienceDetails from './form-steps/ExperienceDetails';
import PersonalDetails from './form-steps/PersonalDetails';
import ProgressIndicator from './form-components/ProgressIndicator';
import LoadingOverlay from './form-components/LoadingOverlay';
import { useFormState } from '@/hooks/useFormState';
import { useFormSubmission } from '@/hooks/useFormSubmission';

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
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
  } = useFormState();

  const {
    isSubmitting,
    uploadProgress,
    submitApplication,
  } = useFormSubmission();

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    const success = await submitApplication(formData);
    if (success) {
      handleClose();
    }
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
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="w-[calc(100vw-2rem)] max-w-2xl h-[calc(100vh-2rem)] sm:h-auto sm:max-h-[90vh] overflow-hidden sm:overflow-y-auto mx-auto my-4 sm:my-0"
        style={{ borderRadius: '0.5rem' }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-axis-purple font-deuterium-variable">
            Join Our Team
          </DialogTitle>
        </DialogHeader>
        
        <ProgressIndicator currentStep={currentStep} totalSteps={3} />
        
        <div className="overflow-y-auto flex-1 sm:overflow-visible">
          {renderStep()}
        </div>

        <LoadingOverlay 
          isVisible={isSubmitting} 
          message={uploadProgress || 'Submitting application...'} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default JoinTeamForm;
