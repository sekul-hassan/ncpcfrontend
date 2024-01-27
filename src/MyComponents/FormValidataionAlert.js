import React from 'react';

const FormValidationAlert = ({ info, gradient }) => {
    const infoStyle = {
        padding: "10px",
        borderRadius: '5px',
        background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 1))',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        textAlign: "center",
        cursor: 'default',
        fontSize: "12px",
        fontFamily: 'Montserrat',
    };

    return (
        <div className='text-white' style={infoStyle}>
            {info}
        </div>
    );
};

export default FormValidationAlert;
