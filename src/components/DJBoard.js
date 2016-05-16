import React from 'react';
import debug from '../utils/debug';
import RedEffectButton from './RedEffectButton';
import ChopDisk from './ChopDisk';

export default class DJBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debug('[R] : DJBoard');
    return (
      <div className='DJBoardContainer'>
        <ChopDisk />
        <RedEffectButton />
      </div>
    );
  }
}
