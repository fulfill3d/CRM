import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect } from 'react';

interface ServiceDetail {
    service_id: number;
    service_duration: number;
    service_price: number;
    service_name: string;
    service_description: string;
    store_id: number;
    store_name: string;
    store_description: string;
    location_lat: number;
    location_lon: number;
    address_street1: string;
    address_street2?: string;
    address_city: string;
    address_state: string;
    address_country: string;
    address_zip_code: string;
}

interface ServiceProps {
    id: number;
    name: string;
    description: string;
    duration: number;
    price: number;
    categories: Array<{ id: number; name: string; description: string; sub_categories: any[] }>;
    detail: ServiceDetail;
}

interface MapViewProps {
    services: ServiceProps[];
}

const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Component to automatically fit bounds
const FitBounds: React.FC<{ bounds: L.LatLngBoundsExpression }> = ({ bounds }) => {
    const map = useMap();

    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [map, bounds]);

    return null;
};

const MapView: React.FC<MapViewProps> = ({ services }) => {
    // Create an array of LatLng tuples from service locations
    const bounds: L.LatLngTuple[] = services.map(service => [
        service.detail.location_lat,
        service.detail.location_lon
    ]);

    return (
        <MapContainer
            bounds={bounds}  // Use bounds to auto-center and zoom the map
            className="w-full h-96 rounded-lg shadow-lg"
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            dragging={true}  // Enable dragging
            zoomControl={true}  // Enable zoom control
            keyboard={false}
            boxZoom={false}
            attributionControl={false}  // Disable attribution control
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {services.map(service => (
                <Marker
                    key={service.id}
                    position={[service.detail.location_lat, service.detail.location_lon] as [number, number]}
                    icon={customIcon}
                >
                    <Popup keepInView={true}>  {/* Ensure popup stays in view */}
                        <div>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <p><strong>Store:</strong> {service.detail.store_name}</p>
                            <p>{service.detail.address_street1}, {service.detail.address_city}, {service.detail.address_state} {service.detail.address_zip_code}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
            <FitBounds bounds={bounds} />
        </MapContainer>
    );
};

export default MapView;
