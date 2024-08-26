import MapViewMultiple from "@/components/common/map-view-multiple";
import {nearbyServices} from "@/mock/client/mock-data";
import {useDispatch} from "react-redux";
import {ClientView, setClientView} from "@/store/slices/view-slice";

const PublicClientView1 = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <MapViewMultiple services={nearbyServices}/>
            <div className="space-y-4">
                {nearbyServices.map(service => (
                    <div
                        onClick={() => dispatch(setClientView(ClientView.Depth2))}
                        key={service.id} className="p-4 border rounded shadow">
                        <h2 className="text-lg font-bold">{service.name}</h2>
                        <p>{service.description}</p>
                        <p>Duration: {service.duration} min</p>
                        <p>Price: ${service.price.toFixed(2)}</p>
                        <p>Store: {service.detail.store_name}</p>
                        <p>Address: {service.detail.address_city}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PublicClientView1
