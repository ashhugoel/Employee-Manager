import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { getEmployeeById } from '../api';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
        const response= await getEmployeeById(searchQuery);
        console.log(response);
        navigate(`/employee/${searchQuery}`);
        setSearchQuery('');
    } catch (error) {
      props.onSearchSubmit("record not found");
      navigate(`/`);
    }
  };

  return (
    <header className="navbar-container header p-3 mb-3 border-bottom">
      <div className="container my-2">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <ul className="nav col-12 fw-bold col-lg-auto me-lg-auto mb-2 justify-content-center align-items-center mb-md-0 w-100">
            <form className="search-form px-1 col-12 col-lg-auto  fw-bold mb-lg-0 me-lg-3 w-50" role="search" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="form-control bg-color rounded-pill text-secondary"
                placeholder="Search employee by id"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
            <li><a href="/" className="nav-link px-3 text-white fs-5">Home</a></li>
            <li><a href="/newemp" className="nav-link px-3 text-white fs-5">Create</a></li>
            <li><a href="#" className="nav-link px-3 text-white fs-5">Edit</a></li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
