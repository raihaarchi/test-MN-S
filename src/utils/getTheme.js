const themes = {
  light: {
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
  dark: {
    themeName: 'dark',
    sidebarBg: '#1b1b32',
    sidebarBgActive: '#0E0E1E',
    sidebarIcon: '#ffffff',
    sidebarText: '#ffffff',
    pageBg: '#03031C',
    logoBorderColor: '#ffffff',
    ruwardMiddleStar: '#424242',
    ruwardLabel: '#ffffff',
    ruwardPlacement: '#ffffff',
    contactIcons: '#ffffff',
  },
};

export default (cookie) => themes[cookie];
