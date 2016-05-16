import React from 'react';
import debug from '../utils/debug';
import SomebodyScream from '../utils/SomebodyScream';

export default class RedEffectButton extends React.Component {
  static get propTypes() {
    return {
      style: React.PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      effect: false,
      style: {
        background: 'linear-gradient(to bottom, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 51%,#e0eff9 100%)',
      },
    };
    this.onPlay = this.onPlay.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onPlay() {
    debug('[E] : <RedEffectButton> <-- onPlay', 'green');
    const bg = 'linear-gradient(to bottom, #efc5ca 0%,#d24b5a 50%,#ba2737 51%,#f18e99 100%)';
    const scream = new SomebodyScream();
    scream.play();
    this.setState({
      scream,
      effect: true,
      style: { background: bg },
    });
  }

  onStop() {
    debug('[E] : <RedEffectButton> --> onStop', 'green');
    const bg = 'linear-gradient(to bottom, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 51%,#e0eff9 100%)';
    this.state.scream.stop();
    this.setState({
      scream: null,
      effect: false,
      style: { background: bg },
    });
  }

  render() {
    debug('[R] : RedEffectButton');
    return (
      <div style={ this.props.style }>
        <div
          className="RedEffectButton"
          style={ this.state.style }
          onMouseDown={ this.onPlay }
          onMouseUp={ this.onStop }
        />
      </div>
    );
  }
}
