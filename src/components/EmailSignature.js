import React, { Component } from 'react';
import SignatureResult from './SignatureResult'
import SignatureForm from './SignatureForm'

// import store from '../store/';

class EmailSignature extends Component {
  render() {
    return (
      <div className="container">
        <SignatureResult />
        <SignatureForm />
      </div>
    )
  }
}

// const EmailSignature = () => (
//   <div className="container">
//     <SignatureResult />
//     <SignatureForm />
//   </div>
// );

// class EmailSignature extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     // console.log(...inputs);
//     // let id = e.id;
//     // let value = id;
//     // console.dir(e);
//     // console.log(...inputs);
//     // this.setState();
//   }

//   render() {
//     return (
//       <div className="container">
//         <SignatureResult
//           result={this.state}
//         />
//         <SignatureForm
//           changed={this.handleChange}
//         />
//       </div>
//     )
//   }
// }

export default EmailSignature;