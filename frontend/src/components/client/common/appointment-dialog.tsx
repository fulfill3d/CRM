import React, { useState, useEffect } from 'react';
import {useSetClientAppointment} from "@/hooks/client/use-set-client-appointment";
import {AppointmentRequest} from "@/models/client/models";
import {useEditClientAppointment} from "@/hooks/client/use-edit-client-appointment";

interface AppointmentDialogProps {
    isOpen: boolean;
    serviceId: number | null
    appointmentId: number | null
    initialData?: {
        appointment_start_date: string;
        appointment_notes: string;
    };
    isEditMode?: boolean; // If true, it's editing, else it's booking
    onClose: () => void;
    onSuccess: () => void;
    onError: (message: string) => void;
    onNoAccessToken: () => void;
}

const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
};

const AppointmentDialog: React.FC<AppointmentDialogProps> = (props) => {
    const today = new Date().toISOString().slice(0, 16); // Format today's date
    const [startDate, setStartDate] = useState(today);
    const [note, setNote] = useState('');

    const { handleSetAppointment } = useSetClientAppointment();
    const { handleEditAppointment } = useEditClientAppointment();

    // Update the state when `initialData` changes (e.g., on edit)
    useEffect(() => {
        if (props.initialData) {
            setStartDate(formatDateForInput(props.initialData.appointment_start_date));
            setNote(props.initialData.appointment_notes || '');
        }
    }, [props.initialData]);

    const setAppointment = async () => {
        const request = new AppointmentRequest(startDate, note, null, props.serviceId);
        await handleSetAppointment(request, props.onSuccess, props.onError, props.onNoAccessToken);
    };

    const editAppointment = async () => {
        const request = new AppointmentRequest(startDate, note, props.appointmentId, null);
        await handleEditAppointment(request, props.onSuccess, props.onError, props.onNoAccessToken);
    };

    const handleSave = async () => {
        if (props.isEditMode) {
            await editAppointment();
        } else {
            await setAppointment();
        }
    };

    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {props.isEditMode ? "Edit Appointment" : "Book Appointment"}
                </h2>

                {/* Date Picker */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Appointment Date
                    </label>
                    <input
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        rows={4}
                        placeholder={props.isEditMode ? "Update your notes..." : "Add any notes..."}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        onClick={props.onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        {props.isEditMode ? "Save Changes" : "Book Appointment"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDialog;
