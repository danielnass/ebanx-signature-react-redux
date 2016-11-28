import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions'

import store from '../store/';
import { updateTextarea } from '../actions';

import ClipboardButton from 'react-clipboard.js';

function mapStateToProps(state) {
    return {
        textarea: state.textarea,
        input: state.input,
        select: state.select
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

class Olar extends Component {
  handleClick(e) {
    const random = Math.random() * (e.target.scrollWidth - e.target.scrollHeight) + e.target.scrollHeight;

    store.dispatch(updateTextarea(`OLAR ${random.toString()}`))
  }

  onSuccess = (e) => {
    const toggleClasses = () => {
      let el = this.refs.copyBtn.refs.element;

      el.classList.toggle('btn-success', 'btn-info');
      el.classList.toggle('btn-info');
      el.classList.toggle('is-active');
    };

    toggleClasses();
    setTimeout(() => {
      toggleClasses();
      window.getSelection().removeAllRanges();
    }, 5000);
  }

  render() {
    let { input, textarea, select } = store.getState();

    let {
      name = '',
      telephone = '',
      skype = '',
      position = ''
    } = input;

    return (
      <div className="signature">
        <div className="signature__result" ref="preview" id="preview">
          <table cellPadding="0" cellSpacing="0" style={{border:0,margin:0,paddingTop:0,paddingRight:'10px',paddingBottom:0,paddingLeft:'10px'}} width="300">
            <tbody>
              <tr>
                <td style={{verticalAlign: 'top'}}>
                  <center>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{paddingRight: '8px', verticalAlign: 'top'}}>
                                    <table width="10" height="120" cellPadding="0" cellSpacing="0">
                                      <tbody>
                                        <tr>
                                          <td style={{width: '10px', height: '120px'}} width="10">
                                            <img src="https://cdn-email.ebanx.com/signature/ornament.png" alt="Ornament" style={{maxWidth: '100%', width: '20px', height: 'auto', display: 'block'}} />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{color: '#999999', fontFamily: 'Arial,Helvetica,Sans-serif'}}>
                                    <table width="280" cellPadding="0" cellSpacing="0">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <table cellPadding="0" cellSpacing="0">
                                              <tbody>
                                                <tr>
                                                  <td width="100" height="20">
                                                    <a href="https://www.ebanx.com" style={{display: 'block'}}>
                                                      <img src="https://cdn-email.ebanx.com/signature/ebanx.png" alt="Ornament" style={{maxWidth: '100%', width: '100px', height: 'auto', display: 'block'}} />
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{paddingTop: '13px'}}>
                                                    <span style={{fontFamily: 'Open Sans,Arial,Helvetica,Sans-serif', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.4px'}}>{name.text || 'Daniel Nass'}</span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{paddingTop: '4px'}}>
                                                    <span style={{fontFamily: 'Open Sans,Arial,Helvetica,Sans-serif', fontSize: '14px', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.4px'}}>{position.text || 'Front-end Developer'}</span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{paddingTop: '4px'}}>
                                                    <img src="https://cdn-email.ebanx.com/signature/phone.png" alt="Ornament" style={{maxWidth: '100%', width: '14px', height: 'auto'}} />
                                                    <span className="tel" style={{paddingLeft: '5px', fontFamily: 'Open Sans,Arial,Helvetica,Sans-serif', fontSize: '14px', fontWeight: '300', letterSpacing: '0.4px', color: '#999999', verticalAlign: 'middle'}}><a href="tel:+554133333333" style={{fontFamily: 'Open Sans,Arial,Helvetica,Sans-serif', fontSize: '14px', fontWeight: '300', letterSpacing: '0.4px', color: '#999999', textDecoration: 'none'}}>{telephone.text || '+55 41 3333-3333'}</a></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style={{paddingTop: '4px'}}>
                                                    <img src="https://cdn-email.ebanx.com/signature/skype.png" alt="Ornament" style={{maxWidth: '100%', width: '14px', height: 'auto'}} />
                                                    <span style={{paddingLeft: '5px', fontFamily: 'Open Sans,Arial,Helvetica,Sans-serif', fontSize: '14px', fontWeight: '300', letterSpacing: '0.4px', verticalAlign: 'middle'}}>{skype.text || 'daniel.nass.'}</span>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign: 'top', paddingTop: '20px'}}>
                            <table width="298" cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{lineHeight: '0.8'}}>
                                    <img src={'https://cdn-email.ebanx.com/signature/'+select+'.png'} alt="Campaign" style={{maxWidth: '100%', width: '298px', height: 'auto', display: 'block'}} />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign: 'top', paddingTop: '20px'}}>
                            <table width="230" cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{lineHeight: '0.8'}}>
                                    <span style={{fontFamily: 'Arial,Helvetica,Sans-serif', fontSize: '10px', fontWeight: 'normal', letterSpacing: '-.2px', color: '#999999'}}>{textarea}</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="signature__copy">
          <ClipboardButton className="btn btn-info btn-large" onSuccess={this.onSuccess} data-clipboard-target="#preview" ref="copyBtn">
            Click here to copy signature
          </ClipboardButton>
        </div>
      </div>
    )
  }
};

// const Olar = () {

// }

const SignatureResult = connect(
    mapStateToProps,
    mapDispatchToProps
)(Olar);


export default SignatureResult;