import React from 'react';
import ConfirmationDialog from "@/components/common/confirmation-dialog";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
                                                                             isOpen,
                                                                             onConfirm,
                                                                             onCancel,
                                                                         }) => (
    <ConfirmationDialog
        isOpen={isOpen}
        title="Confirm Deletion"
        message="Are you sure you want to delete this service?"
        onConfirm={onConfirm}
        onCancel={onCancel}
    />
);

export default DeleteConfirmationModal;
