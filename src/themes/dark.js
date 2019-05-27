import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#111',
      white: '#eee'
    },
    primary: orange,
    secondary: {
      light: '#4c4c4c',
      main: '#202020',
      dark: '#161616',
      contrastText: '#fff'
    },
    error: {
      light: '#4c4c4c',
      main: '#202020',
      dark: '#161616',
      contrastText: '#fff'
    },
    text: {
      primary: '#eee'
    },
    background: {
      paper: '#222',
      default: '#111'
    }
  },
  typography: {
    fontFamily: 'IBM Plex Mono, Consolas, Monaco, system monospace'
  }
}))

export default theme
