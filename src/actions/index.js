import { Alert } from 'react-bootstrap';
import {username,password} from '../actions/secrets'

export const RECEIVE_MEMES = 'RECEIVE_MEMES'
export const NEW_MEMES ='NEW_MEMES'

function receiveMemes(json){
    const {memes} = json.data;

    return {
        type : RECEIVE_MEMES,
        memes
    }
}

async function fetchMemesJson(){
    try{
    return await fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json());
    }
    catch(error){
        <Alert color='primary' fade={false}>check it out!</Alert>
    }
}

export function fetchMemes() {
    return function(dispatch){
        return fetchMemesJson().then(
            json => dispatch(receiveMemes(json))
        )
    }
}

function newMeme(memes){
    return{
        type:NEW_MEMES,
        memes
    }
}

async function postMemesJson(param){
    param["username"]=username;
    param["password"]=password;

    const bodyParams = Object.keys(param).map(key =>{
        return encodeURIComponent(key) + '=' + encodeURIComponent(param[key])
    }).join('&');

    try{
    return await fetch("https://api.imgflip.com/caption_image",{
        method:"POST",
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body :bodyParams 
    }).then(response => response.json())
    }
    catch(error){
        <Alert color='primary' fade={false}>check it out!</Alert>
    }

}

export function createMeme(new_meme_object) {
    return function(dispatch) {
        return postMemesJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}