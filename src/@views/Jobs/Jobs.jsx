import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import { useSelector } from '@store'
import { selectJobs, fetchJobs } from '@store/jobs'
import { ItemList, Loading } from '@components'
import useStyles from './Jobs.styles'

const Jobs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const jobs = useSelector(selectJobs)

  useEffect(() => dispatch(fetchJobs()), [dispatch])

  if (jobs.fetching === 'error') return <Redirect to='/error' />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title='jobs' />
      {jobs.fetching ? <Loading /> : <ItemList items={jobs.items} />}
    </Container>
  )
}

export default Jobs
