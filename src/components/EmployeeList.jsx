import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeCard from './Card';
import { getEmployees, deleteEmployee } from '../api';
import Spinner from './Spinner';

const EmployeeList = ({ error1 }) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees(limit, offset);
        const data = response.data;
        setEmployees(data);
      } catch (error) {
        console.error('Failed to load employees:', error);
        setError('Failed to load employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [limit, offset]);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prevEmployees) =>
        prevEmployees.filter(emp => emp._id !== id)
      );
    } catch (error) {
      console.error('Failed to delete employee:', error);
      setError('Failed to delete employee');
    }
  };



  if (loading) return <Spinner />;
  if (error) return  <Spinner />;
  if (error1) return <p>{error1}</p>;

  return (
    <div>
      {employees.length === 0 ? (
        <p className='loading f-bold'>No  More Employees in the system</p>
      ) : (
        <EmployeeCard
          employees={employees}
          onDelete={handleDelete}
        />
      )}

      {/* Simple Pagination Controls */}
      
      <div className="text-center p-3">
        <button className="btn btn-warning" onClick={() => setOffset(prev => Math.max(prev - limit, 0))}>
          ◀
        </button>
        <span className="mx-1"></span>
        <button className="btn btn-warning" onClick={() => setOffset(prev => prev + limit)}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;
