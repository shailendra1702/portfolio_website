import React from 'react';
import PropTypes from 'prop-types';
import unnamed from "../assets/unnamed.jpg";

function Title(props) {
    // const name = "Shailendra kumar"; //simple javascript
    // const leadText = "I am a freelancer from India";
    const {name, leadText} = props;
    return (
        <div className="container">
            <div className="row text-center align-items-center my-5 py-5">
                <div className="col-12 col-md-6">
                    <img className="img-fluid rounded-circle w-75 " src={unnamed} alt="Shailendra-kumar" />
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{ fontSize: "50px" }}>
                        HI, I am <span className="text-info">{name}</span>
                    </div>
                    <h4 className="font-weight-light">
                        {leadText}
                    </h4>
                </div>
            </div>
        </div>

    );
}

Title.defaultProps = {
    name: "Shailendra K.",
    leadText: "I am a developer",
};

Title.propTypes = {
    name: PropTypes.string.isRequired 
};

export default Title;