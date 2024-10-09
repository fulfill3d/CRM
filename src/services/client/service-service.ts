import { httpRequest } from "@/services/common/http-request";
import { ClientService} from "@/utils/endpoints";
import {Service, ServiceDetail} from "@/models/client/models";

export const getClientServices = async (accessToken: string) => {
    try {
        const response = await httpRequest(
            ClientService.GetServices.Uri,
            ClientService.GetServices.Method,
            null,
            undefined,
            accessToken
        );
        return response.map((service: any) => new Service(service));
    } catch (error) {
        throw new Error("Failed to fetch stores.");
    }
}

export const getClientService = async (id: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            ClientService.GetService(id).Uri,
            ClientService.GetService(id).Method,
            null,
            undefined,
            accessToken
        );
        return new ServiceDetail(response);
    } catch (error) {
        throw new Error("Failed to fetch stores.");
    }
}
