import AppointmentCard from "@/components/client/history/appointment-card";
import React, { useState } from "react";
import { Appointment } from "@/models/client/models";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import AppointmentDialog from "@/components/client/history/appointment-dialog";
import Toast from "@/components/common/toast";

export interface AppointmentListProps {
    appointments?: Appointment[];
    isProtected: boolean;
}

const AppointmentGrid: React.FC<AppointmentListProps> = ({ appointments, isProtected }) => {
    const [showToast, setShowToast] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // Manage confirmation dialog visibility
    const [showUpdateDialog, setShowUpdateDialog] = useState(false); // Manage update dialog visibility
    const [appointmentId, setAppointmentId] = useState<number | null>(null);
    const [appointmentToEdit, setAppointmentToEdit] = useState<Appointment | null>(null);

    const handleEdit = (id: number) => {
        const appointment = appointments?.find(appointment => appointment.appointment_id == id);
        if (appointment){
            setAppointmentToEdit(appointment); // Set the data to edit
            setAppointmentId(id);
            setShowUpdateDialog(true);
        }
    }

    const handleCancel = (id: number) => {
        setShowConfirmationDialog(true);
        setAppointmentId(id);
    }

    const handleConfirmCancel = () => {
        setShowConfirmationDialog(false);
        if (isProtected){
            console.log('Cancel appointment id: ', appointmentId);
        }else {
            console.log('Cancel appointment id: ', appointmentId);
            setShowToast(true);
        }
    }

    const handleNotConfirmCancel = () => {
        setShowConfirmationDialog(false);
        console.log('Not cancel appointment id: ', appointmentId);
    }

    const handleSaveUpdatedAppointment = (updatedData: { start_date: string; note: string }) => {
        setShowUpdateDialog(false);
        if (isProtected){
            console.log('Updated appointment id: ', appointmentId, ' with data: ', updatedData);
        }else {
            console.log('Updated appointment id: ', appointmentId, ' with data: ', updatedData);
            setShowToast(true);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Check if appointments exist and map over them */}
            {appointments && appointments.length > 0 ? (
                appointments.map((appointmentData, index) => (
                    <AppointmentCard
                        key={index}
                        appointment={appointmentData}
                        onEdit={() => handleEdit(appointmentData.appointment_id)}
                        onCancel={() => handleCancel(appointmentData.appointment_id)}
                    />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">
                    No appointments found.
                </div>
            )}

            {/* Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                title="Confirm Cancellation"
                message="Are you sure you want to cancel this appointment?"
                onConfirm={handleConfirmCancel}
                onCancel={handleNotConfirmCancel}
            />

            {/* Update Appointment Dialog */}
            {appointmentToEdit && (
                <AppointmentDialog
                    isOpen={showUpdateDialog}
                    initialData={appointmentToEdit}
                    onClose={() => setShowUpdateDialog(false)}
                    onSave={handleSaveUpdatedAppointment}
                />
            )}

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
}

export default AppointmentGrid;
