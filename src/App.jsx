import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import Map from './components/Map';
import Header from './components/Header';

const API_KEY = process.env.REACT_APP_IPIFY_KEY;

function App() {
    const [locationData, setLocationData] = useState({
        longitude: 0,
        latitude: 0,
    });

    const [searchQ, setSearchQ] = useState({ value: '', type: null });

    useEffect(() => {
        const fetchLocationData = async () => {
            let searchParam = '';
            if (searchQ.type === 'ip') {
                searchParam = `&ipAddress=${searchQ.value}`;
            } else if (searchQ.type === 'domain') {
                searchParam = `&domain=${searchQ.value}`;
            }

            try {
                const reponse = await axios.get(
                    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${searchParam}`
                );

                const data = await reponse.data;

                const newLocationData = {
                    ip: data.ip,
                    isp: data.isp,
                    timezone: data.location.timezone,
                    location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
                    longitude: data.location.lng,
                    latitude: data.location.lat,
                };

                setLocationData(newLocationData);
            } catch (error) {
                alert(
                    'Something went wrong.\nPlease make sure you entered a valid IP/Domain.'
                );
            }
        };
        fetchLocationData();
    }, [searchQ]);

    return (
        <>
            <Header
                data={locationData}
                searchQ={searchQ}
                setSearchQ={setSearchQ}
            />
            <Map
                width={'100%'}
                height={'60%'}
                latitude={locationData.latitude}
                longitude={locationData.longitude}
            />
        </>
    );
}

export default App;
