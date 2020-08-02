import {POSTS_FETCH_SUCCESS, 
    LOADING_DATA, 
    ERROR} from "../actionTypes/all";

const initialState = {
    data: {},
    isLoading: true,
    isLoaded: false,
    error: false,
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_FETCH_SUCCESS:
            return {
                ...state, data: action.payload, isLoaded: true, isLoading: false,
            };
        case LOADING_DATA:
            return {
                ...state, isLoading: action.payload
            };
        case ERROR:
            return {
                ...state, error: action.payload
            };
        default:
            return state
    }
}

export default PostsReducer;