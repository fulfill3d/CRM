import { useGetStoreServices } from "@/hooks/business/service/use-get-store-services";

export const useServiceData = (storeId: number, refresh: boolean) => {
    const { storeServices, loading, error } = useGetStoreServices(storeId, refresh);

    return { storeServices, loading, error };
};
