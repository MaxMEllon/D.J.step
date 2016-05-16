const context = new window.AudioContext();

let buffer = null;

const request = new XMLHttpRequest();

request.open('GET', '/assets/sound/3bai.wav');
request.responseType = 'arraybuffer';
request.send();

request.onload = () => {
  const res = request.response;
  context.decodeAudioData(res, buf => {
    buffer = buf;
  });
};

export default class SomebodyScream {
  constructor() {
    this.source = context.createBufferSource();
    this.source.buffer = buffer;
    this.source.connect(context.destination);
  }

  play() {
    this.source.start();
  }

  stop() {
    this.source.stop();
  }
}


