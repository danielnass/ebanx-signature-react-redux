export const UPDATE_TEXTAREA = 'UPDATE_TEXTAREA';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_SELECT = 'UPDATE_SELECT';

export function updateTextarea(name, text) {
    return {
        type: UPDATE_TEXTAREA,
        name,
        text
    }
}

export function updateInput(name, text) {
    return {
        type: UPDATE_INPUT,
        name,
        text
    }
}

export function updateSelect(value) {
    return {
        type: UPDATE_SELECT,
        value
    }
}