import React, {Component} from 'react';
import axios from 'axios';
import Output from './Components/Output';
import Text from './Components/Controls/Text';
import Select from './Components/Controls/Select';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      format: 'html',
      text: ''
    }
  }

  componentWillMount() {
    this.getText();
  }

  getText() {

    axios
      .get('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&start-with-lorem=1&format=' + this.state.format)
      .then((response) => {
        this.setState({text: response.data});
      })
      .catch((err) => {
        console.log(err);
      });

  }

  changeParas(number) {
    this.setState({paras: number}, this.getText);
  }

  changeFormat(format) {
    this.setState({format: format}, this.getText);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dummy Text Generator</h1>
        </header>
        <h1>Output</h1>
        <div className="container">
          <div className="output">
            <Output value={this.state.text}/>
          </div>
        </div>
        <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
        <Select value={this.state.format} onChange={this.changeFormat.bind(this)}/>
      </div>
    );
  }
}

export default App;
