import React, {Component} from 'react'
import {render} from 'react-dom'

import Timeline from '../../src/Timeline'
import TimelineEvent from '../../src/Event'
import TimelineIcon from '../../src/Icon'
import Milestone from '../../src/Milestone'

class Demo extends Component {

  render () {
    let targetIconSrc = "https://lh3.googleusercontent.com/dL5wUTeOrTETTKAw1XiJcO6i3TvFJn3zOSKMBcGkzt42Kxt8jFHPHbtbqCvzZiFVcw=s180"
    let fullImageIconSrc = "https://pbs.twimg.com/profile_images/877216729432240129/FixOob6K_400x400.jpg"

    return <div>
      <h1>test Demo</h1>
      <Timeline >
        <TimelineEvent iconImgSrc={targetIconSrc} title='Job #1'>
          Event 1
        </TimelineEvent>
        <Milestone title='milestone 1' text='Joined Target' />
        <TimelineEvent iconImgSrc={fullImageIconSrc} title='Job #2'>
          Event 2
        </TimelineEvent>
        <TimelineEvent iconImgSrc={fullImageIconSrc}>
          Event 3
        </TimelineEvent>
        <TimelineEvent iconImgSrc={targetIconSrc} title='Job #3'>
          Event 4
        </TimelineEvent>
        </Timeline>
    </div>
  }
}

// render(<Demo/>, document.querySelector('#demo'))
render(<Demo />, document.getElementById('root'));
