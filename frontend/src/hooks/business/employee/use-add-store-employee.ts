import {useBusinessAccessToken} from "@/msal/use-access-token";
import {addEmployee} from "@/services/business/employee-service";
import {Employee} from "@/models/business/models";

export const useAddStoreEmployee = () => {
    const accessToken = useBusinessAccessToken();

    const handleAddStoreEmployee = async (
        employee: Employee,
        storeId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await addEmployee(employee, storeId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleAddStoreEmployee }
}
