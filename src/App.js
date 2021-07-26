import React ,{ Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      memelimit:10
    }
  }

  render() {
    return (
      <div className="App">
          <h2> Welcome to Meme Generator </h2>
          { 
          this.props.memes.slice(0,this.state.memelimit).map((meme,index) => {
            return(
               <h4 key={index}> {meme.name} </h4>
             ) 
           })
           }
           <Button className="meme-button" onClick={() => this.setState({memelimit:this.state.memelimit+10})}>
              Load 10 more memes......
           </Button>
      </div>
    );
  }
 
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps,null)(App);
