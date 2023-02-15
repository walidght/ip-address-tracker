import { Icon } from 'leaflet';
import marker from '../../assets/icon-location.svg';

const MarkerIcon = new Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [46, 56],
});

export default MarkerIcon;
