import { createContext, ReactNode, useContext } from 'react';
import useLocalStorage from '../hooks/uselocalstorage';

interface Value {
    darkMode: boolean | null;
    setDarkMode: (
        _value: boolean | ((_value: boolean | null) => boolean | null) | null
    ) => void;
}

const ThemeProviderContext = createContext<Value | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    const value: Value = {
        darkMode,
        setDarkMode,
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useDarkMode = () => {
    const darkMode = useContext(ThemeProviderContext)?.darkMode;
    const setDarkMode = useContext(ThemeProviderContext)?.setDarkMode;
    if (typeof darkMode !== 'undefined' && typeof setDarkMode !== 'undefined')
        return { darkMode, setDarkMode };
};