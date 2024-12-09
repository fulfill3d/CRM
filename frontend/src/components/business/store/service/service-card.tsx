import React from "react";
import {Service} from "@/models/business/models";

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
                <p className="text-gray-600 truncate">
                    {Array.from(
                        new Set(service.categories.map((cat) => cat.id)) // Create a Set of unique category ids
                    ).map(
                        (uniqueId) => service.categories.find((cat) => cat.id === uniqueId)?.name // Find the category name by unique id
                    ).join(', ')}
                </p>

                <h3 className="text-lg font-semibold text-gray-700">SubCategories</h3>
                <p className="text-gray-600 truncate">
                    {Array.from(
                        new Set(service.sub_categories.map((sub) => sub.id)) // Create a Set of unique sub-category ids
                    ).map(
                        (uniqueId) => service.sub_categories.find((sub) => sub.id === uniqueId)?.name // Find the category name by unique id
                    ).join(', ')}
                </p>
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
