import React from "react";

interface LogoProps {
    onClick: () => void; // Define the type of the onClick prop
}

const BusinessLogo: React.FC<LogoProps> = ({ onClick }) => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        {/* Background Shapes */}
        <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" strokeWidth="5" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="black" strokeWidth="5" />
        <circle cx="50" cy="50" r="15" fill="black" />

        {/* Diagonal Text Background */}
        <text
            x="0"
            y="30"
            fontSize="10"
            transform="rotate(45, 10, 60)" // Rotates the text diagonally
            textAnchor="start"
            fill="black"
        >
            BusinessSide
        </text>

        {/* Foreground Intersecting Shapes */}
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#FF7F50" strokeWidth="5" clipPath="url(#business-clip)" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="#FF7F50" strokeWidth="5" clipPath="url(#business-clip)" />
        <circle cx="50" cy="50" r="15" fill="#FF7F50" clipPath="url(#business-clip)" />

        {/* Clipping Path */}
        <clipPath id="business-clip">
            <text
                x="0"
                y="30"
                fontSize="10"
                transform="rotate(45, 10, 60)" // Same transformation as the text
                textAnchor="start"
            >
                BusinessSide
            </text>
        </clipPath>
    </svg>
);

export default BusinessLogo;
