import CustomCard from "@/components/common/custom-card";
import dynamic from "next/dynamic";
import {Store} from "@/models/business/models";
const MapView = dynamic(() => import('@/components/common/map-view'), {
    ssr: false, // Disable SSR for this component
});

interface StoreCardProps{
    data: Store;
}

const StoreCard = (props: StoreCardProps) => {
    const data = props.data;

    return(
        <CustomCard title={data.name}>
            {data.location && (
                <MapView latitude={data.location.latitude} longitude={data.location.longitude}/>
            )}
            {data.location && (
                <p>{`
                ${data.location.street1}, 
                ${data.location.street2}, 
                ${data.location.city}, 
                ${data.location.state}, 
                ${data.location.zip_code}`}
                </p>
            )}
            <p>{data.description}</p>
            <p>Total Number of Employees</p>
            <p>Total Number of Services</p>
            <p>Total Appointments Given</p>
        </CustomCard>
    );
}

export default StoreCard;
