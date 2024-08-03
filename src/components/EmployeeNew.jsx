import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api';
import EmployeeForm from './EmployeeForm'; 
import { toast } from 'react-toastify';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleAddEmployee = async (employeeData) => {
    console.log('Adding employee:', {
      title: 'Employee',
      ...employeeData,
    });
    const res = await addEmployee({
      title: 'Employee',
      ...employeeData,
    });
    toast(`New Employee added with id:${res.data.id}`);
    navigate('/');
  };

  return <EmployeeForm initialData={{}} onSubmit={handleAddEmployee} buttonText="Add" />;
};

export default AddEmployee;
