import React, { useState, useEffect } from 'react';

interface EmployeeProps {
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
}

interface AddEmployeeDialogProps {
    isOpen: boolean;
    onAdd: (employee: EmployeeProps) => void;
    onCancel: () => void;
    initialValues?: EmployeeProps; // Optional prop to prefill values for editing
    isEditMode?: boolean; // Optional prop to indicate if it's an edit action
}

const AddEmployeeDialog: React.FC<AddEmployeeDialogProps> = ({ isOpen, onAdd, onCancel, initialValues, isEditMode }) => {
    const emptyState = {
        nick_name: '',
        first_name: '',
        last_name: '',
        e_mail: '',
        phone: ''
    }
    const [formData, setFormData] = useState<EmployeeProps>(emptyState);

    // Populate the form with initial values when editing
    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleCancelClick = () => {
        onCancel();
        setFormData(emptyState);
    }

    // Generic handler for all input fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleAddEmployee = () => {
        const { nick_name, first_name, last_name, e_mail, phone } = formData;
        if (nick_name && first_name && last_name && e_mail && phone) {
            onAdd(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">
                    {isEditMode ? 'Edit Employee' : 'Add New Employee'}
                </h2>
                <form className="space-y-4">
                    {[
                        { label: 'Nick Name', name: 'nick_name', type: 'text' },
                        { label: 'First Name', name: 'first_name', type: 'text' },
                        { label: 'Last Name', name: 'last_name', type: 'text' },
                        { label: 'Email', name: 'e_mail', type: 'email' },
                        { label: 'Phone', name: 'phone', type: 'tel' }
                    ].map((field) => (
                        <div key={field.name}>
                            <label className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name as keyof EmployeeProps]} // Access formData dynamically
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    ))}
                </form>
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        onClick={handleAddEmployee}
                    >
                        {isEditMode ? 'Update Employee' : 'Add Employee'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeDialog;
