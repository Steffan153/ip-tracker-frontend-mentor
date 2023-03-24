import {useEffect, useRef, FunctionComponent} from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

type MapProps = {
    lng: number,
    lat: number,
}

const MapBox: FunctionComponent<MapProps> = ({lng, lat}) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const marker = useRef<mapboxgl.Marker | null>(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [0, 0],
            zoom: 14,
        });
        map.current.addControl(new mapboxgl.NavigationControl());
        marker.current = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map.current);
    }, []);

    useEffect(() => {
        marker.current?.setLngLat([lng, lat]);
        map.current?.setCenter([lng, lat]).setZoom(14);
    }, [lng, lat]);

    return <div className="h-full" ref={mapContainer}/>;
};

export default MapBox;