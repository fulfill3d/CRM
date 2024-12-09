import {useBusinessAccessToken} from "@/msal/use-access-token";
import {deleteEmployee} from "@/services/business/employee-service";

export const useDeleteStoreEmployee = () => {
    const accessToken = useBusinessAccessToken();

    const handleDeleteStoreEmployee = async (
        employeeId: number,
        onSuccess: () => void,
        onError: (message: string) => void,
        onNoAccessToken: () => void) => {
        if (accessToken){
            try {
                await deleteEmployee(employeeId, accessToken);
                onSuccess();
            } catch (err: any) {
                onError(err.message);
            }
        }else {
            onNoAccessToken();
        }
    }

    return { handleDeleteStoreEmployee }
}
