import { createMuiTheme } from '@material-ui/core'
import { responsiveFontSizes } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: orange,
      secondary: {
        light: '#4c4c4c',
        main: '#202020',
        dark: '#161616',
        contrastText: '#fff'
      }
    },
    typography: {
      fontFamily: 'IBM Plex Sans, Helvetica Neue, Helvetica, Segoe UI, sans'
    }
  })
)

export default theme