import style from './style.module.css';
import Input from '../Input';
import Info from '../Info';

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <h1>IP Address Tracker</h1>
                <Input />
            </div>
            <Info />
        </div>
    );
};

export default Header;
