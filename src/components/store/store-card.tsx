import CustomCard from "@/components/common/custom-card";
import MapView from "@/components/common/map-view";

interface Location{
    latitude: number;
    longitude: number;
    street1: string
    street2: string
    city: string
    state: string
    country: string
    zip_code: string
}

interface StoreProps{
    name: string;
    description: string;
    location: Location;
}

interface StoreCardProps{
    data: StoreProps;
}

const StoreCard = (props: StoreCardProps) => {
    const data = props.data;
    return(
        <CustomCard title={data.name}>
            <MapView latitude={data.location.latitude} longitude={data.location.longitude}/>
            <p>{`
                ${data.location.street1}, 
                ${data.location.street2}, 
                ${data.location.city}, 
                ${data.location.state}, 
                ${data.location.zip_code}`}</p>
            <p>{data.description}</p>
        </CustomCard>
    );
}

export default StoreCard;
