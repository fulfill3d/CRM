import React, { useState } from 'react';
import { Category, Service } from "@/models/business/models";
import AddCard from "@/components/common/add-card";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import AddServiceDialog from "@/components/business/store/add-service-dialog"; // Import the reusable confirmation dialog

// Assuming you have the Service class and related data structures
interface ServiceListProps {
    services: Service[];
}

const ServiceAccordionGrid: React.FC<ServiceListProps> = ({ services }) => {
    const [showDialog, setShowDialog] = useState(false); // Manage dialog visibility
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
        if (targetServiceId !== null) {
            console.log(`Deleting service with id: ${targetServiceId}`);
            // Add your delete logic here, such as:
            // props.services = props.services.filter(service => service.id !== targetServiceId);
        }
        setShowDialog(false); // Close dialog after deletion
    };

    const handleCancel = () => {
        setShowDialog(false); // Close dialog without deleting
        setTargetServiceId(null); // Reset target service ID
    };
    // Handle adding or editing a service
    const handleAddOrEditService = (newService: Omit<Service, 'id'>) => {
        setShowAddServiceDialog(false); // Close the dialog after adding or editing
        setSelectedService(null); // Reset selected service
        setIsEditMode(false); // Reset mode
        console.log(newService);
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

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {services.map((service) => (
                <ServiceAccordion
                    key={service.id}
                    service={service}
                    onDelete={() => triggerDelete(service.id)} // Trigger delete confirmation
                    onEdit={() => handleEdit(service)} // Trigger edit dialog
                />
            ))}

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
        </div>
    );
};

const ServiceAccordion: React.FC<{ service: Service, onDelete: () => void, onEdit: () => void }> = ({ service, onDelete, onEdit }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            {/* Service Info */}
            <div className="border-b pb-3">
                <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-gray-800">
                        ${service.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                        {service.duration} mins
                    </span>
                </div>
            </div>

            {/* Categories Accordion */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
                <ul className="mt-2 space-y-4">
                    {service.categories.map((category) => (
                        <CategoryAccordion key={category.id} category={category} />
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
                {/* Edit Button */}
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={onEdit}
                >
                    Edit
                </button>

                {/* Delete Button */}
                <button
                    onClick={onDelete} // Trigger delete confirmation dialog
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

const CategoryAccordion: React.FC<{ category: Category }> = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="border p-3 rounded-lg">
            {/* Category Header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-800 font-medium">{category.name}</p>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-blue-500 text-sm"
                >
                    {isOpen ? 'Hide' : 'Show'}
                </button>
            </div>

            {/* Subcategories */}
            {isOpen && category.sub_categories.length > 0 && (
                <ul className="mt-3 ml-4 space-y-2 list-disc">
                    {category.sub_categories.map((subCategory) => (
                        <li key={subCategory.id} className="text-gray-600">
                            {subCategory.name} - {subCategory.description}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default ServiceAccordionGrid;
