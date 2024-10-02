import React from 'react';
import {ServiceDetail} from "@/models/client/models";

interface ServiceDetailDialogProps {
    isOpen: boolean;
    serviceDetail: ServiceDetail | null;
    onClose: () => void;
}

const ServiceDetailDialog: React.FC<ServiceDetailDialogProps> = ({ isOpen, serviceDetail, onClose }) => {
    if (!isOpen || !serviceDetail) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-xl font-semibold mb-4">{serviceDetail.service_name}</h2>

                {/* Service Information */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Service Details</h3>
                    <p>{serviceDetail.service_description}</p>
                    <p>Duration: {serviceDetail.service_duration} mins</p>
                    <p>Price: ${serviceDetail.service_price.toFixed(2)}</p>
                </div>

                {/* Store Information */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Store Information</h3>
                    <p>{serviceDetail.store_name}</p>
                    <p>{serviceDetail.store_description}</p>
                    <p>Location: {serviceDetail.address_street1}, {serviceDetail.address_city}, {serviceDetail.address_state}, {serviceDetail.address_zip_code}, {serviceDetail.address_country}</p>
                    <p>Coordinates: {serviceDetail.location_lat}, {serviceDetail.location_lon}</p>
                </div>

                {/* Store Employees */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Employees</h3>
                    <ul>
                        {serviceDetail.store_employees.map(employee => (
                            <li key={employee.employee_id} className="text-gray-700">
                                {employee.employee_nick_name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailDialog;
