import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      name: ''
    }

    this.handleHideClick = this.handleHideClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleHideClick () {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleTextChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={this.handleTextChange} />
        <input type="submit" value="afficher/cacher" onClick={this.handleHideClick} />
        <HelloWorld visible={true} name={this.state.name} />
        <HelloWorld visible={this.state.visible} name="world !"/>
      </div>
    );
  }
}

export default App;
