import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../api';
import EmployeeForm from './EmployeeForm'; 
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        console.log(id);
        const response = await getEmployeeById(id);
        setInitialData(response);
      } catch (error) {
        console.error('Failed to load employee details:', error);
        setError('Failed to load employee details');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleEditEmployee = async (employeeData) => {
    await updateEmployee(id, {
      title: 'Employee',
      ...employeeData,
    });
    toast('Employee updated')
    navigate('/');
  };

  if (loading) return <Spinner/>;
  if (error) return <p>{error}</p>;

  return (
    <EmployeeForm initialData={initialData || {}} onSubmit={handleEditEmployee} buttonText="Change" />
  );
};

export default EditEmployee;
