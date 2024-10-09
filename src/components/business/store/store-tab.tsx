import React from "react";
import {useBusinessAccessToken} from "@/msal/use-access-token";
import {useStoreDetails} from "@/hooks/business/use-store-details";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface StoreTabProps {
    storeId: number;
}

const StoreTab: React.FC<StoreTabProps> = ({storeId}) => {
    const accessToken = useBusinessAccessToken();
    const { store, loading, error } = useStoreDetails(storeId, accessToken);

    if (loading) return <Loading />;
    if (error) return (<ErrorPage error={new Error(error || "Unknown error")} reset={() => window.location.reload()}/>);

    return(
        <>{store?.id}</>
    );
}

export default StoreTab;
