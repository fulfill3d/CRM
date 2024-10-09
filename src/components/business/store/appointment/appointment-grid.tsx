import React, {useState} from 'react';
import AppointmentCard from "@/components/business/store/appointment/appointment-card";
import {AppointmentStatus} from "@/components/business/store/appointment/appointment-tab";
import Toast from "@/components/common/toast";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {useStoreAppointments} from "@/hooks/business/use-store-appointments";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface AppointmentListProps {
    selectedStatus: AppointmentStatus | 'all';
    storeId: number;
}

const AppointmentGrid: React.FC<AppointmentListProps> = ({ storeId, selectedStatus }) => {
    const accessToken = useBusinessAccessToken();
    const { storeAppointments, loading, error } = useStoreAppointments(storeId, accessToken);
    const [showDialog, setShowDialog] = useState(false); // Manage dialog visibility
    const [showToast, setShowToast] = useState(false);
    const [targetAppointmentId, setTargetAppointmentId] = useState<number | null>(null); // Track employee to delete

    // Filter appointments based on selected status
    const filteredAppointments = () => {
        if (selectedStatus === 'all') return storeAppointments;
        return storeAppointments.filter(appointment => appointment.status === selectedStatus) || [];
    };

    const handleAppointmentCancel = (id: number) => {
        setTargetAppointmentId(id);
        setShowDialog(true);
    }

    const handleDelete = () => {
        if (accessToken){
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

    if (loading) return <Loading />;

    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()}/>);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAppointments().length > 0 ? (
                filteredAppointments().map((appointment, index) => (
                    <AppointmentCard
                        key={index}
                        appointment={appointment}
                        onCancel={handleAppointmentCancel}
                    />
                ))
            ) : (
                <div className="text-center p-4">
                    <p className="text-gray-500">No appointments available.</p>
                </div>
            )}

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
