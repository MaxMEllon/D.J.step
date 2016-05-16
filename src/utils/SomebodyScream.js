import debug from './debug';

const context = new window.AudioContext();
const request = new XMLHttpRequest();

request.open('GET', '/assets/sound/3bai.wav');
request.responseType = 'arraybuffer';
request.send();

let res = null;

request.onload = () => { res = request.response; };

export default class SomebodyScream {
  constructor() {
    context.decodeAudioData(res, buf => {
      this.source = context.createBufferSource();
      // Array.prototype.reverse.call(buf.getChannelData(0));
      this.source.buffer = buf;
      this.source.connect(context.destination);
    });
  }

  play() {
    setTimeout(() => {
      this.source.start();
      // let rate = 1;
      // setInterval(() => {
      //   this.source.playbackRate.value = rate;
      //   rate += 0.1;
      // }, 10);
    }, 10);
  }

  stop() {
    this.source.stop();
  }
}


