import React, { useState } from "react";
import Toast from "@/components/common/toast";

interface AddStoreDialogProps {
    isOpen: boolean;
    onAdd: (store: { name: string; description: string }) => void;
    onCancel: () => void;
}

const AddStoreDialog: React.FC<AddStoreDialogProps> = ({ isOpen, onAdd, onCancel }) => {
    const [showToast, setShowToast] = useState(false);
    const [storeData, setStoreData] = useState({ name: "", description: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStoreData({
            ...storeData,
            [name]: value
        });
    };

    const handleAddStore = () => {
        if (storeData.name && storeData.description) {
            onAdd(storeData);
        }
        else {
            setShowToast(true);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">Add New Store</h2>
                <form className="space-y-4">
                    {/* Store Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store Name</label>
                        <input
                            type="text"
                            name="name"
                            value={storeData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Store Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Store Description</label>
                        <textarea
                            name="description"
                            value={storeData.description}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none"
                            rows={3} // Fixed size for 3 rows
                        />
                    </div>
                </form>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handleAddStore}
                    >
                        Add Store
                    </button>
                </div>
            </div>

            {showToast && (
                <Toast
                    message="Input values cannot be empty!"
                    type="error"
                    duration={3000}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
};

export default AddStoreDialog;
