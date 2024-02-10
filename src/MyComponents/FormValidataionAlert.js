import React, { Fragment } from 'react';

const FormValidationAlert = ({ info, gradient }) => {
    const infoStyle = {
        padding: "10px",
        borderRadius: '5px',
        background: gradient || 'linear-gradient(to right, #ffcc00, #ff6699)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        textAlign: "center",
        cursor: 'default',
        fontSize: "16px",
        fontFamily: 'Montserrat',
    };

    return (
        <Fragment>

        <div className='text-white' style={infoStyle}>
            {info}
        </div>
        </Fragment>
    );
};

export default FormValidationAlert;
