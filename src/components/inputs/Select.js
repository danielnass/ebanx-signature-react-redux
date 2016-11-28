import React from 'react';

import store from '../../store/';
import { updateSelect } from '../../actions/';

const selectHandleChange = function(e) {
    store.dispatch(updateSelect(e.target.value));
}

const Select = (props) => {
    return(
      <div>
        <label htmlFor={props.id}>
          {props.labelText}
        </label>
        <select className="form-control" id={props.id} onChange={(event) => {selectHandleChange(event)}}>
          {props.options.map((option, i) => {
            let clearOption = option.replace(/ /g, "-").toLowerCase();
            return <option value={clearOption} key={i}>{option}</option>
          })}
        </select>
      </div>
    )
};

export default Select;