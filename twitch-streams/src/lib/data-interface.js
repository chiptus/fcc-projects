import fetchJsonp from 'fetch-jsonp';

import Stream from './stream';
import { TWITCH_URL } from './constants';

const API_KEY = 'j2m7to7ft669avlejckfi69iroc81ax';

export default class DataInterface {
  constructor() {
    this.streams = [];
  }

  loadStreams(streams = []) {
    if (!streams.length) {
      return Promise.resolve([]);
    }
    return Promise.all(
      streams.map(s =>
        fetchJsonp(`https://api.twitch.tv/kraken/channels/${s}?client_id=${API_KEY}`)
          .then(r => r.json())
          .then((ch) => {
            if (ch.error) {
              return new Stream(s);
            }
            return Stream.buildStream(ch);
          }
          )
      )
    ).then((sts) => { this.streams = sts; return sts; });
  }

  setStreams(streams = []) {
    this.streams = streams;
  }

  getStreams() {
    return this.streams;
  }

  addStream(streamName) {
    if (!streamName) {
      return Promise.reject('missing name');
    }
    return fetchJsonp(`${TWITCH_URL}/${streamName}?client_id=${API_KEY}`)
      .then(r => r.json())
      .then(({ stream: { channel } }) => {
        let stream = new Stream(streamName, '', '', undefined, false);
        if (channel) {
          stream = Stream.buildStream(channel);
        }
        this.streams.unshift(stream);
        return stream;
      });
  }

  removeStream(stream) {
    this.streams = this.streams.filter(e => e.name !== stream.name);
  }
}
