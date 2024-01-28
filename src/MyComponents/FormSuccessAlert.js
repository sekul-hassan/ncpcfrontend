import React from 'react';

function FormSuccessAlert({message}) {
    const infoStyle = {
        padding: "10px",
        borderRadius: '5px',
        background: 'linear-gradient(to right, #4CAF50, #2196F3)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        textAlign: "center",
        cursor: 'default',
        fontSize: "12px",
        fontFamily: 'Montserrat',
    };

    return (
        <div className='text-white' style={infoStyle}>
            {message}
        </div>
    );
};

export default FormSuccessAlert;