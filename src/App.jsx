import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDeatil';
import EmployeeNew from './components/EmployeeNew';
import Navbar from './components/Navbar';
import EditEmployee from './components/EditEmployee';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [error, setError] = useState(false);

  const handleSearchSubmit = async (problem) => {
    console.log(problem);
    setError(problem);

  };

  return (
    <Router>
      <Navbar onSearchSubmit={handleSearchSubmit} />

      <Routes>
        <Route path="/" element={<EmployeeList error1={error} />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/newemp" element={<EmployeeNew />} />
        <Route path="/employee/:id/edit" element={<EditEmployee />} />

      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="custom-toast" />
    </Router>
  );
};

export default App;
