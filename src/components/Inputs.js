import React, { Component } from 'react';

import store from '../store/'
import { updateInput } from '../actions'

const inputClasses = function(classes) {
  return classes !== undefined ?
  `${classes} form-control`
  : 'form-control';
}

class InputText extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.value
  //   }
  //   this.handleSetChange = this.handleSetChange.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // defaultProps = {
  //   type: "text",
  //   value: ""
  // }

  // handleSetChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  handleChange(e) {
    // console.dir(e.target.id);
    store.dispatch(updateInput(e.target.id, e.target.value));
  }


  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>
          {this.props.labelText}
        </label>
        <input
          type={this.props.type}
          className={inputClasses(this.props.classes)}
          onChange={this.handleChange}
          id={this.props.id}
          ref={this.props.id}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
};







export {InputText, inputClasses};