import React, {useState} from "react";
import ServiceDetailDialog from "@/components/client/nearby/service-detail-dialog";
import AppointmentDialog from "@/components/client/common/appointment-dialog";
import Toast from "@/components/common/toast";
import ServiceGrid from "@/components/client/nearby/service-grid";
import ServiceFilter from "@/components/client/nearby/service-filter";

interface ServiceListProps {}

const ServiceTab: React.FC<ServiceListProps> = () => {
    const [showToast, setShowToast] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null); // Track selected serviceId for dialog
    const [detailDialogOpen, setDetailDialogOpen] = useState(false); // Track ServiceDetailDialog visibility
    const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false); // Track AppointmentDialog visibility

    return (
        <div className="w-full h-full">
            {/* Filter Section */}
            <ServiceFilter />

            {/* Service Grid Section */}
            <ServiceGrid
                onServiceCardClick={(id) => {
                    setSelectedServiceId(id);
                    setDetailDialogOpen(true);
                }}
            />

            {/* Service Detail Dialog */}
            <ServiceDetailDialog
                isOpen={detailDialogOpen}
                serviceId={selectedServiceId}
                onClose={() => {
                    setDetailDialogOpen(false);
                    setSelectedServiceId(null); // Reset selected service when closing
                }} // Pass the close handler
                onBook={() => {
                    setDetailDialogOpen(false); // Close service detail dialog
                    setIsAppointmentDialogOpen(true); // Open appointment dialog
                }} // Pass the book handler
            />

            {/* Appointment Dialog for booking */}
            <AppointmentDialog
                isOpen={isAppointmentDialogOpen}
                serviceId={selectedServiceId}
                appointmentId={null}
                isEditMode={false} // Not edit mode, this is for booking
                onClose={() => {
                    setIsAppointmentDialogOpen(false);
                    setDetailDialogOpen(true); // Open service detail dialog
                }}
                onSuccess={() => {
                    setDetailDialogOpen(false);
                    setIsAppointmentDialogOpen(false);
                }}
                onError={(msg) => console.log(msg)}
                onNoAccessToken={() => {
                    setDetailDialogOpen(false);
                    setIsAppointmentDialogOpen(false);
                    setShowToast(true);
                }}
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

export default ServiceTab;
