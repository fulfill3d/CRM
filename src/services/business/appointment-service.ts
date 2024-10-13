import {mockStoreAppointments} from "@/mock/business/mock-data";

export const getStoreAppointments = async (storeId: number) => {
    // Mocked for now; replace with actual API call later
    return mockStoreAppointments.find(app => app.store_id === storeId);
};
