import React, { useState, useEffect } from 'react';
import Toast from "@/components/common/toast";
import {Employee} from "@/models/business/models";
import {useToast} from "@/hooks/common/use-toast";

interface AddEmployeeDialogProps {
    isOpen: boolean;
    onAdd: (employee: Employee) => void;
    onCancel: () => void;
    initialValues?: Employee; // Optional prop to prefill values for editing
    isEditMode?: boolean; // Optional prop to indicate if it's an edit action
}

const emptyState = new Employee(
    null,
    '',
    '',
    '',
    '',
    '',
    null,
    null
);

const formFields = [
    { label: 'Nick Name', name: 'nick_name', type: 'text' },
    { label: 'First Name', name: 'first_name', type: 'text' },
    { label: 'Last Name', name: 'last_name', type: 'text' },
    { label: 'Email', name: 'e_mail', type: 'email' },
    { label: 'Phone', name: 'phone', type: 'tel' }
]

const AddEmployeeDialog: React.FC<AddEmployeeDialogProps> = (props) => {
    const [employee, setEmployee] = useState<Employee>(emptyState);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();

    // Populate the form with initial values when editing
    useEffect(() => {
        if (props.initialValues) {
            setEmployee(props.initialValues);
        }
    }, [props.initialValues]);

    // Generic handler for all input fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Create a new Employee instance with updated fields
        setEmployee(prevState => new Employee(
            prevState.id,
            name === 'nick_name' ? value : prevState.nick_name,
            name === 'first_name' ? value : prevState.first_name,
            name === 'last_name' ? value : prevState.last_name,
            name === 'e_mail' ? value : prevState.e_mail,
            name === 'phone' ? value : prevState.phone,
            prevState.created_at,
            prevState.updated_at
        ));
    };

    // Handle form submission
    const handleAddEmployee = () => {
        const err = employee.validate()
        if (err.length == 0) {
            props.onAdd(employee);
        }
        else {
            showToast(err.join(' '), 'error');
        }
    };

    const handleCancelClick = () => {
        props.onCancel();
        setEmployee(emptyState);
    }

    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">
                    {props.isEditMode ? 'Edit Employee' : 'Add New Employee'}
                </h2>
                <form className="space-y-4">
                    {formFields.map((field) => (
                        <div key={field.name}>
                            <label className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={employee[field.name as keyof Employee] as string} // Access formData dynamically
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
                        {props.isEditMode ? 'Update Employee' : 'Add Employee'}
                    </button>
                </div>
            </div>

            {isToastActive && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={toggleToastActive}
                />
            )}
        </div>
    );
};

export default AddEmployeeDialog;
