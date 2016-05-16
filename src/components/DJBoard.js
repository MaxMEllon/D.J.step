import React from 'react';
import debug from '../utils/debug';
import RedEffectButton from './RedEffectButton';
import ChopDisk from './ChopDisk';
import EffectBar from './EffectBar';

export default function DJBoard() {
  debug('[R] : DJBoard');
  return (
    <div className="DJBoardContainer">
      <div style={{ display: '-webkit-box' }}>
        <div style={{ display: 'table' }}>
          <div style={{ display: '-webkit-box' }}>
            <RedEffectButton />
            <RedEffectButton />
            <RedEffectButton />
            <RedEffectButton />
          </div>
          <div style={{ display: '-webkit-box' }}>
            <RedEffectButton />
            <RedEffectButton />
            <RedEffectButton />
            <RedEffectButton />
          </div>
          <div style={{ display: '-webkit-box' }}>
            <EffectBar />
            <EffectBar />
            <EffectBar />
            <EffectBar />
          </div>
        </div>
        <ChopDisk />
      </div>
    </div>
  );
}
