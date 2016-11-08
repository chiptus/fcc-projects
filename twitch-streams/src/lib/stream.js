export default class Stream {
  constructor(name, gameName = '', url = '', logo = 'http://www.free-icons-download.net/images/blocked-icon-7877.png', online = false) {
    if (!name) {
      throw new Error('Missing name of stream');
    }
    this.name = name;
    this.gameName = gameName;
    this.logo = logo;
    this.url = url;
    this.online = online;
  }

  static buildStream(twitchStream) {
    return new Stream(twitchStream.display_name,
      twitchStream.game,
      twitchStream.url,
      twitchStream.logo, true);
  }
}
