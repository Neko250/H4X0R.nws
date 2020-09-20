import React, { useCallback } from 'react'
import {
  ButtonBase,
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { version } from 'H4x0rNws'
import { HomeIcon, InfoIcon, JobsIcon, StoriesIcon } from '@components/icons'
import logo from '@svg/h4x0r.nws.svg'

const DrawerContent = ({ classes, history, location, toggleDrawer }) => {
  const activeColor = useCallback(
    (path, location) => (location.pathname === path ? 'primary' : undefined),
    []
  )

  return (
    <>
      <nav onClick={() => toggleDrawer(false)}>
        <div className={classes.toolbar} />

        <center>
          <ButtonBase className={classes.logoButton} onClick={() => history.push('/menu')}>
            <img src={logo} alt='logo' className={classes.logo} />
          </ButtonBase>
        </center>

        <List disablePadding classes={{ root: classes.toolbar }}>
          <ListItem button key='home' onClick={() => history.push('/menu')}>
            <ListItemIcon>
              <HomeIcon color={activeColor('/menu', location)} />
            </ListItemIcon>
            <ListItemText
              primary='H4X0R.nws'
              primaryTypographyProps={{ color: activeColor('/', location) }}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='stories' onClick={() => history.push('/stories')}>
            <ListItemIcon>
              <StoriesIcon color={activeColor('/stories', location)} />
            </ListItemIcon>
            <ListItemText
              primary='stories'
              primaryTypographyProps={{ color: activeColor('/stories', location) }}
            />
          </ListItem>
          <ListItem button key='jobs' onClick={() => history.push('/jobs')}>
            <ListItemIcon>
              <JobsIcon color={activeColor('/jobs', location)} />
            </ListItemIcon>
            <ListItemText
              primary='jobs'
              primaryTypographyProps={{ color: activeColor('/jobs', location) }}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='about' onClick={() => history.push('/about')}>
            <ListItemIcon>
              <InfoIcon color={activeColor('/about', location)} />
            </ListItemIcon>
            <ListItemText
              primary='about'
              primaryTypographyProps={{ color: activeColor('/about', location) }}
            />
          </ListItem>
        </List>
      </nav>

      <Divider />

      <Grid container className={classes.footer}>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>
            hacker news pwa
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' align='center'>
            made by{' '}
            <Link href='https://github.com/Neko250' target='_blank'>
              neko250
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} container justify='center'>
          <Chip
            label={`v${version}`}
            clickable
            component='a'
            href='https://github.com/Neko250/H4X0R.nws'
            target='_blank'
            size='small'
            color='primary'
            variant='outlined'
            className={classes.version}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default DrawerContent