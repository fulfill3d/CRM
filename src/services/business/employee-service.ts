import {httpRequest} from "@/services/common/http-request";
import {BusinessManagement} from "@/utils/endpoints";
import {Employee} from "@/models/business/models";

export const getEmployees = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessManagement.GetEmployees(storeId).Uri,
            BusinessManagement.GetEmployees(storeId).Method,
            null,
            undefined,
            accessToken
        );
        return response.map((employee: any) => Employee.fromJSON(employee));
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const addEmployee = async (employee: Employee, storeId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.AddEmployee(storeId).Uri,
            BusinessManagement.AddEmployee(storeId).Method,
            employee,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const editEmployee = async (employee: Employee, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.EditEmployee.Uri,
            BusinessManagement.EditEmployee.Method,
            employee,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}

export const deleteEmployee = async (employeeId: number, accessToken: string) => {
    try {
        await httpRequest(
            BusinessManagement.DeleteEmployee(employeeId).Uri,
            BusinessManagement.DeleteEmployee(employeeId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}
