import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_USER, REFRESH_TOKEN_FAIL, REFRESH_TOKEN_START, REFRESH_TOKEN_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS, SET_ERROR_EMPTY } from "../actions/ActionsTypes";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        case REGISTER_START:
        case REFRESH_TOKEN_START:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        // case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case REFRESH_TOKEN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case REFRESH_TOKEN_SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.payload
        }
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        case SET_ERROR_EMPTY:
            return {
                ...state,
                error: null
            }
    
        default:
            return state;
    }
}

export default authReducer;