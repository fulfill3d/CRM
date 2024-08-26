import React from "react";

interface LogoProps {
    onClick: () => void; // Define the type of the onClick prop
}

const ClientLogo: React.FC<LogoProps> = ({ onClick }) => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <circle cx="50" cy="50" r="40" stroke="black" fill="none" strokeWidth="5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="5" />
        <circle cx="30" cy="50" r="10" fill="black" />
        <circle cx="70" cy="50" r="10" fill="black" />
    </svg>
);

export default ClientLogo;
