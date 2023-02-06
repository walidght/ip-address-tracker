import style from './style.module.css';
import arrowIcon from '../../assets/icon-arrow.svg';
import { useState } from 'react';
import isIpAddress from '../../helpers/isIpAddress';

const Input = ({ searchQ, setSearchQ }) => {
    const [value, setValue] = useState(searchQ.value);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    const handleOnClick = () => {
        if (isIpAddress(value)) {
            setSearchQ({ value, type: 'ip' });
        } else {
            setSearchQ({ value, type: 'domain' });
        }
    };

    return (
        <div className={style.container}>
            <input
                placeholder="Search for any IP address or domain"
                type="text"
                value={value}
                onChange={handleOnChange}
            />
            <button onClick={handleOnClick}>
                <img src={arrowIcon} alt="" />
            </button>
        </div>
    );
};

export default Input;
