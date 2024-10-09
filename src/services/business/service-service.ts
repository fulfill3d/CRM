import {httpRequest} from "@/services/common/http-request";
import {BusinessManagement} from "@/utils/endpoints";
import {Service} from "@/models/business/models";

export const getServiceCategories = async (accessToken: string) => {}

export const getStoreServices = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessManagement.GetServices(storeId).Uri,
            BusinessManagement.GetServices(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return response.map((service: any) => new Service(service));
    } catch (error) {
        throw new Error("Failed to fetch store services.");
    }
};

export const addStoreService = async (accessToken: string) => {}

export const editStoreService = async (accessToken: string) => {}

export const deleteStoreService = async (accessToken: string) => {}
