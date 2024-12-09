import { Employee } from "@/models/business/models";
import {useAddStoreEmployee} from "@/hooks/business/employee/use-add-store-employee";
import {useUpdateStoreEmployee} from "@/hooks/business/employee/use-update-store-employee";
import {useDeleteStoreEmployee} from "@/hooks/business/employee/use-delete-store-employee";
import React from "react";

export const useManageEmployees = (
    storeId: number,
    showToast: (message: string, type: 'success' | 'error' | 'info') => void,
    setRefresh:  React.Dispatch<React.SetStateAction<boolean>>
) => {

    const { handleAddStoreEmployee } = useAddStoreEmployee();
    const { handleEditStoreEmployee } = useUpdateStoreEmployee();
    const { handleDeleteStoreEmployee } = useDeleteStoreEmployee();

    // Add a new employee
    const addEmployee = async (employee: Employee) => {
        try {
            await handleAddStoreEmployee(
                employee,
                storeId,
                () => {
                    showToast("Employee added successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error adding employee: ${err}`, "error"),
                () => showToast("You must be logged in to add an employee", "info")
            );
        } catch (err) {
            showToast(`Unexpected error: ${err}`, "error");
        }
    };

    // Edit an existing employee
    const editEmployee = async (employee: Employee) => {
        try {
            await handleEditStoreEmployee(
                employee,
                () => {
                    showToast("Employee updated successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error updating employee: ${err}`, "error"),
                () => showToast("You must be logged in to edit an employee", "info")
            );
        } catch (err) {
            showToast(`Unexpected error: ${err}`, "error");
        }
    };

    // Delete an employee
    const deleteEmployee = async (employeeId: number) => {
        try {
            await handleDeleteStoreEmployee(
                employeeId,
                () => {
                    showToast("Employee deleted successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error deleting employee: ${err}`, "error"),
                () => showToast("You must be logged in to delete an employee", "info")
            );
        } catch (err) {
            showToast(`Unexpected error: ${err}`, "error");
        }
    };

    return {
        addEmployee,
        editEmployee,
        deleteEmployee,
    };
};
