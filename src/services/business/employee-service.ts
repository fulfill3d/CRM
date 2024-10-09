import {httpRequest} from "@/services/common/http-request";
import {BusinessManagement} from "@/utils/endpoints";
import {Employee} from "@/models/business/models";

export const getEmployees = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessManagement.GetStore(storeId).Uri,
            BusinessManagement.GetStore(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return response.employees.map((employee: any) => new Employee(employee));
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }}

export const addEmployee = async (accessToken: string) => {}

export const editEmployee = async (accessToken: string) => {}

export const deleteEmployee = async (accessToken: string) => {}
