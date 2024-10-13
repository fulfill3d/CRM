import React, { useState } from "react";
import { Appointment } from "@/models/client/models";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import AppointmentDialog from "@/components/client/common/appointment-dialog";
import Toast from "@/components/common/toast";
import {AppointmentStatus} from "@/components/business/store/appointment/appointment-tab";
import {useCancelClientAppointment} from "@/hooks/client/use-cancel-client-appointment";
import AppointmentGrid from "@/components/client/history/appointment-grid";
import {useToast} from "@/hooks/common/use-toast";

export interface AppointmentContainerProps {
    selectedAppointmentStatus: AppointmentStatus | 'all'
}

const AppointmentContainer: React.FC<AppointmentContainerProps> = ({ selectedAppointmentStatus }) => {
    const { handleCancelAppointment } = useCancelClientAppointment();
    const [refresh, setRefresh] = useState(false);
    const { isToastActive, toastMessage, toastType, showToast, toggleToastActive } = useToast();
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // Manage confirmation dialog visibility
    const [showUpdateDialog, setShowUpdateDialog] = useState(false); // Manage update dialog visibility
    const [appointmentId, setAppointmentId] = useState<number | null>(null);
    const [appointmentToEdit, setAppointmentToEdit] = useState<Appointment | null>(null);

    const handleConfirmCancel = async () => {
        setShowConfirmationDialog(false);
        if (appointmentId){
            await handleCancelAppointment(
                appointmentId,
                () => setRefresh(prev => !prev),
                (err) => {
                    setShowConfirmationDialog(false);
                    showToast(err, 'error');
                },
                () => {
                    setShowConfirmationDialog(false);
                    showToast('You have to login to cancel an appointment!', 'info');
                },
                )
        }
    }

    return (
        <div className="container mx-auto mt-4 md:mt-0">
            <AppointmentGrid
                refresh={refresh}
                selectedAppointmentStatus={selectedAppointmentStatus}
                onAppointmentEdit={(appointment) => {
                    setAppointmentToEdit(appointment);
                    setAppointmentId(appointment.appointment_id);
                    setShowUpdateDialog(true);
                }}
                onAppointmentCancel={(id) => {
                    setShowConfirmationDialog(true);
                    setAppointmentId(id);
                }}
            />

            {/* Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                title="Confirm Cancellation"
                message="Are you sure you want to cancel this appointment?"
                onConfirm={handleConfirmCancel}
                onCancel={() => setShowConfirmationDialog(false)}
            />

            {/* Update Appointment Dialog */}
            {appointmentToEdit && (
                <AppointmentDialog
                    appointmentId={appointmentId}
                    serviceId={null}
                    isEditMode={true}
                    isOpen={showUpdateDialog}
                    initialData={appointmentToEdit}
                    onClose={() => setShowUpdateDialog(false)}
                    onSuccess={() => {
                        setShowUpdateDialog(false);
                        setAppointmentToEdit(null);
                        setRefresh(prev => !prev);
                    }}
                    onError={(msg) => console.log(msg)}
                    onNoAccessToken={() => {
                        setShowUpdateDialog(false);
                        showToast('You have to login to edit an appointment!', 'info');
                    }}
                />
            )}

            {isToastActive && (
                <Toast
                    message={toastMessage}
                    type={toastType}
                    onClose={toggleToastActive}
                />
            )}
        </div>
    );
}

export default AppointmentContainer;
