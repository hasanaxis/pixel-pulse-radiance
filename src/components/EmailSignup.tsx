
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For now, we'll just show a success message
      // This will need to be connected to Supabase later
      console.log('Email submitted:', email);
      
      toast({
        title: "Success!",
        description: "You'll be the first to know when we open.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 max-w-md w-full">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 w-full sm:rounded-r-none sm:border-r-0 focus:ring-0 focus:border-axis-purple font-deuterium-variable"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 px-6 w-full sm:w-auto sm:rounded-l-none bg-[#262262] hover:bg-[#1e1a4f] text-white flex items-center justify-center gap-2 font-deuterium-variable"
      >
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default EmailSignup;
