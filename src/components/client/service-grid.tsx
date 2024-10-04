import ServiceCard from "@/components/client/service-card";
import { Service, ServiceDetail } from "@/models/client/models";
import React, { useState } from "react";
import { nearbyServices } from "@/mock/client/mock-data";
import ServiceDetailDialog from "@/components/client/service-detail-dialog";
import AppointmentDialog from "@/components/client/appointment-dialog"; // Import the AppointmentDialog

interface ServiceListProps {
    services: Service[];
}

const ServiceGrid: React.FC<ServiceListProps> = ({ services }) => {
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null); // Track selected service for dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Track ServiceDetailDialog visibility
    const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false); // Track AppointmentDialog visibility

    // Open ServiceDetailDialog with the selected service
    const handleCardClick = (id: number) => {
        const serviceDetailJson = nearbyServices.find(service => service.id === id);
        const serviceDetail = new ServiceDetail(serviceDetailJson?.detail);
        setSelectedService(serviceDetail);
        setIsDialogOpen(true);
    };

    // Close ServiceDetailDialog
    const closeServiceDetailDialog = () => {
        setIsDialogOpen(false);
        setSelectedService(null); // Reset selected service when closing
    };

    // Open AppointmentDialog to book an appointment
    const handleBookClick = () => {
        setIsDialogOpen(false); // Close service detail dialog
        setIsAppointmentDialogOpen(true); // Open appointment dialog
    };

    // Close AppointmentDialog
    const closeAppointmentDialog = () => {
        setIsAppointmentDialogOpen(false);
    };

    const handleAppointmentSave = (updatedData: { start_date: string; note: string }) => {
        console.log('Appointment data:', updatedData);
        setIsAppointmentDialogOpen(false); // Close the dialog after saving
    };

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => handleCardClick(service.id)} // Pass click handler
                />
            ))}

            {/* Service Detail Dialog */}
            {selectedService && (
                <ServiceDetailDialog
                    isOpen={isDialogOpen}
                    serviceDetail={selectedService} // Pass the selected service
                    onClose={closeServiceDetailDialog} // Pass the close handler
                    onBook={handleBookClick} // Pass the book handler
                />
            )}

            {/* Appointment Dialog for booking */}
            {isAppointmentDialogOpen && (
                <AppointmentDialog
                    isOpen={isAppointmentDialogOpen}
                    isEditMode={false} // Not edit mode, this is for booking
                    onClose={closeAppointmentDialog}
                    onSave={handleAppointmentSave}
                />
            )}
        </div>
    );
};

export default ServiceGrid;
