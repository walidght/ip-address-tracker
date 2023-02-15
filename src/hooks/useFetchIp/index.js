import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_IPIFY_KEY;
const URL = process.env.REACT_APP_API_URL;

const queryClient = new QueryClient();

const getLocationData = (searchQ) => {
    return axios
        .get(URL, {
            params: {
                apiKey: API_KEY,
                ipAddress: searchQ?.type === 'ip' ? searchQ.value : undefined,
                domain: searchQ?.type === 'domain' ? searchQ.value : undefined,
            },
        })
        .then((response) => response.data)
        .then((data) => ({
            ip: data.ip,
            isp: data.isp,
            timezone: data.location.timezone,
            location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
            longitude: data.location.lng,
            latitude: data.location.lat,
        }));
};

export const ClientProvider = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const useFetchIp = ({ searchQ }) =>
    useQuery({
        queryKey: ['ip', searchQ.value],
        queryFn: () => getLocationData(searchQ),
        staleTime: 1000 * 60 * 10, // 10 minutes
        cacheTime: 1000 * 60 * 10,
    });
