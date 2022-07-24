import { createTheme } from '@mui/material'
const drawerWidth = 240

export const appTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'white'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          style: {
            fontSize: '15.8px'
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          '& .Mui-selected': {
            backgroundColor: '#008FD0 !important'
          },
          color: '#FFF',
          backgroundColor: '#02A3EC',
          width: drawerWidth
        }
      }
    }
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  spacing: 8,
  palette: {
    primary: {
      light: '#F2FBFF',
      main: '#02A3EC', // process.env.REACT_APP_IS_PRODUCTION === "0" ? blue : blueGrey,
      dark: '#01608B',
      contrastText: '#fff'
    },
    background: {
      default: '#FFF'
    }
  }
})
