import {httpRequest} from "@/services/common/http-request";
import {BusinessManagement} from "@/utils/endpoints";
import {Service, ServiceRequest} from "@/models/business/models";

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
        return response.map((service: any) => Service.fromJSON(service));
    } catch (error) {
        throw new Error("Failed to fetch store services.");
    }
};

export const addStoreService = async (service: ServiceRequest, storeId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.AddServices(storeId).Uri,
            BusinessManagement.AddServices(storeId).Method,
            service,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const editStoreService = async (service: ServiceRequest, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.EditService.Uri,
            BusinessManagement.EditService.Method,
            service,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const deleteStoreService = async (serviceId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.DeleteService(serviceId).Uri,
            BusinessManagement.DeleteService(serviceId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}
