import ServiceCard from "@/components/client/service-card";
import {Service, ServiceDetail} from "@/models/client/models";
import React, {useState} from "react";
import {nearbyServices} from "@/mock/client/mock-data";
import ServiceDetailDialog from "@/components/client/service-detail-dialog";

interface ServiceListProps {
    services: Service[];
}

const ServiceGrid: React.FC<ServiceListProps> = ({ services }) => {
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null); // Track selected service for dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Track dialog visibility
    // Open dialog with the selected service
    const handleCardClick = (id: number) => {
        const serviceDetailJson = nearbyServices.find(service => service.id === id);
        const serviceDetail = new ServiceDetail(serviceDetailJson?.detail);
        setSelectedService(serviceDetail);
        setIsDialogOpen(true);
    };

    // Close dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedService(null); // Reset selected service when closing
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
                    onClose={closeDialog} // Pass the close handler
                />
            )}
        </div>
    );
};

export default ServiceGrid;
