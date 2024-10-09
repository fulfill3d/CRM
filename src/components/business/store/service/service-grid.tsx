import React, { useState } from 'react';
import { Service } from "@/models/business/models";
import AddCard from "@/components/common/add-card";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import AddServiceDialog from "@/components/business/store/service/add-service-dialog";
import Toast from "@/components/common/toast";
import NoServiceCard from "@/components/business/store/service/no-service-card";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {useStoreServices} from "@/hooks/business/use-store-services";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";
import ServiceCard from "@/components/business/store/service/service-card"; // Import the reusable confirmation dialog

// Assuming you have the Service class and related data structures
interface ServiceListProps {
    storeId: number;
}

const ServiceGrid: React.FC<ServiceListProps> = ({ storeId }) => {
    const accessToken = useBusinessAccessToken();
    const { storeServices, loading, error } = useStoreServices(storeId, accessToken);
    const [showDialog, setShowDialog] = useState(false); // Manage dialog visibility
    const [showToast, setShowToast] = useState(false);
    const [targetServiceId, setTargetServiceId] = useState<number | null>(null); // Track service to delete
    const [showAddServiceDialog, setShowAddServiceDialog] = useState(false); // Manage AddServiceDialog visibility
    const [selectedService, setSelectedService] = useState<Service | null>(null); // Track service to edit
    const [isEditMode, setIsEditMode] = useState(false); // Manage dialog mode (add or edit)

    // Trigger delete confirmation
    const triggerDelete = (id: number) => {
        setTargetServiceId(id);
        setShowDialog(true);
    };

    // Handle actual delete logic after confirmation
    const handleDelete = () => {
        if (accessToken){
            setShowDialog(false); // Close dialog after deletion
        }
        else {
            setShowDialog(false); // Close dialog after deletion
            setShowToast(true);
        }
    };

    const handleCancel = () => {
        setShowDialog(false); // Close dialog without deleting
        setTargetServiceId(null); // Reset target service ID
    };
    // Handle adding or editing a service
    const handleAddOrEditService = (newService: Omit<Service, 'id'>) => {
        if (accessToken){
            setShowAddServiceDialog(false); // Close the dialog after adding or editing
            setSelectedService(null); // Reset selected service
            setIsEditMode(false); // Reset mode
        }else {
            setShowAddServiceDialog(false); // Close the dialog after adding or editing
            setSelectedService(null); // Reset selected service
            setIsEditMode(false); // Reset mode
            setShowToast(true);
        }
    };

    // Open Add Service Dialog for adding a new service
    const handleAddClick = () => {
        setSelectedService(null); // Reset selected service when adding new
        setIsEditMode(false); // Set to Add mode
        setShowAddServiceDialog(true); // Open Add dialog
    };

    // Trigger edit dialog with service data
    const handleEdit = (service: Service) => {
        setSelectedService(service); // Set the service to edit
        setIsEditMode(true); // Enable edit mode
        setShowAddServiceDialog(true); // Open the dialog for editing
    };

    if (loading) return <Loading />;
    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()}/>);

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {storeServices.length > 0 ? (
                storeServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onDelete={() => triggerDelete(service.id)} // Trigger delete confirmation
                        onEdit={() => handleEdit(service)} // Trigger edit dialog
                    />
                ))
            ) : (
                <NoServiceCard />
            )}

            {/* AddCard button to open AddServiceDialog */}
            <AddCard onClick={handleAddClick} />

            {/* Add Service Dialog */}
            <AddServiceDialog
                isOpen={showAddServiceDialog}
                onAdd={handleAddOrEditService}
                onCancel={() => {
                    setShowAddServiceDialog(false);
                    setSelectedService(null); // Reset selected service when canceled
                    setIsEditMode(false); // Reset mode
                }}
                initialValues={selectedService || undefined} // Pass selected service for editing
                isEditMode={isEditMode} // Control mode (add or edit)
            />

            {/* Reusable Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showDialog}
                title="Confirm Deletion"
                message="Are you sure you want to delete this service?"
                onConfirm={handleDelete}
                onCancel={handleCancel}
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



export default ServiceGrid;
