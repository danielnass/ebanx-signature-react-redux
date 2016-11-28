import React, { Component } from 'react';
import {InputText} from './Inputs';
import Select from './inputs/Select';
import Textarea from './inputs/Textarea';

import store from '../store/';
import { updateTextarea } from '../actions';

const textareaDefaultText = store.getState().textarea;
// console.log(store);
const campaignDefault = ['Default'];

class SignatureForm extends Component {

  textareaHandleChange = (e) => {
    console.log(e.target.value);
      store.dispatch(updateTextarea(e.target.id, e.target.value));
  }

  render() {
    return (
      <div className="signature-form row">
        <div className="form-group col-xs-12 col-md-6">
          <InputText
            labelText="Name"
            id="name"
            placeholder="Your Name"
            changed={this.props.changed}
          />
        </div>
        <div className="form-group col-xs-12 col-md-6">
          <InputText
            labelText="Position"
            id="position"
            placeholder="Your Name"
            changed={this.props.changed}
          />
        </div>
        <div className="form-group col-xs-12 col-md-4">
          <InputText
            labelText="Telephone"
            type="tel"
            id="telephone"
            placeholder="Eg. +55 41 3333-3333"
          />
        </div>
        <div className="form-group col-xs-12 col-md-4">
          <InputText
            labelText="Skype"
            id="skype"
            placeholder="Skype User"
          />
        </div>
        <div className="form-group col-xs-12 col-md-4">
          <Select
            labelText="Campaign"
            id="campaign"
            options={campaignDefault}
          />
        </div>
        <div className="form-group col-xs-12">
          <Textarea
            labelText="Additional Information"
            id="more-info"
            placeholder={textareaDefaultText}
            textareaHandleChange={this.textareaHandleChange}
          />
        </div>
      </div>
    )
  }
};

export default SignatureForm;