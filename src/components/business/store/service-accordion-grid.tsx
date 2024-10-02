import React, {useState} from 'react';
import {Category, Service} from "@/models/business/models";
import AddCard from "@/components/common/add-card";

// Assuming you have the Service class and related data structures
interface ServiceListProps {
    services: Service[];
}

const ServiceAccordionGrid: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {services.map((service) => (
                <ServiceAccordion key={service.id} service={service} />
            ))}
            <AddCard/>
        </div>
    );
};

const ServiceAccordion: React.FC<{ service: Service }> = ({ service }) => {
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
        </div>
    );
};

const CategoryAccordion: React.FC<{ category: Category }> = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="border p-3 rounded-lg">
            {/* Category Header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-800 font-medium">{category.name}</p>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-blue-500 text-sm"
                >
                    {isOpen ? 'Hide' : 'Show'}
                </button>
            </div>

            {/* Subcategories */}
            {isOpen && category.sub_categories.length > 0 && (
                <ul className="mt-3 ml-4 space-y-2 list-disc">
                    {category.sub_categories.map((subCategory) => (
                        <li key={subCategory.id} className="text-gray-600">
                            {subCategory.name} - {subCategory.description}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default ServiceAccordionGrid;
