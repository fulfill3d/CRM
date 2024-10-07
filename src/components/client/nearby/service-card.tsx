import React from 'react';
import {Service} from "@/models/business/models";

interface ServiceProps {
    service: Service;
    onClick: () => void; // Add onClick prop
}

const ServiceCard: React.FC<ServiceProps> = ({ service, onClick }) => {
    return (
        <div
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral hover:bg-gray-50 active:bg-gray-200 transition-all"
            onClick={onClick} // Attach onClick event
        >
            {/* Service Info */}
            <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-gray-800">${service.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500">{service.duration} mins</span>
            </div>
        </div>
    );
};

export default ServiceCard;
