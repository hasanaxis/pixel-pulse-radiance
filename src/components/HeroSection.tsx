
import React, { useState } from 'react';
import EmailSignup from './EmailSignup';
import { Button } from './ui/button';
import JoinTeamForm from './JoinTeamForm';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-deuterium-variable">
      {/* Header */}
      <header className="pt-8 px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <img 
            src="/lovable-uploads/8a1054ae-cb81-4180-bb22-d9ed35f2599a.png" 
            alt="Axis Imaging" 
            className="h-12"
          />
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-axis-purple hover:bg-axis-purple-dark text-white font-deuterium-variable"
          >
            Join our team
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 lg:px-16 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Coming Soon Pill */}
              <div className="inline-flex">
                <span className="px-6 py-2 bg-white border border-axis-purple text-axis-purple rounded-full text-sm font-medium font-deuterium-variable">
                  coming soon
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight font-deuterium-variable" style={{color: '#3C4247'}}>
                  Bringing world class medical imaging to{' '}
                  <span className="text-axis-purple">Mickleham's</span>{' '}
                  doorsteps
                </h1>
              </div>

              {/* Subtext and Email Signup */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 font-deuterium-variable">
                  Be the first to know when we are open
                </p>
                <EmailSignup />
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              {/* Enhanced Radial Gradient Background */}
              <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16 bg-gradient-radial from-[#E91E63]/60 via-[#DA90C7]/40 via-[#C757AB]/25 to-transparent rounded-full blur-[80px] sm:blur-[100px] scale-125 sm:scale-150"></div>
              
              {/* Responsive Images Grid */}
              <div className="relative z-10">
                {/* Mobile Layout - Single Column Stack */}
                <div className="grid grid-cols-1 gap-4 sm:hidden">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5002d0a4-7947-4e58-a0af-bbe2ae2e5de1.png"
                      alt="Medical professional with patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/05c74ef0-abd6-40fc-9f5c-ec3cdf5b0302.png"
                      alt="Advanced medical imaging technology"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/5d65367b-6f40-4eee-8a33-fdd8d36fa22c.png"
                      alt="Medical imaging procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Tablet and Desktop Layout */}
                <div className="hidden sm:grid grid-cols-2 gap-4 h-[500px] md:h-[600px] items-center">
                  {/* Left Column - Two stacked images */}
                  <div className="space-y-4 flex flex-col justify-center h-full">
                    <div className="flex-1 max-h-[45%] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/lovable-uploads/5002d0a4-7947-4e58-a0af-bbe2ae2e5de1.png"
                        alt="Medical professional with patient"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 max-h-[45%] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/lovable-uploads/5d65367b-6f40-4eee-8a33-fdd8d36fa22c.png"
                        alt="Medical imaging procedure"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Column - One large image centered */}
                  <div className="flex items-center justify-center h-full">
                    <div className="h-[65%] w-full rounded-2xl overflow-hidden shadow-lg">
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
      </div>

      <JoinTeamForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default HeroSection;
