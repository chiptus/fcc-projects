export default class Result {
  constructor(title, desc, link) {
    if (typeof title === "string") {
      this.link = link;
      this.title = title;
      this.desc = desc;
    }
    if (typeof title === "object") {
      this.title = title.title;
      this.desc = title.extract;
      this.link = this.buildLink(title.pageid);
      if (title.thumbnail){
       this.imageUrl = title.thumbnail.source;
      }
      this.id = title.pageid;
    }
  }
  
  buildLink(pageId){
    return `https://en.wikipedia.org/?curid=${pageId}`
  }
}
