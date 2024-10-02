import React, {useEffect, useState} from 'react';
import { Category, SubCategory, Service } from "@/models/business/models";
import { serviceCategories } from "@/mock/business/mock-data"; // Assuming you have serviceCategories available

interface AddServiceDialogProps {
    isOpen: boolean;
    onAdd: (newService: Omit<Service, 'id'>) => void;
    onCancel: () => void;
    initialValues?: Service; // Optional prop to prefill values for editing
    isEditMode?: boolean; // Optional prop to indicate if it's an edit action
}

const AddServiceDialog: React.FC<AddServiceDialogProps> = ({ isOpen, onAdd, onCancel, initialValues, isEditMode }) => {
    const emptyState = new Service({
        name: '',
        description: '',
        duration: '',
        price: ''
    });
    const [formData, setFormData] = useState(emptyState);
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>([]);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] = useState(false);
    // Populate the form with initial values when editing
    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    // Handle input changes for text fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle category selection
    const handleCategoryChange = (id: number) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
        );
    };

    // Handle subcategory selection
    const handleSubCategoryChange = (id: number) => {
        setSelectedSubCategories((prev) =>
            prev.includes(id) ? prev.filter((subId) => subId !== id) : [...prev, id]
        );
    };

    // Handle form submission
    const handleAddService = () => {
        const { name, description, duration, price } = formData;
        if (name && description && duration && price && selectedCategories.length > 0) {
            const newService: Omit<Service, 'id'> = {
                name,
                description,
                duration: duration,
                price: price,
                categories: selectedCategories.map(
                    (catId) =>
                        new Category({
                            id: catId,
                            name: serviceCategories.categories.find((cat) => cat.id === catId)?.name || '',
                            description: serviceCategories.categories.find((cat) => cat.id === catId)?.description || '',
                            sub_categories: selectedSubCategories.map((subId) =>
                                new SubCategory({
                                    id: subId,
                                    name: serviceCategories.sub_categories.find((sub) => sub.id === subId)?.name || '',
                                    description: serviceCategories.sub_categories.find((sub) => sub.id === subId)?.description || ''
                                })
                            )
                        })
                )
            };
            onAdd(newService);
            setFormData(emptyState);
        }
    };

    const handleCancelClick = () => {
        onCancel();
        setFormData(emptyState);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-xl font-semibold mb-4">Add New Service</h2>
                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Service Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none" // Disable resizing
                            rows={3} // Fixed size for 3 rows
                        />
                    </div>

                    {/* Price and Duration in Horizontal Alignment */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
                            <input
                                type="number"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                        <button
                            type="button"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-left focus:outline-none"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                        >
                            Select Categories
                        </button>
                        {isCategoryDropdownOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                                {serviceCategories.categories.map((category) => (
                                    <div key={category.id} className="flex items-center p-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category.id)}
                                            onChange={() => handleCategoryChange(category.id)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label className="ml-2 text-gray-700">{category.name}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Subcategory Dropdown */}
                    <div className="relative">
                        <button
                            type="button"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-left focus:outline-none"
                            onClick={() => setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen)}
                        >
                            Select Subcategories
                        </button>
                        {isSubCategoryDropdownOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                                {serviceCategories.sub_categories.map((subCategory) => (
                                    <div key={subCategory.id} className="flex items-center p-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubCategories.includes(subCategory.id)}
                                            onChange={() => handleSubCategoryChange(subCategory.id)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label className="ml-2 text-gray-700">{subCategory.name}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </form>
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={handleAddService}
                    >
                        {isEditMode ? 'Update Service' : 'Add Service'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceDialog;
