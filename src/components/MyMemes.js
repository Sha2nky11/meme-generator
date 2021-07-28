import React ,{Component} from 'react'
import {connect} from 'react-redux'



class MyMemes extends Component {

    // download(image){
    //     var element = document.createElement("a");
    //     var file = new Blob(
    //       [
    //         image
    //       ],
    //       { type: "image/*" }
    //     );
    //     element.href = URL.createObjectURL(file);
    //     element.download = "image.jpg";
    //     element.click();
    //   };
    
    render(){
        
        return(
            <div>
                {this.props.myMemes.map((meme,index) => {
                    return (
                        <a key={index} href={meme.data.url} download>
                            <img 
                            key={index} src={meme.data.url} 
                            alt="my-meme"
                            className="mymeme-img" 
                           // onClick={() => this.download(meme.data.url)}   
                        />
                        <i className="fa fa-download" />
                        </a>
                        
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        myMemes : state.myMemes
    }
}

export default connect(mapStateToProps,null)(MyMemes);