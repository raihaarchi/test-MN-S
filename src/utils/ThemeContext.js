import React from 'react';

const ThemeContext = React.createContext({
  theme: {
    themeName: 'light',
    sidebarBg: '#F4F4F4',
    sidebarBgActive: '#FAFAFA',
    sidebarIcon: '#000000',
    sidebarText: '#000000',
    pageBg: '#ffffff',
    logoBorderColor: '#5B5B5B',
    ruwardMiddleStar: '#030203',
    ruwardLabel: '#030203',
    ruwardPlacement: '#000000',
    contactIcons: '#5B5B5B',
  },
  setTheme: () => {},
});

export default ThemeContext;
