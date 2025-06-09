
import React, { useState } from 'react';
import EmailSignup from './EmailSignup';
import { Button } from './ui/button';
import JoinTeamForm from './JoinTeamForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div 
      className="min-h-screen bg-white font-deuterium-variable overflow-x-hidden"
      style={{
        background: `
          radial-gradient(circle at 75% 65%, 
            rgba(233, 30, 99, 0.5) 0%, 
            rgba(218, 144, 199, 0.3) 25%, 
            rgba(199, 87, 171, 0.2) 50%, 
            transparent 70%
          ),
          white
        `,
        '@media (min-width: 1024px)': {
          background: `
            radial-gradient(circle at 75% 50%, 
              rgba(233, 30, 99, 0.5) 0%, 
              rgba(218, 144, 199, 0.3) 25%, 
              rgba(199, 87, 171, 0.2) 50%, 
              transparent 70%
            ),
            white
          `
        }
      }}
    >
      {/* Header */}
      <header className="pt-4 sm:pt-8 px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <img 
            src="/lovable-uploads/8a1054ae-cb81-4180-bb22-d9ed35f2599a.png" 
            alt="Axis Imaging" 
            className="h-8 sm:h-12"
          />
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-axis-purple hover:bg-axis-purple-dark text-white font-deuterium-variable text-sm sm:text-base px-3 sm:px-4 py-2"
          >
            Join our team
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              {/* Coming Soon Pill */}
              <div className="inline-flex">
                <span className="px-4 sm:px-6 py-2 bg-white border border-axis-purple text-axis-purple rounded-full text-sm font-medium font-deuterium-variable">
                  coming soon
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-medium leading-tight font-deuterium-variable text-[2.25rem] lg:text-[3.75rem]" style={{color: '#3C4247'}}>
                  Bringing world class medical imaging to{' '}
                  <span className="text-axis-purple">Mickleham's</span>{' '}
                  doorsteps
                </h1>
              </div>

              {/* Subtext and Email Signup */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-600 font-deuterium-variable">
                  Be the first to know when we are open
                </p>
                <div className="w-full max-w-md">
                  <EmailSignup />
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative order-2 lg:order-2">
              {/* Images Grid */}
              <div className="relative grid grid-cols-2 gap-2 sm:gap-4 h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] z-10">
                {/* Left Column - Two stacked images */}
                <div className="space-y-2 sm:space-y-4 flex flex-col h-full lg:justify-center">
                  <div className="flex-1 lg:h-[40%] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5002d0a4-7947-4e58-a0af-bbe2ae2e5de1.png"
                      alt="Medical professional with patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 lg:h-[40%] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5d65367b-6f40-4eee-8a33-fdd8d36fa22c.png"
                      alt="Medical imaging procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column - One large image */}
                <div className="flex items-stretch lg:items-center lg:justify-center h-full">
                  <div className="w-full lg:h-[70%] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/05c74ef0-abd6-40fc-9f5c-ec3cdf5b0302.png"
                      alt="Advanced medical imaging technology"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <JoinTeamForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default HeroSection;
