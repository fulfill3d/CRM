import MapView from "@/components/common/map-view";
import {nearbyServices} from "@/mock/client/mock-data";
import {Calendar} from "@nextui-org/react";
import React from "react";
import {Button} from "@/components/ui/button";

const PublicClientView2 = () => {
    const serviceId = 1;
    const currentService = nearbyServices.find(service => service.id === serviceId);

    if (!currentService) {
        return (
            <div className="flex items-center justify-center">
                Service not found
            </div>
        );
    }

    return(
        <div>
            <MapView latitude={currentService.detail.location_lat} longitude={currentService.detail.location_lon}/>
            <div>
                <h2 className="text-lg font-bold">{currentService.name}</h2>
                <p>{currentService.description}</p>
                <p>Duration: {currentService.duration} min</p>
                <p>Price: ${currentService.price.toFixed(2)}</p>
                <p>Store: {currentService.detail.store_name}</p>
                <p>Address: {currentService.detail.address_city}</p>
            </div>
            <Calendar/>
            <div className="flex items-center justify-center">
                <Button
                    // onClick={() => {
                    //     toast({
                    //         title: "Uh oh! Something went wrong.",
                    //         description: "MockUp data cannot be edited",
                    //     })
                    // }}
                    variant="default"
                    size="sm"
                    className="h-4 w-4 p-0 gap-1"
                >
                    <span className="text-sm sr-only sm:not-sr-only">BOOK</span>
                </Button>
            </div>
        </div>
    );
}

export default PublicClientView2;
