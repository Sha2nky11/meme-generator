const RECEIVE_MEMES = 'RECEIVE_MEMES'

export function receiveMemes(json){
    const {memes} = json.data;

    return {
        type : RECEIVE_MEMES,
        memes
    }
}