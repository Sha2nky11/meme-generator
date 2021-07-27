import {combineReducers} from 'redux'
import { RECEIVE_MEMES ,NEW_MEMES} from '../actions/index'

function memes(state =[], action){
    switch(action.type){
        case RECEIVE_MEMES:
            return action.memes;
        default: 
            return state;    
    }
}

function myMemes(state=[],action){
    switch(action.type){
          case NEW_MEMES:
              state = [...state,action.memes];
                return state;
           default:
                return state  ; 

    }      
}

const rootReducer = combineReducers({
    memes,
    myMemes
});

export default rootReducer;

