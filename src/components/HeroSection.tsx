
import React, { useState } from 'react';
import EmailSignup from './EmailSignup';
import { Button } from './ui/button';
import JoinTeamForm from './JoinTeamForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-deuterium-variable overflow-x-hidden">
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
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight font-deuterium-variable" style={{color: '#3C4247'}}>
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
              {/* Enhanced Radial Gradient Background */}
              <div className="absolute -inset-8 sm:-inset-16 bg-gradient-radial from-[#E91E63]/50 via-[#DA90C7]/30 via-[#C757AB]/20 to-transparent rounded-full blur-[60px] sm:blur-[100px] scale-150"></div>
              
              {/* Images Grid */}
              <div className="relative grid grid-cols-2 gap-2 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] z-10 items-center">
                {/* Left Column - Two stacked images */}
                <div className="space-y-2 sm:space-y-4 flex flex-col justify-center">
                  <div className="h-[35%] sm:h-[40%] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5002d0a4-7947-4e58-a0af-bbe2ae2e5de1.png"
                      alt="Medical professional with patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[35%] sm:h-[40%] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5d65367b-6f40-4eee-8a33-fdd8d36fa22c.png"
                      alt="Medical imaging procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column - One large image - 60% height and vertically centered */}
                <div className="flex items-center h-full">
                  <div className="h-[55%] sm:h-[60%] w-full rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
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
