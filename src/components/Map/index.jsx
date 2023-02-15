import style from './style.module.css';
import { useSearchInput } from '../../hooks/useSearchInput';
import { useFetchIp } from '../../hooks/useFetchIp';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerIcon from '../MarkerIcon';
import RecenterMap from '../RecenterMap';

const Map = ({ height, width, zoom = 10 }) => {
    const [searchQ, setSearchQ] = useSearchInput();

    const { isLoading, isError, error, data, isSuccess } = useFetchIp({
        searchQ,
    });

    if (isLoading) return <h1>loading...</h1>;

    if (isError) return <h1>{error.message}</h1>;

    if (isSuccess)
        return (
            <div style={{ height, width }} className={style.container}>
                <MapContainer
                    center={[data.latitude, data.longitude]}
                    zoom={zoom}
                    scrollWheelZoom={false}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        position={[data.latitude, data.longitude]}
                        icon={MarkerIcon}
                    />
                    <RecenterMap
                        latitude={data.latitude}
                        longitude={data.longitude}
                    />
                </MapContainer>
            </div>
        );
};

export default Map;
