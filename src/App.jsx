import './App.css';

import Map from './components/Map';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Map width={'100%'} height={'60%'} />
        </>
    );
}

export default App;
