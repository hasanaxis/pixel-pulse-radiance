
import { useState } from 'react';
import { FormData, Role } from '@/components/JoinTeamForm';

const initialFormData: FormData = {
  role: null,
  experience: '',
  qualifications: '',
  resume: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export const useFormState = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

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

  const resetForm = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
  };

  return {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
  };
};
