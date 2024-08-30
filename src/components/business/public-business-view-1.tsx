import {stores} from "@/mock/business/mock-data";
import ClickableStoreCard from "@/components/business/store/clickable-store-card";
import {BusinessView, setBusinessView} from "@/store/slices/view-slice";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {setStoreId} from "@/store/slices/store-slice";

const PublicBusinessView1 = () => {
    const dispatch = useDispatch();

    const cardClick = useCallback((id: number) => {
        dispatch(setBusinessView(BusinessView.Depth2));
        dispatch(setStoreId(id))
    }, [dispatch])

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 pt-24">
            {stores.map((store) => (
                <ClickableStoreCard
                    onClick={() => cardClick(store.id)}
                    key={store.id}
                    title={store.name}
                    content={store.description}
                    created_at={store.created_at}
                />
            ))}
        </div>
    );
}

export default PublicBusinessView1;
