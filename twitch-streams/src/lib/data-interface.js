import fetchJsonp from 'fetch-jsonp';

import { notify } from 'react-notify-toast';

import streamsArr from './data.json';
import Stream from './stream';
import { TWITCH_URL } from './constants';

const API_KEY = 'j2m7to7ft669avlejckfi69iroc81ax';


export default class DataInterface {
  constructor() {
    this.streams = [];
  }

  loadStreams() {
    this.streams = streamsArr.map((channel) => {
      if (channel.error) {
        notify.show(channel.message);
        return null;
      }
      if (channel.stream) {
        const stream = channel.stream;
        return new Stream(stream.display_name, stream.game, stream.url, stream.logo, true);
        // channel is streaming
      }
      // channel isn't streaming
      return new Stream(channel.display_name, '', '', '', false);
    }).filter(s => !!s);
    return Promise.resolve(this.streams);
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
