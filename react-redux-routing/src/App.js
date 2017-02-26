import React from 'react';
import { connect } from 'react-redux';
import { getForm1 } from './actions/action1';


const App = ({
   ownProps,
   form1
 }) => {

  return (
    <div className="App">
      {form1}
    </div>
  );

}

export default connect(
  (state, ownProps) => ({
    ownProps,
    form1: state.form1
  }),
  dispatch => ({
    onGetForm1: () => {
      dispatch(getForm1())
    }
  })
)(App);
