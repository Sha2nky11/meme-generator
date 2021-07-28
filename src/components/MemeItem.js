import React , {Component} from 'react'
import { memo } from 'react';
import {connect} from 'react-redux'
import {createMeme} from '../actions/index'

class MemeItems extends Component {

    constructor() {
        super();

        this.state = {
            hover:false
        }
    }

    postMemes(){
        const {text0,text1} = this.props;
       
        const memeObj = {
            template_id : this.props.memes.id,
            text0,
            text1
        }
         if(text0 || text1)
             this.props.createMeme(memeObj) ;
         else{
             alert("Please enter something in Top/Bottom Inputs" );
         }    
    }

    render() {
        return(
            <div className="meme-item"
                 onMouseEnter = {() => this.setState({hover:true})} 
                 onMouseLeave = {()=> this.setState({hover:false})}
                 onClick={() => this.postMemes()}
                 >
                <img className={this.state.hover ? "dark-meme-img ":"meme-img"} 
                    src={this.props.memes.url} alt={this.props.memes.name} />
                <p className= {this.state.hover ? "meme-text" : "no-text"}>
                    {this.props.memes.name}
                </p>
            </div>
        );
    }
}


export default  connect(null,{createMeme})(memo(MemeItems));