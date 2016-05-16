import React from 'react';
import debug from '../utils/debug';

export default class EffectBar extends React.Component {
  static get propTypes() {
    return {
      style: React.PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      range: 0,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.setState({ range: event.target.value });
  }

  render() {
    debug('[R] : EffectBar');
    return (
      <div
        className="EffectBarContainer"
        style={ this.props.style }
      > <input
        className="EffectBar"
        type="range"
        value={ this.state.value }
        onChange={ this.onChangeValue }
        />
      </div>
    );
  }
}
