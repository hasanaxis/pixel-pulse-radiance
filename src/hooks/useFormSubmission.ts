
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { FormData } from '@/components/JoinTeamForm';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const { toast } = useToast();

  const uploadResumeToStorage = async (file: File): Promise<string | null> => {
    try {
      setUploadProgress('Uploading resume...');
      
      // Generate unique filename with timestamp
      const timestamp = Date.now();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${timestamp}_${sanitizedFileName}`;
      
      console.log('Uploading file to resumes bucket:', fileName);
      
      // Upload to the resumes bucket
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Storage upload error:', error);
        throw error;
      }

      console.log('File uploaded successfully:', data);
      
      // Get the public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(fileName);

      console.log('Public URL generated:', urlData.publicUrl);
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading resume:', error);
      throw error;
    }
  };

  const submitApplication = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      let resumeUrl = null;
      
      // Upload resume if provided
      if (formData.resume) {
        console.log('Starting resume upload...');
        resumeUrl = await uploadResumeToStorage(formData.resume);
        console.log('Resume uploaded with URL:', resumeUrl);
      }
      
      setUploadProgress('Saving application...');
      
      // Prepare application data for database insertion
      const applicationData = {
        role: formData.role,
        experience: formData.experience,
        qualifications: formData.qualifications,
        resume_file_name: formData.resume?.name || null,
        resume_file_size: formData.resume?.size || null,
        resume_url: resumeUrl,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      };

      console.log('Submitting application data:', applicationData);

      // Insert the application into the database
      const { error } = await supabase
        .from('team_applications')
        .insert([applicationData]);

      if (error) {
        console.error('Database insertion error:', error);
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      console.log('Application submitted successfully');
      return true;
    } catch (error) {
      console.error('Error submitting application:', error);
      
      // Provide more specific error messages
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error instanceof Error) {
        if (error.message.includes('storage')) {
          errorMessage = "Failed to upload resume. Please check your file and try again.";
        } else if (error.message.includes('database')) {
          errorMessage = "Failed to save application. Please try again.";
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
      setUploadProgress('');
    }
  };

  return {
    isSubmitting,
    uploadProgress,
    submitApplication,
  };
};
