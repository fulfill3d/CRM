import {useBusinessAccessToken} from "@/msal/use-access-token";
import {Employee} from "@/models/business/models";
import {editEmployee} from "@/services/business/employee-service";

export const useUpdateStoreEmployee = () => {
    const accessToken = useBusinessAccessToken();

    const handleEditStoreEmployee = async (
        employee: Employee,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await editEmployee(employee, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleEditStoreEmployee }
}
