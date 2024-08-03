import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ initialData, onSubmit, buttonText }) => {

  const [name, setName] = useState(initialData.Name || '');
  const [address, setAddress] = useState({
    lineOne: initialData.address?.lineOne || null,
    cityCountry: initialData.address?.cityCountry || null,
    country: initialData.address?.country || null,
    zip: initialData.address?.zip || null,
  });
  const [contact, setContact] = useState({
    phone: initialData.Contact?.phone || null,
    email: initialData.Contact?.email || null,
  });
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit({ Name: name, address, Contact: contact });
    } catch (error) {
      console.error('Failed to submit employee:', error);
      setError('Failed to submit employee');
    }
  };

  return (


    
    <div className='container mb-2  p-5 rounded background-white ' style={{ maxWidth: '500px' }}>
      <h1 className='fs-1 fw-bold text-left mb-4'>{buttonText} Employee</h1>
      <form onSubmit={handleSubmit}>

      <div className="mb-3">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter name"  required />
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input value={address.lineOne} onChange={(e) => setAddress({ ...address, lineOne: e.target.value })} type="text" className="form-control" id="addressLine1" placeholder="Enter address" />
                </div>
                <div className="col">
                    <input   value={address.cityCountry} onChange={(e) => setAddress({ ...address, cityCountry: e.target.value })} type="text" className="form-control" id="cityCountry" placeholder="Enter city" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} type="text" className="form-control" id="country" placeholder="Enter country" />
                </div>
                <div className="col">
                    <input value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} type="text" className="form-control" id="zip" placeholder="Enter zip code" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="col">
                    <input value={contact.email} onChange={(e) =>  setContact({ ...contact, email: e.target.value })} type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
            </div>
            <div className="d-grid gap-2 noline">
            <button type="submit" className="btn btn-warning">{buttonText} Employee</button>
            </div>

      </form>
      {error && <div className='fw-bold pt-3' >{error}</div>}
    </div>
  );
};

export default EmployeeForm;
