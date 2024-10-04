import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('react-leaflet').then((module) => ({
    default: module.MapContainer,
})), { ssr: false });

const TileLayer = dynamic(() => import('react-leaflet').then((module) => ({
    default: module.TileLayer,
})), { ssr: false });

const Marker = dynamic(() => import('react-leaflet').then((module) => ({
    default: module.Marker,
})), { ssr: false });

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

interface MapViewProps {
    latitude: number;
    longitude: number;
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

const MapComponent: React.FC<MapViewProps> = ({ latitude, longitude }) => {
    return (
        <MapView
            center={[latitude, longitude]}
            zoom={13}
            className="w-full h-48 rounded-lg shadow-lg"
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            zoomControl={false}
            keyboard={false}
            boxZoom={false}
            attributionControl={false}  // Disable attribution control
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={customIcon} />
        </MapView>
    );
};

export default MapComponent;
