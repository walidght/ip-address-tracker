import Info from '../Info';
import Input from '../Input';
import style from './style.module.css';

const Header = ({ data, searchQ, setSearchQ }) => {
    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <h1>IP Address Tracker</h1>
                <Input searchQ={searchQ} setSearchQ={setSearchQ} />
            </div>
            <Info data={data} />
        </div>
    );
};

export default Header;
