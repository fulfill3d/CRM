import { BusinessManagement } from "@/utils/endpoints";
import {Store} from "@/models/business/models";
import {httpRequest} from "@/services/common/http-request";

// STORE
export const getStores = async (accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessManagement.GetStores.Uri,
            BusinessManagement.GetStores.Method,
            null,
            undefined,
            accessToken
        );
        return response.map((store: any) => Store.fromJSON(store));
    } catch (error) {
        throw new Error("Failed to fetch stores.");
    }
};

export const getStoreById = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessManagement.GetStore(storeId).Uri,
            BusinessManagement.GetStore(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return Store.fromJSON(response);
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
};

export const addStore = async (newStore: Store, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.AddStore.Uri,
            BusinessManagement.AddStore.Method,
            newStore,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to add store.");
    }
};

export const editStore = async (accessToken: string) => {}

export const deleteStore = async (storeId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.DeleteStore(storeId).Uri,
            BusinessManagement.DeleteStore(storeId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to delete store.");
    }
}
