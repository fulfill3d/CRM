import CustomCard from "@/components/common/custom-card";
import MapView from "@/components/common/map-view";

interface StoreCardProps{
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    description: string;
}

const StoreCard = (props: StoreCardProps) => {
    return(
        <CustomCard title={props.name}>
            <MapView latitude={props.latitude} longitude={props.longitude}/>
            <p>{props.address}</p>
            <p>{props.description}</p>
        </CustomCard>
    );
}

export default StoreCard;
