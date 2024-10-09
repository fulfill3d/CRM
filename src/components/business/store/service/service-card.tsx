import React from "react";
import {Service} from "@/models/business/models";
import CategoryAccordion from "@/components/business/store/service/category-accordion";

const ServiceCard: React.FC<{ service: Service, onDelete: () => void, onEdit: () => void }> = ({ service, onDelete, onEdit }) => {
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

            {/* Categories Accordion */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
                <ul className="mt-2 space-y-4">
                    {service.categories.map((category) => (
                        <CategoryAccordion key={category.id} category={category} />
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
                {/* Edit Button */}
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    onClick={onEdit}
                >
                    Edit
                </button>

                {/* Delete Button */}
                <button
                    onClick={onDelete} // Trigger delete confirmation dialog
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
