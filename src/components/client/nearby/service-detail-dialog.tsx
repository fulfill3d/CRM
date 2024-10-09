import React from 'react';
import dynamic from 'next/dynamic';
import { ServiceDetail } from "@/models/client/models";
import {useClientService} from "@/hooks/client/use-client-service";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

const MapView = dynamic(() => import('@/components/common/map-view'), { ssr: false });

interface ServiceDetailDialogProps {
    isOpen: boolean;
    serviceId: number | null;
    onClose: () => void;
    onBook: () => void; // New prop to handle booking
}

const ServiceDetailDialog: React.FC<ServiceDetailDialogProps> = ({ isOpen, serviceId, onClose, onBook }) => {
    const {serviceDetail, loading, error} = useClientService(serviceId);

    if (!isOpen || !serviceDetail) return null;

    if (loading) {return (<Loading/>);}

    if (error) {return (<ErrorPage error={new Error(error)} reset={() => window.location.reload()}/>);}

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] p-8 space-y-6 relative">

                {/* Map and Store Info */}
                <div className="space-y-4">
                    <MapView latitude={serviceDetail.location_lat} longitude={serviceDetail.location_lon} />
                    <div className="text-lg font-semibold text-gray-900">{serviceDetail.store_name}</div>
                    <p className="text-gray-500">{serviceDetail.store_description}</p>
                    <div className="text-gray-700 font-medium">
                        {serviceDetail.address_street1}, {serviceDetail.address_city}, {serviceDetail.address_state}, {serviceDetail.address_zip_code}, {serviceDetail.address_country}
                    </div>
                </div>

                {/* Scrollable Service Information */}
                <div className="overflow-y-auto max-h-36 space-y-6 border-t border-gray-200 pt-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">{serviceDetail.service_name}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">{serviceDetail.service_description}</p>
                    <div className="text-gray-800 text-base font-medium">
                        <span className="font-semibold">Duration:</span> {serviceDetail.service_duration} mins
                    </div>
                    <div className="text-gray-800 text-base font-medium">
                        <span className="font-semibold">Price:</span> ${serviceDetail.service_price.toFixed(2)}
                    </div>

                    {/* Employees List */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-700">Employees</h3>
                        <ul className="list-none space-y-2 mt-2">
                            {serviceDetail.store_employees.map(employee => (
                                <li key={employee.employee_id} className="text-gray-800 font-medium py-1 border-b last:border-b-0">
                                    {employee.employee_nick_name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    {/* Close Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>

                    {/* Book Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
                            onClick={onBook} // Handle book click
                        >
                            Book
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailDialog;
