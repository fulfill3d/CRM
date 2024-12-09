import {useAddStoreService} from "@/hooks/business/service/use-add-store-service";
import {useEditStoreService} from "@/hooks/business/service/use-edit-store-service";
import {useDeleteStoreService} from "@/hooks/business/service/use-delete-store-service";
import {ServiceRequest} from "@/models/business/models";
import React from "react";

export const useManageService = (
    isEditMode: boolean,
    storeId: number,
    targetServiceId: number | null,
    showToast: (message: string, type: 'success' | 'error' | 'info') => void,
    setRefresh:  React.Dispatch<React.SetStateAction<boolean>>
) => {

    const { handleAddStoreService } = useAddStoreService();
    const { handleEditStoreService } = useEditStoreService();
    const { handleDeleteStoreService } = useDeleteStoreService();

    const handleSaveService = async (service: ServiceRequest) => {
        if (isEditMode){
            await handleEditStoreService(
                service,
                () => {
                    showToast("Service edited successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error editing service: ${err}`, "error"),
                () => showToast("You must be logged in to edit a service", "info")
            );
        }else {
            await handleAddStoreService(
                service,
                storeId,
                () => {
                    showToast("Service added successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error adding service: ${err}`, "error"),
                () => showToast("You must be logged in to add a service", "info")
            );
        }
    }

    const confirmDelete = async () => {
        if (targetServiceId){
            await handleDeleteStoreService(
                targetServiceId,
                () => {
                    showToast("Service deleted successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error deleting service: ${err}`, "error"),
                () => showToast("You must be logged in to delete a service", "info"));
        }
    };

    return { handleSaveService, confirmDelete }
}
