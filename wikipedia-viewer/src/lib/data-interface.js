export default class DataInterface {
  constructor() {
    this.results = [];
  }

  setResults(results) {
    this.results = results;
  }
  
  getResults(){
    return this.results;
  }
}
