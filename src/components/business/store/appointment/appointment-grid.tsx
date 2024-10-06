import React, {useState} from 'react';
import AppointmentCard from "@/components/business/store/appointment/appointment-card";
import {AppointmentProps} from "@/components/business/store/appointment/appointment-tab";
import Toast from "@/components/common/toast";
import ConfirmationDialog from "@/components/common/confirmation-dialog";

interface AppointmentListProps {
    appointments?: AppointmentProps[];
    isProtected: boolean;
}

const AppointmentGrid: React.FC<AppointmentListProps> = ({ appointments, isProtected }) => {
    const [showDialog, setShowDialog] = useState(false); // Manage dialog visibility
    const [showToast, setShowToast] = useState(false);
    const [targetAppointmentId, setTargetAppointmentId] = useState<number | null>(null); // Track employee to delete

    if (!appointments || appointments.length === 0) {
        return (
            <div className="text-center p-4">
                <p className="text-gray-500">No appointments available.</p>
            </div>
        );
    }

    const handleAppointmentCancel = (id: number) => {
        setTargetAppointmentId(id);
        setShowDialog(true);
    }

    const handleDelete = () => {
        if (isProtected){
            setShowDialog(false);
        }else {
            setShowDialog(false);
            setShowToast(true)
        }
    };

    const handleCancel = () => {
        setShowDialog(false); // Close dialog without deleting
        setTargetAppointmentId(null); // Reset the target employee ID
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment, index) => (
                <AppointmentCard
                    key={index}
                    appointment={appointment}
                    onCancel={handleAppointmentCancel}
                />
            ))}

            {/* Reusable Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showDialog}
                title="Confirm Deletion"
                message="Are you sure you want to delete this appointment?"
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

export default AppointmentGrid;
