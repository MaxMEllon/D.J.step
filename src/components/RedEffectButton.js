import React from 'react';
import debug from '../utils/debug';

export default class RedEffectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      effect: false,
      style: {
        background: 'linear-gradient(to bottom, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 51%,#e0eff9 100%)',
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    debug('[E] : <RedEffectButton> onClick', 'green');
    const effect = ! this.state.effect;
    const bg = effect === true
      ? 'linear-gradient(to bottom, #efc5ca 0%,#d24b5a 50%,#ba2737 51%,#f18e99 100%)'
      : 'linear-gradient(to bottom, #f2f6f8 0%,#d8e1e7 50%,#b5c6d0 51%,#e0eff9 100%)';
    this.setState({
      effect,
      style: { background: bg },
    });
  }

  render() {
    debug('[R] : RedEffectButton');
    return (
      <div>
        <div
          className="RedEffectButton"
          style={this.state.style}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
