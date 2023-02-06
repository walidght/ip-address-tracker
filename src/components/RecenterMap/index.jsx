import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const RecenterMap = ({ latitude, longitude }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([latitude, longitude]);
    });
    return null;
};

export default RecenterMap;
