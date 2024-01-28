import React from 'react';

function FormSuccessAlert({info}) {
    const infoStyle = {
        padding: "10px",
        borderRadius: '5px',
        background: 'linear-gradient(to right, #4CAF50, #2196F3)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        textAlign: "center",
        cursor: 'default',
        fontSize: "16px",
        fontFamily: 'Montserrat',
    };

    return (
        <div className='text-white' style={infoStyle}>
            {info}
        </div>
    );
};

export default FormSuccessAlert;