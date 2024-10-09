import { useState, useCallback } from 'react';

export const useToast = () => {
    const [isToastActive, setToastActive] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');

    const toggleToastActive = () => setToastActive((active) => !active);

    const showToast = (message: string, toastType: 'success' | 'error' | 'info') => {
        setToastMessage(message);
        setToastType(toastType);
        toggleToastActive();
    };

    return { isToastActive, toastMessage, toastType, showToast, toggleToastActive };
};
