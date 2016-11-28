import { combineReducers } from 'redux';

import { UPDATE_TEXTAREA, UPDATE_INPUT, UPDATE_SELECT } from '../actions'

const textareaInitialState = 'Privileged and confidential. If this message has been received in error, notify the sender and delete it.';

export function textarea(state = textareaInitialState, action) {
    switch (action.type) {
        case UPDATE_TEXTAREA:
            return action.text
        default:
            return state
    }
}

const input = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return Object.assign({}, state,
                {
                    [action.name]:{
                        // index: action.index,
                        text: action.text
                    }
                }
            )
        default:
            return state
    }
}

const select = (state = 'signature-campaign-default', action) => {
    switch (action.type) {
        case UPDATE_SELECT:
            return action.value
        default:
            return state
    }
}

export const signatureReducers = combineReducers({
    textarea,
    input,
    select
});

