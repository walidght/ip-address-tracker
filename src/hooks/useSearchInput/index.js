import { useContext, createContext, useState } from 'react';

const SearchInputContext = createContext([{}, () => null]);

export const useSearchInput = () => {
    return useContext(SearchInputContext);
};

export const SeachInputProvider = ({ children }) => {
    const [searchQ, setSearchQ] = useState({});

    return (
        <SearchInputContext.Provider value={[searchQ, setSearchQ]}>
            {children}
        </SearchInputContext.Provider>
    );
};
