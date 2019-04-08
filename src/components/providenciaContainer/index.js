import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import ProvidenciaTabs from '../providenciasTabs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 1500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

function ComplexGrid (props) {
  const { classes } = props
  return (
    <div >
      <Paper className={classes.paper}>
        {
        //   <ProvidenciaTabs />
        }
      </Paper>
    </div>
  )
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ComplexGrid)
