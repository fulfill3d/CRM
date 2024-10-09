import React, {useState} from "react";
import {Category} from "@/models/business/models";

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

export default CategoryAccordion;
