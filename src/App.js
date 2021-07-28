import React ,{ Component,memo } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
import MemeItems from './components/MemeItem';
import MyMemes from './components/MyMemes';

class App extends Component {

  constructor() {
    super();

    this.state = {
      memelimit:16,
      text0 : "",
      text1 : ""
    }
  }
  

  render() {
    return (
      <div className="App">
          <h2><u> Welcome to Meme Generator</u> </h2>
          <MyMemes/>
          <h4> write some text</h4>
          
          <Form inline>
              <FormGroup>
                <FormLabel> Top </FormLabel>
                {" "}
                <FormControl required type="text" onChange={(event) => this.setState({text0: event.target.value})} />
              </FormGroup>
              { "    "}
              <FormGroup>
                <FormLabel> Bottom </FormLabel>
                {" "}
                <FormControl required type="text"  onChange={(event) => this.setState({text1: event.target.value})} />
              </FormGroup>
          </Form>
          { 
          this.props.memes.slice(0,this.state.memelimit).map((meme,index) => {
            return(
               <MemeItems 
                  key={index} 
                  memes={meme} 
                  text0={this.state.text0}
                  text1={this.state.text1}
                  />
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

export default connect(mapStateToProps,null)(memo(App));
