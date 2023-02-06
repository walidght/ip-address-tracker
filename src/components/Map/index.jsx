import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import RecenterMap from '../RecenterMap';
import style from './style.module.css';
import MarkerIcon from '../MarkerIcon';

const Map = ({ height, width, latitude = 0, longitude = 0, zoom = 10 }) => {
    return (
        <div style={{ height, width }} className={style.container}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={zoom}
                scrollWheelZoom={false}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[latitude, longitude]} icon={MarkerIcon} />
                <RecenterMap latitude={latitude} longitude={longitude} />
            </MapContainer>
        </div>
    );
};

export default Map;
