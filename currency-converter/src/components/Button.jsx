import React from 'react';

const Button = ({ 
    type = 'button', 
    onClick, 
    disabled = false, 
    className = '', 
    children 
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                relative overflow-hidden w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                hover:from-blue-500 hover:to-indigo-500 font-semibold py-3 px-6 rounded-xl 
                shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]
                transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0.5
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;