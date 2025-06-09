
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormData } from '../JoinTeamForm';

interface PersonalDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  onUpdate: (updates: Partial<FormData>) => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const PersonalDetails = ({
  firstName,
  lastName,
  email,
  phone,
  onUpdate,
  onPrev,
  onSubmit,
}: PersonalDetailsProps) => {
  const isValid = firstName.trim() && lastName.trim() && email.trim() && phone.trim();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-medium text-gray-900 font-deuterium-variable mb-2">
          Your contact details
        </h3>
        <p className="text-gray-600 font-deuterium-variable">
          We'll use these details to get in touch with you
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="font-deuterium-variable">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => onUpdate({ firstName: e.target.value })}
              className="mt-2 font-deuterium-variable"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="font-deuterium-variable">
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => onUpdate({ lastName: e.target.value })}
              className="mt-2 font-deuterium-variable"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="font-deuterium-variable">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="mt-2 font-deuterium-variable"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="font-deuterium-variable">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className="mt-2 font-deuterium-variable"
          />
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
          onClick={onSubmit}
          disabled={!isValid}
          className="bg-axis-purple hover:bg-axis-purple-dark text-white font-deuterium-variable"
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
