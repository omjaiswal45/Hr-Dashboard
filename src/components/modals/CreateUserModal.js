import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import useAppContext from '../../hooks/useAppContext';

// ✅ Moved outside to avoid recreation on each render
const FormField = ({ label, type = 'text', value, onChange, required = false, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    {children || (
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    )}
  </div>
);

const CreateUserModal = ({ isOpen, onClose }) => {
  const { dispatch } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    department: 'Engineering'
  });

  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomNum = Math.floor(Math.random() * 99) + 1;
    const gender = Math.random() > 0.5 ? 'men' : 'women';
    const randomImage = `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;

    const newUser = {
      ...formData,
      id: Date.now(),
      age: parseInt(formData.age),
      rating: Math.floor(Math.random() * 5) + 1,
      image: randomImage,
      phone: '+1-555-0123',
      address: { city: 'New York', state: 'NY' },
      bio: `New team member joining the ${formData.department} department.`,
      projects: ['Onboarding Project'],
      feedback: []
    };

    dispatch({ type: 'ADD_USER', payload: newUser });
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      department: 'Engineering'
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New User">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          required
        />
        <FormField
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          required
        />
        <FormField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
        <FormField
          label="Age"
          type="number"
          value={formData.age}
          onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
          required
        />
        <FormField label="Department">
          <select
            value={formData.department}
            onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </FormField>

        <div className="flex space-x-3 pt-4">
          <Button type="submit" variant="primary" className="flex-1">
            Create User
          </Button>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUserModal;
