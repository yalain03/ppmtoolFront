import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CreateProjectButton = () => {
    return(
        <React.Fragment>
            <Link to="/addProject" className="btn btn-lg btn-info">
                Create a Project
            </Link>
        </React.Fragment>
    );
}

export default CreateProjectButton;