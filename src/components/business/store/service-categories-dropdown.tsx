import React, { useState } from 'react';

interface Category {
    id: number;
    name: string;
    description: string;
}

interface SubCategory {
    id: number;
    name: string;
    description: string;
}

interface ServiceCategoriesProps {
    categories: Category[];
    sub_categories: SubCategory[];
}

interface ServiceCategoriesDropdownProps {
    data: ServiceCategoriesProps;
}

const ServiceCategoriesDropdown: React.FC<ServiceCategoriesDropdownProps> = ({ data }) => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isSubCategoriesOpen, setIsSubCategoriesOpen] = useState(false);

    const toggleCategories = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
    };

    const toggleSubCategories = () => {
        setIsSubCategoriesOpen(!isSubCategoriesOpen);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
            {/* Categories Dropdown */}
            <div className="relative w-full md:w-1/4">
                <button
                    className="w-full bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center"
                    onClick={toggleCategories}
                >
                    <h2 className="text-md md:text-lg font-semibold md:font-bold">Categories</h2>
                    <span>{isCategoriesOpen ? '▲' : '▼'}</span>
                </button>
                {isCategoriesOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-auto">
                        <ul className="list-disc pl-6 p-4">
                            {data.categories.map((category) => (
                                <li key={category.id} className="mb-2">
                                    <h3 className="text-md font-semibold">{category.name}</h3>
                                    <p className="text-gray-600">{category.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Subcategories Dropdown */}
            <div className="relative w-full md:w-1/4">
                <button
                    className="w-full bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center"
                    onClick={toggleSubCategories}
                >
                    <h2 className="text-md md:text-lg font-semibold md:font-bold">Sub-categories</h2>
                    <span>{isSubCategoriesOpen ? '▲' : '▼'}</span>
                </button>
                {isSubCategoriesOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-auto">
                        <ul className="list-disc pl-6 p-4">
                            {data.sub_categories.map((sub_category) => (
                                <li key={sub_category.id} className="mb-2">
                                    <h3 className="text-md font-semibold">{sub_category.name}</h3>
                                    <p className="text-gray-600">{sub_category.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCategoriesDropdown;
