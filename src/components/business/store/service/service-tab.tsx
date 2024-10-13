import ServiceGrid from "@/components/business/store/service/service-grid";
import ServiceCategoriesDropdown from "@/components/business/store/service/service-categories-dropdown";
import React, {useState} from "react";
import DeleteConfirmationModal from "@/components/business/store/service/delete-confirmation-modal";
import Toast from "@/components/common/toast";
import {useToast} from "@/hooks/common/use-toast";
import { ServiceRequest} from "@/models/business/models";
import {useDeleteStoreService} from "@/hooks/business/service/use-delete-store-service";
import AddServiceDialog from "@/components/business/store/service/add-service-dialog";
import {useAddStoreService} from "@/hooks/business/service/use-add-store-service";
import {useEditStoreService} from "@/hooks/business/service/use-edit-store-service";

interface ServiceTabProps{
    storeId: number;
}

const ServiceTab: React.FC<ServiceTabProps> = ({storeId}) => {
    const { handleAddStoreService } = useAddStoreService();
    const { handleEditStoreService } = useEditStoreService();
    const { handleDeleteStoreService } = useDeleteStoreService();
    const [refresh, setRefresh] = useState<boolean>(false);
    const [showAddServiceDialog, setShowAddServiceDialog] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceRequest | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [targetServiceId, setTargetServiceId] = useState<number | null>(null);

    const openAddDialog = () => {
        setShowAddServiceDialog(true);
    };

    const openEditDialog = (service: ServiceRequest) => {
        setSelectedService(service);
        setIsEditMode(true);
        setShowAddServiceDialog(true);
    };

    const closeDialog = () => {
        setShowAddServiceDialog(false);
        setSelectedService(null);
        setIsEditMode(false);
    };

    const handleSaveService = async (service: ServiceRequest) => {
        if (isEditMode){
            await handleEditStoreService(
                service,
                () => {
                    closeDialog();
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
                    closeDialog();
                    showToast("Service added successfully!", "success");
                    setRefresh(prev => !prev);
                },
                (err) => showToast(`Error adding service: ${err}`, "error"),
                () => showToast("You must be logged in to add a service", "info")
            );
        }
    }

    /// DELETE

    const triggerDelete = (id: number) => {
        setTargetServiceId(id);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        setShowDeleteDialog(false);
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
        setTargetServiceId(null);
    };

    const cancelDelete = () => {
        setShowDeleteDialog(false);
        setTargetServiceId(null);
    };

    return (
        <div className="w-full h-full">
            <h2 className="container mx-auto text-xl font-semibold">
                Services of this store
            </h2>
            <div className="container mx-auto mt-4 md:mt-0">
                <ServiceCategoriesDropdown />
            </div>
            <ServiceGrid
                refresh={refresh}
                storeId={storeId}
                triggerDelete={triggerDelete}
                triggerEdit={openEditDialog}
                onAddService={openAddDialog}/>

            <AddServiceDialog
                isOpen={showAddServiceDialog}
                initialValues={selectedService || undefined}
                isEditMode={isEditMode}
                onAdd={handleSaveService}
                onCancel={closeDialog}
            />

            <DeleteConfirmationModal
                isOpen={showDeleteDialog}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            {isToastActive && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={toggleToastActive}
                />
            )}
        </div>
    )
}

export default ServiceTab;
