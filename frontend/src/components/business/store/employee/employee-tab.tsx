import ConfirmationDialog from "@/components/common/confirmation-dialog";
import React, { useState } from "react";
import AddEmployeeDialog from "@/components/business/store/employee/add-employee-dialog";
import Toast from "@/components/common/toast";
import EmployeeGrid from "@/components/business/store/employee/employee-grid";
import {Employee} from "@/models/business/models";
import {useToast} from "@/hooks/common/use-toast";
import {useManageEmployees} from "@/hooks/business/employee/use-manage-employee";

interface EmployeeTabProps {
    storeId: number;
}

const EmployeeTab: React.FC<EmployeeTabProps> = ({storeId}) => {
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [refresh, setRefresh] = useState<boolean>(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // Manage dialog visibility
    const [targetEmployeeId, setTargetEmployeeId] = useState<number | null>(null); // Track employee to delete
    const [showAddDialog, setShowAddDialog] = useState(false); // Manage add dialog visibility
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null); // Track employee to edit
    const [isEditMode, setIsEditMode] = useState(false); // Manage dialog mode (add or edit)

    const { addEmployee, editEmployee, deleteEmployee } = useManageEmployees(storeId, showToast, setRefresh);

    const resetDialogState = () => {
        setShowAddDialog(false);
        setIsEditMode(false);
        setSelectedEmployee(null);
    };

    const resetConfirmationState = () => {
        setShowConfirmationDialog(false);
        setTargetEmployeeId(null);
    };

    const handleSaveEmployee = async (employee: Employee) => {
        if (isEditMode){
            await editEmployee(employee)
        } else {
            await addEmployee(employee);
        }
        resetDialogState();
    }

    const handleDeleteEmployee = async () => {
        if (targetEmployeeId){
            await deleteEmployee(targetEmployeeId);
        }
        resetConfirmationState();
    }

    const handleTriggerDelete = (id: number) => {
        setTargetEmployeeId(id);
        setShowConfirmationDialog(true);
    };

    const handleTriggerEdit = (employee: Employee) => {
        setSelectedEmployee(employee);
        setIsEditMode(true);
        setShowAddDialog(true);
    };

    return (
        <div className="w-full h-full">
            <h2 className="container mx-auto text-xl font-semibold">
                Employees of this store
            </h2>

            {/* Employee Grid */}
            <EmployeeGrid
                refresh={refresh}
                storeId={storeId}
                triggerDelete={handleTriggerDelete}
                triggerEdit={handleTriggerEdit}
                onAddEmployee={() => setShowAddDialog(true)}
            />

            {/* Reusable Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                title="Confirm Deletion"
                message="Are you sure you want to delete this employee?"
                onConfirm={handleDeleteEmployee}
                onCancel={resetConfirmationState}
            />

            {/* Add Employee Dialog */}
            <AddEmployeeDialog
                isOpen={showAddDialog}
                onAdd={handleSaveEmployee}
                onCancel={resetDialogState}
                initialValues={selectedEmployee || undefined} // Pass selected employee for editing
                isEditMode={isEditMode} // Control mode (add or edit)
            />

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

export default EmployeeTab;
