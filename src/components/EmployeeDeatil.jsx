import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEmployeeById } from '../api';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response);
      } catch (error) {
        console.error('Failed to load employee details:', error);
        setError('Failed to load employee details');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <div className='loading text-center align-item-center'><div className="spinner-border text-warning" role="status">
  </div></div>;
  if (error) return <p>{error}</p>;

  return (


<div className="container container1 p-5 rounded background-white ">
    <h1 className="fs-1 fw-bold text-left mb-4"><span>Employee Details </span></h1>

 
      <div className="row mb-3 ">
        <div className="col-md-6 themed-grid-col f-bold fs-4">Name</div>
        <div className="col-md-6 themed-grid-col  fw-normal fs-4">{employee.Name}</div>
      </div>
      <div className="row mb-3 ">
        <div className="col-md-6 themed-grid-col f-bold fs-4">Employee ID</div>
        <div className="col-md-6 themed-grid-col  fw-normal fs-4">{employee._id}</div>
      </div>
      <div className="row mb-3 ">
        <div className="col-md-6 themed-grid-col f-bold fs-4">Address</div>
        <div className="col-md-6 themed-grid-col fw-normal fs-4">
          {employee.address.lineOne ? employee.address.lineOne : "Not provided"}
          {employee.address.cityCountry && (
            <>
              <br />
              {employee.address.cityCountry + " "}
            </>
          )}
          {employee.address.country && (
            <>
              <br />
              {employee.address.country + " "}
            </>
          )}
          {employee.address.zip && employee.address.zip}
        </div>

      </div>
      {console.log(employee.Contact)}
      <div className="row mb-3 ">
        <div className="col-md-6 themed-grid-col f-bold fs-4">Gmail</div>
        <div className="col-md-6 themed-grid-col  fw-normal fs-4">{employee.Contact.email ? employee.Contact.email : "Not provided"}</div>
      </div>
      <div className="row mb-3 ">
        
        <div className="col-md-6 themed-grid-col f-bold fs-4">Phone Number</div>
        <div className="col-md-6 themed-grid-col  fw-normal fs-4">{employee.Contact.phone ? employee.Contact.phone : "Not provided"}</div>
      </div>
        <Link className="d-grid gap-2 noline" to={`/employee/${id}/edit`}><button className="btn btn-warning mt-3" type="submit" >Edit</button></Link>


    </div>


    
  );
};

export default EmployeeDetail;
