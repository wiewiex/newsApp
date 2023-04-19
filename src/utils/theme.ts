export interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    senary: string;
  };
  fonts: {
    primary: string;
  };
  appName: string;
}

const theme: ThemeInterface = {
  colors: {
    primary: '#d5d3de',
    secondary: '#ffffff',
    tertiary: '#e3e3e1',
    quaternary: '#505050',
    quinary: '#ececea',
    senary: '#ececea',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
  },
  appName: 'newsApp',
};

export default theme;
