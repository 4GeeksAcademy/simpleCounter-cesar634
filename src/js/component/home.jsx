import React from "react";
import PropTypes from 'prop-types'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({quinto,cuarto,tercero,segundo,primero}) => {
	return (
		<div className="blackZone container">
      <div className="text-center text-light mt-5 bg-black d-flex justify-content-center">
        <div className="m-1 fs-1 fw-bold bg-dark w-25">⏱︎</div>
        <div className="m-1 fs-1 fw-bold bg-dark w-25">{quinto}</div>
        <div className="m-1 fs-1 fw-bold bg-dark w-25">{cuarto}</div>
        <div className="m-1 fs-1 fw-bold bg-dark w-25">{tercero}</div>
        <div className="m-1 fs-1 fw-bold bg-dark w-25">{segundo}</div>
        <div className="m-1 fs-1 fw-bold bg-dark w-25">{primero}</div>
      </div>
    </div>
	);
};

Home.propTypes = {
    quinto: PropTypes.number,
    cuarto: PropTypes.number,
    tercero: PropTypes.number,
    segundo: PropTypes.number,
    primero: PropTypes.number,
};

export default Home;
