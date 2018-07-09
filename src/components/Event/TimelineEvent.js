import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import TimelineIcon from '../Icon/TimelineIcon'
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  verticalLine : {
      borderLeft: '2px solid black',
      height: '100%',
      position: 'absolute',
      left: '50%',
  },
  iconColumn : {
    textAlign: 'center'
  }

})

class TimelineEvent extends Component {

  render() {
    const {
      classes,
      orientation,
      iconWidth,
      iconHeight,
      iconImgSrc,
      title,
    } = this.props

    let eventRow = (orientation === 'right') ?
      <Grid container >
        <Grid className="padded-column" xs={5}/>
        <Grid className={classes.iconColumn} xs={2}>
          <div className={classes.verticalLine}/>
          <TimelineIcon iconImgSrc = {iconImgSrc}
                                height={iconHeight}
                                width={iconWidth}
                                orientation = {orientation}/>
        </Grid>
        <Grid xs={5} className="bounce">
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
              <Typography component="p">
                {this.props.children}
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
      </Grid>
       :
       <Grid container >
         <Grid xs={5} className="bounce">
             <ExpansionPanel defaultExpanded>
               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                 <Typography className={classes.heading}>{title}</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
               <Typography component="p">
                 {this.props.children}
               </Typography>
               </ExpansionPanelDetails>
             </ExpansionPanel>
         </Grid>
         <Grid className={classes.iconColumn} xs={2}>
          <div className={classes.verticalLine}/>
             <TimelineIcon iconImgSrc = {iconImgSrc}
                                 height={iconHeight}
                                 width={iconWidth}
                                 orientation = {orientation}/>
         </Grid>
         <Grid className="padded-column" xs={5}/>
       </Grid>

    return (
        <Grid container spacing={24}>
          {eventRow}
        </Grid>
    );
  }
}

TimelineEvent.displayName = 'TimelineEvent'

TimelineEvent.propTypes = {

  title: PropTypes.node.isRequired,
  icon: PropTypes.string,
  iconImgSrc: PropTypes.string,
  iconColor: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
  content: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['left','right'])
}

TimelineEvent.defaultProps = {
  classes: {},
  title: "Timeline Event",
  icon: "star_rate",
  iconColor: "red",
  iconHeight: "80px",
  iconWidth: "80px",
  content: "default content",
  orientation: "right"

}

export default withStyles(styles)(TimelineEvent)
