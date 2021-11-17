import { useState, useContext, useEffect } from 'react';
import ThemeContext from '../utils/ThemeContext';
import getTheme from '../utils/getTheme';

const useTheme = () => {
  const context = useContext(ThemeContext);

  const setTheme = (theme) => {
    // debugger;
    setState((arg) => ({
      theme,
      setTheme: arg.setTheme,
    }));
  };

  const [state, setState] = useState({
    theme: context.theme,
    setTheme,
  });

  const ThemeContextProvider = ThemeContext.Provider;
  const ThemeContextConsumer = ThemeContext.Consumer;
  const isLight = context.theme.themeName === 'light';

  return {
    ThemeContextProvider,
    ThemeContextConsumer,
    state,
    isLight,
    context,
  };
};

export default useTheme;

export const SetThemeByName = (themeName) => {
  const { setTheme } = useTheme().state;
  useEffect(() => {
    const theme = getTheme(themeName);
    setTheme(theme);
  }, [themeName, setTheme]);
};
