import style from './style.module.css';

const Info = ({ data: { ip, location, timezone, isp } }) => {
    return (
        <div className={style.container}>
            <div className={style.attr}>
                <p>IP ADDRESS</p>
                <p>{ip}</p>
            </div>
            <div className={style.attr}>
                <p>LOCATION</p>
                <p>{location}</p>
            </div>
            <div className={style.attr}>
                <p>TIMEZONE</p>
                <p>{timezone}</p>
            </div>
            <div className={style.attr}>
                <p>ISP</p>
                <p>{isp}</p>
            </div>
        </div>
    );
};

export default Info;
