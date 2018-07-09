import React, { Component } from 'react';
import {object} from 'prop-types'
import PropTypes from 'prop-types';

import '../../App.css';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
})

let badgeStyles = {
  badge : {
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    display: 'inline-block',
    border: '1px solid',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  iconShiftLeft: {
    height: '80px',
    width: '80px',
    textAlign: 'center',
    position: 'relative'
  },

  iconShiftRight: {
    height: '80px',
    width: '80px',
    textAlign: 'center',
    position: 'relative'
  }
}


class TimelineIcon extends Component {

  mergeBadgeStyle() {
    if (this.props.orientation === 'left')
      return {...badgeStyles.badge, ...this.props, ...badgeStyles.iconShiftLeft}
    else
      return  {...badgeStyles.badge, ...this.props, ...badgeStyles.iconShiftRight}
  }

  render() {
    return (
        <img style={this.mergeBadgeStyle()} src={this.props.iconImgSrc} alt=""/>
    );
  }
}

TimelineIcon.displayName = 'TimelineIcon'

TimelineIcon.propTypes = {
  classes: object,
  icon: PropTypes.string,
  iconImgSrc: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  orientation: PropTypes.string
}

TimelineIcon.defaultProps = {
  classes: {},
  height: '50px',
  width: '50px',
}

export default withStyles(styles)(TimelineIcon)
