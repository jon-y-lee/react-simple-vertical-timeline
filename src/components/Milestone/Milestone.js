import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  wrapper: {
    maxWidth: 400,
    float: 'none',
    margin: '0 auto'
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    borderRadius: '10%',
  },
})

let milestoneStyle = {
  textAlign: 'center',
  backgroundColor : 'red'
}

class Milestone extends Component {

  getMergedStyles() {
    return {...milestoneStyle, ...this.props.paper, backgroundColor: this.props.color}
  }

  render() {
    const {
      classes,
      title,
      text,
    } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper style={this.getMergedStyles()}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{title}</Typography>
                <Typography noWrap>{text}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Milestone.displayName = 'Milestone'

Milestone.propTypes = {

  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  color: PropTypes.string,
}

Milestone.defaultProps = {
  classes: {},
  title: "Timeline Event",
  text: "",
  color: "tomato"
}

export default withStyles(styles)(Milestone)
