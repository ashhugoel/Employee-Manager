import React from 'react';
import EmployeeCardContent from './EmployeeCardContent'; 
import './Card.css'; 

const EmployeeCard = ({ employees, onDelete }) => {
    return (
        <>
   
            <div className="container container1 p-5 rounded background-white ">
            <h1 className='fs-1 fw-bold text-left mb-4'>Employee List</h1>
                <div className="row border-bottom  fw-bold text-black-50 py-2 border-light">
                    <div className="col-2">Name</div>
                    <div className="col-4">Id</div>
                    <div className="col-3">Email</div>
                    <div className="col-3">Action
                    </div></div>
                {employees.map((employee) => {
                    return <EmployeeCardContent
                        key={employee._id}
                        name={employee.Name}
                        id={employee._id}
                        address={employee.address}
                        contact={employee.Contact}
                        onDelete={onDelete}

                    />
                })}

            
            </div></>
    );
};

export default EmployeeCard;
