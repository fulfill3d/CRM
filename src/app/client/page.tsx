"use client";

import PageLayout from "@/components/common/page-layout";
import {nearbyServices} from "@/mock/client/mock-data";
import MapViewMultiple from "@/components/common/map-view-multiple";

export default function Client(){
    return(
        <PageLayout>
            <PageLayout.Public>
                <MapViewMultiple services={nearbyServices}/>
                <div className="space-y-4">
                    {nearbyServices.map(service => (
                        <div key={service.id} className="p-4 border rounded shadow">
                            <h2 className="text-lg font-bold">{service.name}</h2>
                            <p>{service.description}</p>
                            <p>Duration: {service.duration} min</p>
                            <p>Price: ${service.price.toFixed(2)}</p>
                            <p>Store: {service.detail.store_name}</p>
                            <p>Address: {service.detail.address_city}</p>
                        </div>
                    ))}
                </div>
            </PageLayout.Public>
            <PageLayout.Protected>
                <>Protected Client</>
                <>Appointment List</>
                <>Nearby Service List</>
            </PageLayout.Protected>
        </PageLayout>
    )
}
