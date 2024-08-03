import React from "react";

const Spinner = ({ error }) => {
    return (<>
        <div className=' text-center  position-absolute top-50 start-50 '><div className="spinner-border text-warning" role="status"></div></div>
        <div className="loading position-absolute  start-50"> {error}</div>
    </>)
}

export default Spinner
