import style from './style.module.css';
import { useSearchInput } from '../../hooks/useSearchInput';
import { useFetchIp } from '../../hooks/useFetchIp';

const Info = () => {
    const [searchQ, setSearchQ] = useSearchInput();
    const { isLoading, isError, error, data, isSuccess } = useFetchIp({
        searchQ,
    });

    if (isLoading)
        return (
            <div className={style.container}>
                <h1>loading...</h1>
            </div>
        );

    if (isError)
        return (
            <div className={style.container}>
                <h1>{error.message}</h1>
            </div>
        );

    if (isSuccess)
        return (
            <div className={style.container}>
                <div className={style.attr}>
                    <p>IP ADDRESS</p>
                    <p>{data.ip}</p>
                </div>
                <div className={style.attr}>
                    <p>LOCATION</p>
                    <p>{data.location}</p>
                </div>
                <div className={style.attr}>
                    <p>TIMEZONE</p>
                    <p>{data.timezone}</p>
                </div>
                <div className={style.attr}>
                    <p>ISP</p>
                    <p>{data.isp}</p>
                </div>
            </div>
        );
};

export default Info;
