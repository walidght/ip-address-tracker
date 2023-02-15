import style from './style.module.css';
import { useRef } from 'react';
import { useSearchInput } from '../../hooks/useSearchInput';
import isIpAddress from '../../helpers/isIpAddress';
import arrowIcon from '../../assets/icon-arrow.svg';

const Input = () => {
    const inputRef = useRef();
    const [searchQ, setSearchQ] = useSearchInput();

    const handleOnClick = () => {
        const value = inputRef.current.value;
        if (isIpAddress(value)) {
            setSearchQ({ value, type: 'ip' });
        } else {
            setSearchQ({ value, type: 'domain' });
        }
    };

    return (
        <div className={style.container}>
            <input
                ref={inputRef}
                placeholder="Search for any IP address or domain"
                type="text"
            />
            <button onClick={handleOnClick}>
                <img src={arrowIcon} alt="" />
            </button>
        </div>
    );
};

export default Input;
