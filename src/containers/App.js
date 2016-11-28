import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions'

import EmailSignature from '../components/EmailSignature';

function mapStateToProps(state) {
    return {
        textarea: state.textarea,
        input: state.input,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailSignature);

export default App;