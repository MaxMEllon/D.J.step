import React from 'react';
import debug from '../utils/debug';
import RedEffectButton from './RedEffectButton';
import ChopDisk from './ChopDisk';

export default function DJBoard() {
  debug('[R] : DJBoard');
  return (
    <div className="DJBoardContainer">
      <ChopDisk />
      <RedEffectButton />
    </div>
  );
}
