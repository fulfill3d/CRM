import React from "react";

interface LogoProps {
    onClick: () => void; // Define the type of the onClick prop
}

const BusinessLogo: React.FC<LogoProps> = ({ onClick }) => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" strokeWidth="5" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="black" strokeWidth="5" />
        <circle cx="50" cy="50" r="15" fill="black" />
    </svg>
);

export default BusinessLogo;
