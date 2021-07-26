import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <h2> Welcome to Meme Generator </h2>
      </div>
    );
  }
 
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps,null)(App);
