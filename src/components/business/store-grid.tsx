import StoreCard from "@/components/business/store-card";
import NoStoreCard from "@/components/business/no-store-card";
import AddCard from "@/components/common/add-card";
import React from "react";
import {useGetStores} from "@/hooks/business/store/use-get-stores";
import Loading from "@/app/loading";
import ErrorPage from "@/app/error";

interface StoreGridProps{
    refresh: boolean;
    handleStoreCardClick: (id: number) => void
    handleAddStoreClick: () => void
}

const StoreGrid: React.FC<StoreGridProps> = (props) => {
    const { stores, loading, error } = useGetStores(props.refresh);

    if (loading) return <Loading />;
    if (error) return <ErrorPage error={new Error(error)} reset={() => window.location.reload()} />;

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-xl font-semibold">
                Select a store to manage
            </h2>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-4 mb-8 md:mb-0">
                {stores.length > 0 ? (
                    stores.map((store) => (
                        <StoreCard
                            onClick={() => {if (store.id) props.handleStoreCardClick(store.id);}}
                            key={store.id}
                            title={store.name}
                            content={store.description}
                            created_at={store.created_at || ""}
                        />
                    ))
                ) : (
                    <NoStoreCard/>
                )}
                <AddCard onClick={() => props.handleAddStoreClick()}/>
            </div>
        </div>
    );
}

export default StoreGrid;
