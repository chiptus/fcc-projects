const dataInterface = new DataInterface();
const WIKI_URL = "";
ReactDom.render(<WikipediaApp dataInterface={dataInterface}/>, document.getElementById('app'));

class WikipediaApp extends React.Element {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;
  }
  
  render(){
    return (
      <div>
        <TopBar search={this.search} randomSubject={this.randomSubject}></TopBar>
        <Main results={this.props.list}></Main>
      </div>
    );
  }

  search(val){
    console.log(val);
    fetch(WIKI_URL).then(result => this.dataInterface.setResults(results));
  }

  randomSubject(){
    console.log("randomSubject");
  }
}

WikipediaApp.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface)
};

const TopBar = ({search, randomSubject}) => ( 
  <div>
    <input placeholder="What do you want to search for?" ref={((c) => { this.inputField = c; })}/>
    <button onClick={() => search(this.inputField.value)}><i class="fa fa-search">S</i></button>
    <button onClick={() => randomSubject()}>Random subject</button>
  </div>
);

TopBar.propTypes = {
  search: React.PropTypes.func,
  randomSubject: React.PropTypes.func,
}

const Main = ({results}) => {
  if (!results.length) {
    return (<div>No results!</div>);
  }
  return (
  <div>
    <h3>Results</h3>
    <ResultsList results={results}></ResultsList>
  </div>
  );
}

Main.propTypes = {
  results: React.PropTypes.arrayof(React.PropTypes.instanceof(Result))
}

const ResultsList = ({results}) => (
  <div>
    {
      for(let result in results){
        (
          <ResultView result={result}></ResultView>
        )
      }
    }
  </div>
);

ResultsList.propTypes = {
  results: React.PropTypes.arrayof(React.PropTypes.instanceof(Result))
}

const ResultView = ({result}) => (
  <div>
    <img src={result.imageUrl}></img>
    <h4>{result.title}</h4>
    <div>{result.desc}</div>
  </div>
);

class DataInterface {
  constructor(){
    this.list = [];
  }

  setResults(results){
    this.list = results;
  }
}

class Result {
  constructor(imageUrl, title, desc) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.desc = desc;
  }
  
}