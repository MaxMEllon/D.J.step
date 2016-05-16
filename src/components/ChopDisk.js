import React from 'react';
import debug from '../utils/debug';

export default class ChopDisk extends React.Component {
  static get propTypes() {
    return {
      style: React.PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      className: '',
    };
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart() {
    debug('[E] <ChopDisk> <-- onDragStart', 'green');
    this.setState({ className: 'myspin' });
  }

  onDragEnd() {
    debug('[E] <ChopDisk> --> onDragEnd', 'green');
    this.setState({ className: '' });
  }

  render() {
    debug('[R] : ChopDisk');
    return (
      <div
        className="ChopDiskContainer"
        style={ this.props.style }
      > <div className={`ChopDiskOutLine ${this.state.className}`}>
          <div
            className="ChopDisk"
            onMouseEnter={this.onDragStart}
            onMouseLeave={this.onDragEnd}
          > <div className="ChopDiskCentor">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
