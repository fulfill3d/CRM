import {httpRequest} from "@/services/common/http-request";
import {BusinessEmployee} from "@/utils/endpoints";
import {Employee} from "@/models/business/models";

export const getEmployees = async (storeId: number, accessToken: string) => {
    try {
        const response = await httpRequest(
            BusinessEmployee.GetEmployees(storeId).Uri,
            BusinessEmployee.GetEmployees(storeId).Method,
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
            BusinessEmployee.AddEmployee(storeId).Uri,
            BusinessEmployee.AddEmployee(storeId).Method,
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
            BusinessEmployee.EditEmployee.Uri,
            BusinessEmployee.EditEmployee.Method,
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
            BusinessEmployee.DeleteEmployee(employeeId).Uri,
            BusinessEmployee.DeleteEmployee(employeeId).Method,
            null,
            undefined,
            accessToken
        );
    } catch (error) {
        throw new Error("Failed to fetch store details.");
    }
}
