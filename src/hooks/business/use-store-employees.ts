import { useState, useEffect } from "react";
import {Employee} from "@/models/business/models";
import { mockStores } from "@/mock/business/mock-data";
import {getEmployees} from "@/services/business/employee-service";
import {useBusinessAccessToken} from "@/msal/use-access-token";

export const useStoreEmployees = (storeId: number) => {
    const accessToken = useBusinessAccessToken();
    const [employees, setEmployees] = useState<Employee[] >([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (accessToken && storeId) {
            setLoading(true);
            getEmployees(storeId, accessToken)
                .then(employees => setEmployees(employees))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            // For non-protected mode, fetch from mock data
            const currentStore = mockStores.find(store => store.id === storeId);
            if (currentStore) setEmployees(currentStore.employees.map((employee: any) => new Employee(employee)));
        }
    }, [accessToken, storeId]);

    return { employees, loading, error };
};
