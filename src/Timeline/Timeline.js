import React, { Component } from 'react';
import {object} from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  parent : {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap'
  },
  left : {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
      textAlign: 'right',
      height:'100%',
      position: 'relative'
  },
  right : {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
      textAlign: 'left',
      height:'100%',
      position: 'relative'
  },
})

let centerLine = {
    borderLeft: '2px solid black',
    height: '100%',
    position: 'absolute',
    left: '50%',
  };

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  mergeCenterLineStyle() {
      return  {...centerLine}
  }

  render() {
    const {
      children,
      classes,
      orientation
    } = this.props;

    var layoutOrientation = 'right';

    const childrenWithProps = React.Children.map(children, (child, i) =>
      {
        if (orientation === 'right' || !child.type.displayName.includes("TimelineEvent")) {
          return  <div className={classes.left}>{React.cloneElement(child, { orientation: 'right' })}</div>
        } if (orientation === 'left') {
          return  <div className={classes.right}>{React.cloneElement(child, { orientation: 'right' })}</div>
        } else {
          layoutOrientation = (layoutOrientation === 'left') ? 'right' : 'left';
          return <div className={classes.left}>{React.cloneElement(child, { orientation: layoutOrientation })}</div>
        }
      }
    );

    return (
    <div className={classes.root}>
      {childrenWithProps}
    </div>
    );
  }
}

Timeline.displayName = 'Timeline'

Timeline.propTypes = {
  classes: object,
  width: object,
}

Timeline.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Timeline)
