import React from 'react';
import {Service} from "@/models/business/models";

interface ServiceProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            {/* Service Info */}
            <div className="border-b pb-3">
                <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-gray-800">
                        ${service.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                        {service.duration} mins
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
