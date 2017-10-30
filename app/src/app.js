import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "John Doe";
  }
  getName() {
    return this.name;
  }
  render() {
    return(
      <h1>Hello { this.getName() }!</h1>
      );
  }
}

const App = document.getElementById('app');
ReactDOM.render(<Layout/>, App);