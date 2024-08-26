import {stores} from "@/mock/business/mock-data";
import ClickableStoreCard from "@/components/business/store/clickable-store-card";
import {BusinessView, setBusinessView} from "@/store/slices/view-slice";
import {useDispatch} from "react-redux";

const PublicBusinessView1 = () => {
    const dispatch = useDispatch();

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 ml-4 mr-4">
            {stores.map((store) => (
                <ClickableStoreCard
                    onClick={() => dispatch(setBusinessView(BusinessView.Depth2))}
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
