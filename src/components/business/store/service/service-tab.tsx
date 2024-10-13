import ServiceGrid from "@/components/business/store/service/service-grid";
import ServiceCategoriesDropdown from "@/components/business/store/service/service-categories-dropdown";
import React, {useState} from "react";
import DeleteConfirmationModal from "@/components/business/store/service/delete-confirmation-modal";
import Toast from "@/components/common/toast";
import {useToast} from "@/hooks/common/use-toast";
import { ServiceRequest} from "@/models/business/models";
import AddServiceDialog from "@/components/business/store/service/add-service-dialog";
import {useManageService} from "@/hooks/business/service/use-manage-service";

interface ServiceTabProps{
    storeId: number;
}

const ServiceTab: React.FC<ServiceTabProps> = ({storeId}) => {
    const [refresh, setRefresh] = useState<boolean>(false);
    const [showAddServiceDialog, setShowAddServiceDialog] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceRequest | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [targetServiceId, setTargetServiceId] = useState<number | null>(null);

    const { handleSaveService, confirmDelete } = useManageService(
        isEditMode,
        storeId,
        targetServiceId,
        showToast,
        setRefresh
    );

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

    /// DELETE

    const triggerDelete = (id: number) => {
        setTargetServiceId(id);
        setShowDeleteDialog(true);
    };

    const closeConfirmation = () => {
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
                onAdd={async (service)=>{
                    await handleSaveService(service);
                    closeDialog();
                }}
                onCancel={closeDialog}
            />

            <DeleteConfirmationModal
                isOpen={showDeleteDialog}
                onConfirm={async ()=>{
                    await confirmDelete();
                    closeConfirmation();
                }}
                onCancel={closeConfirmation}
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
