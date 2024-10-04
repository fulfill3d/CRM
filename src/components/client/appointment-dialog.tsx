import React, { useState, useEffect } from 'react';

interface AppointmentDialogProps {
    isOpen: boolean;
    initialData?: {
        appointment_start_date: string;
        appointment_notes: string;
    };
    isEditMode?: boolean; // If true, it's editing, else it's booking
    onClose: () => void;
    onSave: (updatedData: { start_date: string; note: string }) => void;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({
                                                                 isOpen,
                                                                 initialData,
                                                                 isEditMode = false,
                                                                 onClose,
                                                                 onSave
                                                             }) => {
    // Helper to convert the date to `YYYY-MM-DDTHH:MM` format
    const formatDateForInput = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
    };

    const today = new Date().toISOString().slice(0, 16); // Format today's date
    const [startDate, setStartDate] = useState(today);
    const [note, setNote] = useState('');

    // Update the state when `initialData` changes (e.g., on edit)
    useEffect(() => {
        if (initialData) {
            setStartDate(formatDateForInput(initialData.appointment_start_date));
            setNote(initialData.appointment_notes || '');
        }
    }, [initialData]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ start_date: startDate, note });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {isEditMode ? "Edit Appointment" : "Book Appointment"}
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
                        placeholder={isEditMode ? "Update your notes..." : "Add any notes..."}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={handleSave}
                    >
                        {isEditMode ? "Save Changes" : "Book Appointment"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDialog;
