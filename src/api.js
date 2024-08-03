import axios from 'axios';


const API_URL = 'https://free-ap-south-1.cosmocloud.io/development/api/employee';


const headers = {
  'projectId': '66aadd15f0b1983e002001dc', //Replace with your key
  'environmentId': '66aadd15f0b1983e002001dd', //Replace with your key
  'Cache-Control': 'no-cache', 
};

// Function to get all employees with limit and offset
export const getEmployees = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Function to get a single employee by ID
export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee ${id}:`, error);
    throw error;
  }
};

// Function to add a new employee
export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee, { headers });
    return response;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

// Function to update an employee
export const updateEmployee = async (id, employee) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, employee, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error updating employee ${id}:`, error);
    throw error;
  }
};

// Function to delete an employee
export const deleteEmployee = async (id) => {
  try {
    const response=await axios.delete(`${API_URL}/${id}`, {
      headers,
      data: {} 
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee ${id}:`, error.response || error);
    throw error;
  }
};