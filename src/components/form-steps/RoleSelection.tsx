
import React from 'react';
import { Button } from '../ui/button';
import { Role } from '../JoinTeamForm';

interface RoleSelectionProps {
  selectedRole: Role | null;
  onRoleSelect: (role: Role) => void;
  onNext: () => void;
}

const roles: { value: Role; title: string; description: string }[] = [
  {
    value: 'Administrative',
    title: 'Administrative',
    description: 'Support our operations with administrative excellence',
  },
  {
    value: 'Sonographer',
    title: 'Sonographer',
    description: 'Perform ultrasound examinations and patient care',
  },
  {
    value: 'Radiographer',
    title: 'Radiographer',
    description: 'Operate imaging equipment and provide quality diagnostics',
  },
];

const RoleSelection = ({ selectedRole, onRoleSelect, onNext }: RoleSelectionProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-medium text-gray-900 font-deuterium-variable mb-2">
          What role are you applying for?
        </h3>
        <p className="text-gray-600 font-deuterium-variable">
          Select the position that best matches your expertise
        </p>
      </div>

      <div className="grid gap-4">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onRoleSelect(role.value)}
            className={`p-6 border-2 rounded-xl text-left transition-all hover:shadow-md ${
              selectedRole === role.value
                ? 'border-axis-purple bg-axis-purple/5'
                : 'border-gray-200 hover:border-axis-purple/50'
            }`}
          >
            <h4 className="font-medium text-lg font-deuterium-variable mb-2">
              {role.title}
            </h4>
            <p className="text-gray-600 font-deuterium-variable">
              {role.description}
            </p>
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selectedRole}
          className="bg-axis-purple hover:bg-axis-purple-dark text-white font-deuterium-variable"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default RoleSelection;
