import React from 'react';

import store from '../../store/';
import { updateTextarea } from '../../actions/';
import { inputClasses } from '../../components/Inputs';

const textareaHandleChange = function(e) {
    store.dispatch(updateTextarea(e.target.id, e.target.value));
}

const Textarea = (props) => {
    return (
      <div>
        <label htmlFor={props.id}>
          {props.labelText}
        </label>
        <textarea
          className={inputClasses(props.classes)}
          id={props.id}
          defaultValue={props.placeholder}
          onChange={(event) => textareaHandleChange(event)}
        />
      </div>
    )
}

export default Textarea;