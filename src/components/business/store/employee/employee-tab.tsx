import EmployeeCard from "@/components/business/store/employee/employee-card";
import AddCard from "@/components/common/add-card";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import React, { useState } from "react";
import AddEmployeeDialog from "@/components/business/store/employee/add-employee-dialog";
import Toast from "@/components/common/toast";

interface EmployeeProps {
    id: number;
    nick_name: string;
    first_name: string;
    last_name: string;
    e_mail: string;
    phone: string;
}

interface EmployeeCardProps {
    isProtected: boolean;
    data: EmployeeProps[];
}

const EmployeeTab: React.FC<EmployeeCardProps> = (props) => {
    const [showDialog, setShowDialog] = useState(false); // Manage dialog visibility
    const [showToast, setShowToast] = useState(false);
    const [targetEmployeeId, setTargetEmployeeId] = useState<number | null>(null); // Track employee to delete
    const [showAddDialog, setShowAddDialog] = useState(false); // Manage add dialog visibility
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeProps | null>(null); // Track employee to edit
    const [isEditMode, setIsEditMode] = useState(false); // Manage dialog mode (add or edit)

    // Handle adding a new employee
    const handleAddEditEmployee = () => {
        setShowAddDialog(false);
        if (props.isProtected){
            // Logic in backend
            setSelectedEmployee(null); // Reset selected employee after adding/editing
            setIsEditMode(false); // Reset mode after completion
        }else {
            // Logic in backend
            setSelectedEmployee(null); // Reset selected employee after adding/editing
            setIsEditMode(false); // Reset mode after completion
            setShowToast(true);
        }
    };

    // Show the delete confirmation dialog
    const triggerDelete = (id: number) => {
        setTargetEmployeeId(id); // Set the employee ID to delete
        setShowDialog(true); // Show dialog
    };

    // Handle delete logic after confirmation
    const handleDelete = () => {
        if (props.isProtected){
            setShowDialog(false);
        }else {
            setShowDialog(false);
            setShowToast(true)
        }
    };

    const handleCancel = () => {
        setShowDialog(false); // Close dialog without deleting
        setTargetEmployeeId(null); // Reset the target employee ID
    };

    // Trigger edit dialog with employee data
    const handleEdit = (employee: EmployeeProps) => {
        setSelectedEmployee(employee); // Set the employee to edit
        setIsEditMode(true); // Enable edit mode
        setShowAddDialog(true); // Open the dialog
    };

    return (
        <div className="w-full h-full">
            <text className="container mx-auto text-xl font-semibold">Employees of this store</text>
            <div className="container mx-auto mt-4">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {props.data.map(employee => (
                        <EmployeeCard
                            key={employee.id}
                            {...employee}
                            onDelete={() => triggerDelete(employee.id)} // Trigger
                            onEdit={() => handleEdit(employee)} // Trigger edit dialog
                        />
                    ))}
                    <div className="flex items-center justify-center">
                        <AddCard onClick={() => setShowAddDialog(true)}/>
                    </div>
                </div>
            </div>

            {/* Reusable Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showDialog}
                title="Confirm Deletion"
                message="Are you sure you want to delete this employee?"
                onConfirm={handleDelete}
                onCancel={handleCancel}
            />

            {/* Add Employee Dialog */}
            <AddEmployeeDialog
                isOpen={showAddDialog}
                onAdd={handleAddEditEmployee}
                onCancel={() => {
                    setShowAddDialog(false);
                    setSelectedEmployee(null); // Reset selected employee when canceled
                    setIsEditMode(false); // Reset mode
                }}
                initialValues={selectedEmployee || undefined} // Pass selected employee for editing
                isEditMode={isEditMode} // Control mode (add or edit)
            />

            {showToast && (
                <Toast
                    message="You have to login to use that feature!"
                    type="error"
                    duration={3000}
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
};

export default EmployeeTab;
