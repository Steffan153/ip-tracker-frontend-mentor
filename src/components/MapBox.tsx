import {useEffect, FunctionComponent} from "react";
import {MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from '../assets/icon-location.svg';

type MapProps = {
    lng: number,
    lat: number,
}

const MapBox: FunctionComponent<MapProps> = ({lng, lat}) => {
    const Recenter = () => {
        const map = useMap();

        useEffect(() => {
            map.setView([lat, lng]);
            map.setZoom(11);
        }, [lng, lat]);

        return null;
    };

    const icon = new Icon({
        iconUrl: locationIcon,
        iconAnchor: [23, 56],
    });

    return <MapContainer center={[lat, lng]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}
                icon={icon}/>
        <Recenter/>
    </MapContainer>;
};

export default MapBox;
